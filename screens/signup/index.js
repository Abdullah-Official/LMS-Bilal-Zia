import React, { useState } from "react";
import { TextInput } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { ImageBackground } from "react-native";
import { Text, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import styles from "../signin/styles";
import { useMutation } from "react-query";
import axios from "axios";
import { Spinner } from "native-base";
import { BASE_URL } from "../../app/api";
import { ActivityIndicator } from "react-native";
import { PrimaryColor } from "../../Constants/theme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CommonAlert from "../../components/alert/common-alert";
import { useFormik } from "formik";
import { SignupSchema } from "../../validations/auth";

const SignUp = ({ navigation }) => {
  const [visible, setVisible] = React.useState(false);
  const [response, setResponse] = React.useState("");
  const toggleAlert = React.useCallback(() => {
    setVisible(!visible);
  }, [visible]);
  const mutation = useMutation(
    (post) => axios.post(`${BASE_URL}/signup`, post),
    {
      onSuccess: async (data) => {
        let res = await data.data?.message;
        setResponse(res);
        toggleAlert();
        setTimeout(() => {
          navigation.navigate("SignIn");
        }, 2000);
      },
      onError: async (data) => {
        let res = await data.data?.message;
        setResponse(res);
        toggleAlert();
      },
    }
  );

  const authenticate = (values) => {
    mutation.mutate(values);
  };

  const formik = useFormik({
    validationSchema: SignupSchema,
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      cpassword: "",
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
          scrollEnabled={true}
          style={{
            width: "100%",
          }}
        >
          <KeyboardAvoidingView
            enabled
            behavior="handled"
            //   keyboardVerticalOffset={-500}
          >
            <View style={{ flex: 1, marginHorizontal: 20 }}>
              <View style={{ paddingTop: 110 }}>
                <Text style={styles.login_heading}>Sign Up</Text>
              </View>
              {/* <Text>{error}</Text> */}
              <View style={{ marginHorizontal: 20, marginTop: 20 }}>
                <View style={styles.input_container}>
                  <Text style={styles.placholder}>Name</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={formik.handleChange("name")}
                    value={formik.values.name}
                    name="name"
                    placeholderTextColor="white"
                  />
                  {formik.errors.name && (
                    <Text style={{ color: "red", fontSize: 12, paddingTop: 5 }}>
                      {formik.errors.name}
                    </Text>
                  )}
                </View>
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
                  <Text style={styles.placholder}>Phone</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={formik.handleChange("phone")}
                    value={formik.values.phone}
                    keyboardType="phone-pad"
                    name="phone"
                    placeholderTextColor="white"
                  />
                  {formik.errors.phone && (
                    <Text style={{ color: "red", fontSize: 12, paddingTop: 5 }}>
                      {formik.errors.phone}
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
                <View style={styles.input_container}>
                  <Text style={styles.placholder}>Confirm Password</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={formik.handleChange("cpassword")}
                    value={formik.values.cpassword}
                    name="cpassword"
                    placeholderTextColor="white"
                    secureTextEntry={true}
                  />
                  {formik.errors.cpassword && (
                    <Text style={{ color: "red", fontSize: 12, paddingTop: 5 }}>
                      {formik.errors.cpassword}
                    </Text>
                  )}
                </View>
              </View>
              <View style={{ marginVertical: 15 }}>
                <TouchableOpacity
                  onPress={formik.handleSubmit}
                  activeOpacity={0.7}
                  style={styles.btn_container}
                >
                  {mutation.isLoading ? (
                    <ActivityIndicator size="small" color={PrimaryColor} />
                  ) : (
                    <Text style={styles.btn_txt}>Sign up</Text>
                  )}
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate("SignIn")}
                  style={styles.account_container}
                >
                  <Text style={styles.accTxt}>Already have an Account?</Text>
                  <Text style={styles.accTxt2}>Sign In</Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
        {response?.length > 0 && (
          <CommonAlert
            visible={visible}
            setVisible={setVisible}
            response={response}
            toggleAlert={toggleAlert}
          />
        )}
      </ImageBackground>
    </>
  );
};

export default SignUp;
