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
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PrimaryColor } from "../../Constants/theme";

const Signin = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const validation = email && password;

  const setOnboarding = async (value) => {
    try {
      await AsyncStorage.setItem('@onboarding', value)
    } catch (e) {
      // saving error
      throw e;
    }
  }

  const setUser = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('@user', jsonValue)
    } catch(e) {
      // save error
      console.log(e)
    }  
  }

  const setToken = async (value) => {
    try {
      await AsyncStorage.setItem('@token', value)
      dispatch(addToken(value))
    } catch (e) {
      // saving error
      throw e;
    }
  }

  const mutation = useMutation(
    (post) => axios.post(`${BASE_URL}/signin`, post),
    {
      onSuccess: (data) => {
        console.log(data.data.token)
        dispatch(userInfo(data.data.message));
        dispatch(addToken(data.data.token));
        setUser(data.data.message)
        
        setOnboarding('true')
        //   alert("Success login")
      },
      onError: (e) => {
        alert(e.response.data.error);
        console.log(e)
      },
    }
  );

  const authenticate = () => {
    // dispatch(signinUser({email,password}))
    mutation.mutate({ email, password });
    setEmail("");
    setPassword("");
  };

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
                    onChangeText={(e) => setEmail(e)}
                    value={email}
                    placeholderTextColor="white"
                  />
                </View>

                <View style={styles.input_container}>
                  <Text style={styles.placholder}>Password</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={(e) => setPassword(e)}
                    value={password}
                    placeholderTextColor="white"
                    secureTextEntry={true}
                  />
                </View>
              </View>
              <View style={{ marginVertical: 15, alignItems: "center" }}>
                <TouchableOpacity
                  disabled={!validation ? true : false}
                  onPress={authenticate}
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
        </ScrollView>
      </ImageBackground>
    </>
  );
};

export default Signin;
