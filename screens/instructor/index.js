import React from "react";
import { Image } from "react-native";
import { Platform } from "react-native";
import { View, Text, Linking } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import HeaderApp from "../../components/Header";
import styles from "./styles";

const InstructorScreen = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
          <View style={{ justifyContent: "center", marginTop: 30 }}>
            <HeaderApp
              iconLeft={require("../../assets/black-arrow.png")}
              nav="back"
            />
          </View>
        </View>
        <View style={{ flex: 2, alignItems: "center" }}>
          <View style={{ marginTop: 40, alignItems: "center" }}>
            <Image
              source={require("../../assets/instructor.png")}
              style={{ width: 160, height: 160, resizeMode: "contain" }}
            />
            <View
              style={{
                alignItems: "center",
                marginHorizontal: 40,
                marginVertical: 30,
              }}
            >
              <Text style={styles.whoTxt}>Who am I?</Text>
              <Text style={styles.instInfoTxt}>
                Cras viverra nibh amet senectus dui, egestas quis. Gravida
                scelerisque semper nullam eleifend vel lorem lacinia. Gravida
                scelerisque semper nullam eleifend vel lorem lacinia. Gravida
                scelerisque semper nullam eleifend vel lorem lacinia.
              </Text>
            </View>
            <View style={styles.social_container}>
              <TouchableOpacity style={{ paddingHorizontal: 10 }}>
                <Image
                  source={require("../../assets/mail.png")}
                  style={{
                    width: 40,
                    height: 40,
                    resizeMode: "contain",
                    borderRadius: 4,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity style={{ paddingHorizontal: 10 }}>
                <Image
                  source={require("../../assets/linkedin.png")}
                  style={{
                    width: 40,
                    height: 40,
                    resizeMode: "contain",
                    borderRadius: 4,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity style={{ paddingHorizontal: 10 }}>
                <Image
                  source={require("../../assets/logos_facebook.png")}
                  style={{
                    width: 40,
                    height: 40,
                    resizeMode: "contain",
                    borderRadius: 4,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default InstructorScreen;
