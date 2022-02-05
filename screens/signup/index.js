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

const SignUp = ({ navigation }) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();
  const [cpassword, setCPassword] = useState();
  const validation = name && email && phone && password == cpassword;
  const mutation = useMutation(
    (post) => axios.post(`${BASE_URL}/signup`, post),
    {
      onSuccess: (data) => {
        alert(data.data.message);
        setTimeout(() => {
          navigation.navigate("SignIn")
        },1000)
      },
      onError: (data) => {
        alert(data.data.message);
      },
    }
  );

  const authenticate = () => {
    mutation.mutate({ name, email, phone, password, cpassword });
    setName("");
    setEmail("");
    setPhone("");
    setPassword("");
    setCPassword("");
    // AsyncStorage.removeItem('@onboarding')
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
                    onChangeText={(e) => setName(e)}
                    value={name}
                    placeholderTextColor="white"
                  />
                </View>
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
                  <Text style={styles.placholder}>Phone</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={(e) => setPhone(e)}
                    value={phone}
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
                <View style={styles.input_container}>
                  <Text style={styles.placholder}>Confirm Password</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={(e) => setCPassword(e)}
                    value={cpassword}
                    placeholderTextColor="white"
                    secureTextEntry={true}
                  />
                </View>
              </View>
              <View style={{ marginVertical: 15 }}>
                <TouchableOpacity
                  onPress={authenticate}

                  disabled={
                   !validation ? true : false
                  }
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
      </ImageBackground>
    </>
  );
};

export default SignUp;
