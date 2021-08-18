import React, { useEffect, useState } from "react";
import { ImageBackground } from "react-native";
import { StatusBar } from "react-native";
import { Image } from "react-native";
import { Button, Text, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import HeaderApp from "../../components/Header";
import styles from "./styles";
import { Feather } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile = ({ navigation }) => {
  const state = useSelector((state) => state.user);
  const [user, setUser] = useState({})
  // console.log("user from profile  " ,user )
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
  return (
    <>
      <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
        <View style={{ flex: 1 }}>
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
                  iconLeft={require("../../assets/nav-con.png")}
                  nav="drawer"
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
                  source={require('../../assets/profile-pic.png')}
                  style={styles.profileImg}
                  /> */}
                <View 
                style={{
                  backgroundColor:'#234F8F',
                  width:80,
                  height:80,
                  padding:6,
                  justifyContent:'center',
                  alignItems:'center',
                  borderRadius:100
                }}
                >
                  <Text
                    style={{
                      fontSize: 24,
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      color:"#fff"
                    }}
                  >
                    {state.user.name && state.user.name.slice(0, 2)}
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={{ marginTop: 40, marginHorizontal: 25 }}>
            <View style={styles.details_container}>
              <Text style={styles.textDark}>Name</Text>
              <Text style={styles.textLight}>{state.user.name && state.user.name}</Text>
            </View>
            <View style={styles.details_container}>
              <Text style={styles.textDark}>Email</Text>
              <Text style={styles.textLight}>{state.user.email && state.user.email}</Text>
            </View>
            <View style={styles.details_container}>
              <Text style={styles.textDark}>Phone</Text>
              <Text style={styles.textLight}>{state.user.phone && state.user.phone}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.pencil} activeOpacity={0.6}>
        <TouchableOpacity onPress={() => navigation.navigate("ProfileEdit")}>
          <Feather name="edit" size={22} color="white" />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Profile;
