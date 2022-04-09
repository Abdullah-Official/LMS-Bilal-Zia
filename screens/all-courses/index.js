import React, { useEffect } from "react";
import { FlatList, ActivityIndicator } from "react-native";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CoursesBox from "../../components/Courses";
import HeaderApp from "../../components/Header";
import { CoursesData } from "../../Data/Courses";
import { useDispatch, useSelector } from "react-redux";
import { fetchClasses } from "../../reducers/classReducer";
import axios from "axios";
import { BASE_URL } from "../../app/api";
import { PrimaryColor } from "../../Constants/theme";
import NoDataComponent from "../../components/noData/no-data";

const AllCourses = () => {
  // const classes = useSelector((state) => state.classes);
  const dispatch = useDispatch();
  const [classes, setClasses] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  console.log("CLASSE", classes);

  const fetchClass = async () => {
    try {
      await axios
        .get(`${BASE_URL}/getclasses/`)
        .then((response) => {
          let data = response.data.message;
          setLoading(false);
          setClasses(data);
        })
        .catch((e) => console.log("error ", e));
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    setLoading(true);
    fetchClass();
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ justifyContent: "center", marginTop: 30 }}>
        <HeaderApp
          iconLeft={require("../../assets/black-arrow.png")}
          // iconRight={require('../../assets/profile-pic.png')}
          nav="back"
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginTop: 30, marginHorizontal: 25 }}>
          <Text
            style={{
              fontFamily: "PoppinsSemiBold",
              color: "#01110A",
              fontSize: 22,
            }}
          >
            All Courses
          </Text>
          <View style={{ alignItems: "center", marginVertical: 20 }}>
            {loading ? (
              <ActivityIndicator size="large" color={PrimaryColor} />
            ) : loading == false && classes?.length == 0 ? (
              <NoDataComponent
                message="No courses found"
                description="We did not find any courses"
                iconPath={require("../../assets/no-data.png")}
              />
            ) : (
              <FlatList
                showsHorizontalScrollIndicator={false}
                data={classes && classes}
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
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AllCourses;
