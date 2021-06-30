import React, { useState, useEffect } from "react";
import { FlatList, StatusBar } from "react-native";
import { Image } from "react-native";
import { ImageBackground } from "react-native";
import { Text, View } from "react-native";
import CoursesBox from "../../components/Courses";
import HeaderApp from "../../components/Header";
import styles from "./styles";
import { CoursesData } from "../../Data/Courses";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { fetchClasses } from "../../reducers/classReducer";
import axios from "axios";
// import { fetchEnrollClasses } from "../../reducers/enrollclassesReducer";

const Home = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const state = useSelector(state => state.user)
  const [data, setData] = useState([])
  console.log(state)
//   const { isLoading, error, data } = useQuery('enrollclasses', () =>
//   fetch(`https://physics-by-bilal-zia-29lh6uim8-abdullah-official.vercel.app/getenrollclasses/${state.user._id}`).then(res =>
//     res.json()
//   )
// )
const classes = useSelector(state => state.classes)
// const enrolledClasses = useSelector(state => state.enrolledClasses)
// console.log(enrolledClasses, " sasasafaf")

useEffect(() => {
  dispatch(fetchClasses())
  // dispatch(fetchEnrollClasses({id: state.user._id}))
 fetchEnrolled()

}, [])

  const fetchEnrolled = () => {
    axios.get(`https://physics-by-bilal-zia-29lh6uim8-abdullah-official.vercel.app/getenrollclasses/${state.user._id}`)
    .then(response => setData(response.data.message))
    .catch(e => console.log("error ", e))
  }

// console.log(data, " Enrolled")


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
                    <Text style={styles.nameTxt}>{state.user.name}</Text>
                  </View>
                  <View style={{ justifyContent: "center" }}>
                  <View 
                style={{
                  backgroundColor:'#234F8F',
                  width:55,
                  height:55,
                  padding:6,
                  justifyContent:'center',
                  alignItems:'center',
                  borderRadius:100
                }}
                >
                  <Text
                    style={{
                      fontSize: 22,
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      color:"#fff"
                    }}
                  >
                    {state.user.name.slice(0, 2)}
                  </Text>
                </View>
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
            {data.length  ? (
                <FlatList
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  data={data}
                  renderItem={({ item }) => (
                    <CoursesBox
                      id={item._id}
                      grade={item.grade}
                      about={item.about}
                      chapters={item.chapters}
                      navigation={"Chapters"}
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
                  data={classes}
                  renderItem={({ item }) => (
                    <CoursesBox
                      id={item._id}
                      grade={item.grade}
                      about={item.about}
                      navigation={"CourseDetails"}
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
