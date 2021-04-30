import React, { useState } from "react";
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

const ProfileEdit = () => {
  const [cPassword, setCPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [cnPassword, setCnPassword] = useState();

  return (
    <>
      <ScrollView
        style={{ flex: 1, backgroundColor: "#fff" }}
        keyboardShouldPersistTaps={"handled"}
        bounces={false}
        scrollEnabled={true}
        style={{
          width: "100%",
        }}
      >
        <KeyboardAvoidingView
          style={{ backgroundColor: "#fff" }}
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
                  <Image
                    source={require("../../assets/profile-pic.png")}
                    style={styles.profileImg}
                  />
                </View>
              </ImageBackground>
            </View>
            <View style={{ marginTop: 30, marginHorizontal: 25 }}>
              <View style={{ marginBottom: 20 }}>
                <Text style={styles.textDark}>Name</Text>
                <TextInput style={styles.input} value={"Marry Jane"} />
              </View>
              <View style={{ marginBottom: 20 }}>
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
              </View>
              <View style={{ marginVertical: 10, alignItems: "center" }}>
                <TouchableOpacity style={styles.btnBuy} activeOpacity={0.6}>
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
