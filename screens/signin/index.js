import React, { useState } from "react";
import { ActivityIndicator, KeyboardAvoidingView } from "react-native";
import { StatusBar } from "react-native";
import { TouchableOpacity } from "react-native";
import { ImageBackground, Image } from "react-native";
import { Text, View } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import styles from "./styles";
import axios from "axios";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { addToken, userInfo, userToken } from "../../reducers/userReducer";
import { Spinner } from "native-base";
import { BASE_URL } from "../../app/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { PrimaryColor } from "../../Constants/theme";
import CommonAlert from "../../components/alert/common-alert";
import { useFormik } from "formik";
import { LoginSchema } from "../../validations/auth";

const Signin = ({ navigation }) => {
  const dispatch = useDispatch();
  const [visible, setVisible] = React.useState(false);
  const [response, setResponse] = React.useState("");
  const toggleAlert = React.useCallback(() => {
    setVisible(!visible);
  }, [visible]);
  const setOnboarding = async (value) => {
    try {
      await AsyncStorage.setItem("@onboarding", value);
    } catch (e) {
      // saving error
      throw e;
    }
  };

  const setUser = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@user", jsonValue);
    } catch (e) {
      // save error
      console.log(e);
    }
  };

  const setToken = async (value) => {
    try {
      await AsyncStorage.setItem("@token", value);
      dispatch(addToken(value));
    } catch (e) {
      // saving error
      throw e;
    }
  };

  const mutation = useMutation(
    (post) => axios.post(`${BASE_URL}/signin`, post),
    {
      onSuccess: (data) => {
        console.log(data.data.token);
        dispatch(userInfo(data.data.message));
        dispatch(addToken(data.data.token));
        setUser(data.data.message);

        setOnboarding("true");
        //   alert("Success login")
      },
      onError: async (e) => {
        let res = await e.response.data.error;
        setResponse(res);
        toggleAlert();
        // alert(e.response.data.error);
        console.log(e);
      },
    }
  );

  const authenticate = (values) => {
    mutation.mutate(values);
  };

  const formik = useFormik({
    validationSchema: LoginSchema,
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      authenticate(values);
    },
  });

  return (
    <>
      <ImageBackground
        style={{ flex: 1, width: "100%", height: "100%" }}
        source={require("../../assets/gradient-bg.png")}
      >
        <ScrollView
          keyboardShouldPersistTaps={"handled"}
          bounces={false}
          scrollEnabled={false}
          style={{
            width: "100%",
          }}
        >
          <KeyboardAvoidingView behavior="position" enabled>
            <View style={{ flex: 1, marginHorizontal: 20 }}>
              <View style={{ alignItems: "center", marginTop: 100 }}>
                <Image
                  source={require("../../assets/logo.png")}
                  style={{ width: 140, height: 140 }}
                />
              </View>
              <View style={{ paddingTop: 40 }}>
                <Text style={styles.login_heading}>Login</Text>
              </View>
              {/* <Text style={{textAlign:'center', color:"red", fontWeight:'bold'}}>{name}</Text> */}
              <View style={{ marginHorizontal: 20, marginTop: 20 }}>
                <View style={styles.input_container}>
                  <Text style={styles.placholder}>Email</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={formik.handleChange("email")}
                    value={formik.values.email}
                    keyboardType="email-address"
                    name="email"
                    placeholderTextColor="white"
                  />
                  {formik.errors.email && (
                    <Text style={{ color: "red", fontSize: 12, paddingTop: 5 }}>
                      {formik.errors.email}
                    </Text>
                  )}
                </View>

                <View style={styles.input_container}>
                  <Text style={styles.placholder}>Password</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={formik.handleChange("password")}
                    value={formik.values.password}
                    name="password"
                    placeholderTextColor="white"
                    secureTextEntry={true}
                  />
                  {formik.errors.password && (
                    <Text style={{ color: "red", fontSize: 12, paddingTop: 5 }}>
                      {formik.errors.password}
                    </Text>
                  )}
                </View>
              </View>
              <View style={{ marginVertical: 15, alignItems: "center" }}>
                <TouchableOpacity
                  onPress={formik.handleSubmit}
                  activeOpacity={0.7}
                  style={styles.btn_container}
                >
                  {mutation.isLoading ? (
                    <ActivityIndicator size="small" color={PrimaryColor} />
                  ) : (
                    <Text style={styles.btn_txt}>Login in</Text>
                  )}
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate("SignUp")}
                  style={styles.account_container}
                >
                  <Text style={styles.accTxt}>Create Account?</Text>
                  <Text style={styles.accTxt2}>Sign Up</Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
          {response?.length > 0 && (
            <CommonAlert
              visible={visible}
              setVisible={setVisible}
              response={response}
              toggleAlert={toggleAlert}
            />
          )}
        </ScrollView>
      </ImageBackground>
    </>
  );
};

export default Signin;
