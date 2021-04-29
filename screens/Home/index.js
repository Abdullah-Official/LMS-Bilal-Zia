import React, { useState } from "react";
import { StatusBar } from "react-native";
import { Image } from "react-native";
import { ImageBackground } from "react-native";
import { Text, View } from "react-native";
import CoursesBox from "../../components/Courses";
import HeaderApp from "../../components/Header";
import styles from "./styles";
import { CoursesData } from "../../Data/Courses";
import { FlatList } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";

const Home = () => {
  const [enrolled] = useState(true);
  const navigation = useNavigation()
  return (
    <>
      <ScrollView style={{backgroundColor:'#fff'}}>
        <View style={{ flex: 1 }}>
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
              <View style={{justifyContent:'center', marginTop:30}}>
                <HeaderApp 
                iconLeft={require('../../assets/nav-con.png')}
                iconRight={require('../../assets/logo.png')}
                nav="drawer"
                />
              </View>
              <View>
                <View style={styles.profile_container}>
                  <View>
                    <Text style={styles.helloTxt}>Hello,</Text>
                    <Text style={styles.nameTxt}>Marry Jane</Text>
                  </View>
                  <View style={{ justifyContent: "center" }}>
                    <Image
                      source={require("../../assets/profile-pic.png")}
                      style={{ height: 40, width: 40, resizeMode: "contain" }}
                    />
                  </View>
                </View>
                <View style={{ marginTop: 80, marginHorizontal: 25 }}>
                  <Text style={styles.coursesTxt}>Courses Enrolled</Text>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <View>
              {enrolled === true ? (
                <FlatList
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  data={CoursesData}
                  renderItem={({ item }) => (
                    <CoursesBox
                      id={item.id}
                      grade={item.grade}
                      about={item.about}
                      chapters={item.chapters}
                      // enrolled={item.enrolled}
                    />
                  )}
                  keyExtractor={(item, index) => index.toString()}
                />
              ) : (
                <Text style={styles.noEnrollmentTxt}>
                  It seems like you haven’t enrolled in any of our courses.
                </Text>
              )}
            </View>
            <View style={{ marginBottom: 25 }}>
              <View style={{ marginHorizontal: 25, marginTop: 10, width: 240 }}>
                <Text style={styles.coursesTxt}>Recommended for you</Text>
              </View>
              <View>
                <FlatList
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  data={CoursesData.slice(0,2)}
                  renderItem={({ item }) => (
                    <CoursesBox
                      id={item.id}
                      grade={item.grade}
                      about={item.about}
                      chapters={item.chapters}
                      // enrolled={false}
                    />
                  )}
                  keyExtractor={(item, index) => index.toString()}
                />
              </View>
              <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate("AllCourses")} style={{marginHorizontal:25, }}>
                <Text style={styles.viewAllTxt}>View all courses</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Home;
