import React, { useState, useEffect } from "react";
import { ImageBackground } from "react-native";
import { StatusBar } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { Image } from "react-native";
import { Text, View } from "react-native";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import HeaderApp from "../../components/Header";
import styles from "../Profile/styles";
import { useSelector } from "react-redux";
import axios from "axios";
import { useMutation } from "react-query";
import { BASE_URL } from "../../app/api";
import { Spinner } from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProfileEdit = ({navigation}) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const state = useSelector((state) => state.user);

 
  const [user, setUser] = useState({});
  console.log("user from course ", user)
  async function getUser() {
    try {
      let userData = await AsyncStorage.getItem("userData");
      let data = JSON.parse(userData);
      setUser(data)
    } catch (error) {
      console.log("Something went wrong", error);
    }
  }
  useEffect(() => {
    getUser()
  },[])

  const mutation = useMutation(post => axios.put(`${BASE_URL}/updateuser/${state.user._id}`, post), {
    onSuccess: data =>{
      alert("Updated Successfully! Please login again to see changes")
    },
    onError: e => {
      console.log(e)
    }
  })

  const updateUser = () => {
   if(name, email,  phone ){
     mutation.mutate({name,email,phone})
     setEmail('');
     setName('');
     setPhone('');
     setTimeout(() => {
       navigation.goBack()
     },3000)
   }else{
    alert("Please fill all required fields")
   }
  }

  return (
    <>
      <ScrollView
        style={{ flex: 1, backgroundColor: "#fff", width: "100%" }}
        keyboardShouldPersistTaps={"handled"}
        bounces={false}
        scrollEnabled={true}
      >
        <KeyboardAvoidingView
          style={{ flex: 1, backgroundColor: "#fff" }}
          enabled
          keyboardVerticalOffset={-500}
          behavior="padding"
        >
          <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <StatusBar translucent={true} />
            <View style={{ flex: 1, backgroundColor: "#fff" }}>
              <ImageBackground
                source={require("../../assets/header-home-screen3.png")}
                style={{
                  flex: 1,
                  height: "96%",
                  width: "100%",
                  resizeMode: "contain",
                }}
              >
                <View style={{ justifyContent: "center", marginTop: 30 }}>
                  <HeaderApp
                    iconLeft={require("../../assets/back-arrow-white.png")}
                    nav="back"
                    title="Profile"
                  />
                </View>
                <View
                  style={{
                    alignItems: "center",
                    marginTop: 80,
                    paddingBottom: 20,
                  }}
                >
                  {/* <Image
                    source={require("../../assets/profile-pic.png")}
                    style={styles.profileImg}
                  /> */}
                  <View
                    style={{
                      backgroundColor: "#234F8F",
                      width: 80,
                      height: 80,
                      padding: 6,
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 100,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 24,
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        color: "#fff",
                      }}
                    >
                      {state.user.name && state.user.name.slice(0, 2)}
                    </Text>
                  </View>
                </View>
              </ImageBackground>
            </View>
            <View style={{justifyContent:'center', alignItems:'center'}}>
                    {mutation.isLoading ? (
                      <Spinner  color='green' />
                    ): null}
                  </View>
            <View
              style={{
                marginTop: 30,
                marginHorizontal: 25,
                backgroundColor: "#fff",
              }}
            >
              <View style={{ marginBottom: 20 }}>
                <Text style={styles.textDark}>Name</Text>
                <TextInput
                  placeholder="Edit Your Name"
                  style={styles.input}
                  value={name}
                  onChangeText={(e) => setName(e)}
                />
              </View>
              <View style={{ marginBottom: 20 }}>
                <Text style={styles.textDark}>Email</Text>
                <TextInput
                  placeholder="Edit Your Email"
                  style={styles.input}
                  value={email}
                  onChangeText={(e) => setEmail(e)}
                />
              </View>
              <View style={{ marginBottom: 20 }}>
                <Text style={styles.textDark}>Phone</Text>
                <TextInput
                  placeholder="Edit Your Phone"
                  style={styles.input}
                  value={phone}
                  onChangeText={(e) => setPhone(e)}
                />
              </View>
              {/* <View style={{ marginBottom: 20, backgroundColor:'#fff' }}>
                <Text style={styles.textDark}>Password</Text>
                <TextInput
                  style={styles.input}
                  value={cPassword}
                  onChangeText={(e) => setCPassword(e)}
                  secureTextEntry={true}
                  placeholder="Current password"
                />
                <TextInput
                  style={styles.input}
                  value={newPassword}
                  onChangeText={(e) => setNewPassword(e)}
                  secureTextEntry={true}
                  placeholder="New password"
                />
                <TextInput
                  style={styles.input}
                  value={cnPassword}
                  onChangeText={(e) => setCnPassword(e)}
                  secureTextEntry={true}
                  placeholder="Confirm new password"
                />
              </View> */}
              <View
                style={{
                  marginVertical: 10,
                  alignItems: "center",
                  backgroundColor: "#fff",
                }}
              >
                <TouchableOpacity onPress={updateUser}  style={styles.btnBuy} activeOpacity={0.6}>
                  <Text style={styles.buyTxt}>SAVE</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </>
  );
};

export default ProfileEdit;
