import React from "react";
import { ImageBackground } from "react-native";
import { StatusBar } from "react-native";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import HeaderApp from "../../components/Header";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { useSelector } from "react-redux";
import axios from "axios";
import { useMutation } from "react-query";
import { useNavigation } from "@react-navigation/native";

const CourseDetails = (props) => {
  const navigation = useNavigation();
  const state = useSelector((state) => state.user);
  const mutation = useMutation(
    (post) =>
      axios.post(
        `https://physics-by-bilal-zia-29lh6uim8-abdullah-official.vercel.app/postenrollment/${state.user._id}/${props.route.params.id}`,
        post
      ),
    {
      onSuccess: (data) => {
        console.log(data.data.message);
      },
    }
  );

  const EnrollFunc = () => {
    mutation.mutate();
    setTimeout(() => {
      alert(`Your request has been submitted \n Your account will be approved after payment`)
      navigation.goBack();
    }, 1000);
  };

  const enrolled = state.user.coursesEnrolled.find(
    (v) => v == props.route.params.id
  );
  console.log(enrolled);

  return (
    <ScrollView style={{ backgroundColor: "#2F5060" }}>
      <View style={{ flex: 1 }}>
        <StatusBar translucent={true} />
        <View
          style={{ flex: 2, backgroundColor: "#2F5060", paddingBottom: 30 }}
        >
          <View style={{ marginTop: 30 }}>
            <HeaderApp
              iconLeft={require("../../assets/back-arrow-white.png")}
              nav="back"
            />
          </View>
          <View style={styles.header_content}>
            <Text style={styles.header_content_text}>
              CLASS {props.route.params.grade}
            </Text>
            <Text style={styles.header_content_text}>Rs 599</Text>
          </View>
          <View>
            <Text style={styles.header_para}>
              This package includes video lectures of all subject
            </Text>
          </View>

          {/* </ImageBackground> */}
        </View>
        <View
          style={{
            flex: 2,
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
            backgroundColor: "#fff",
          }}
        >
          <View style={{ marginHorizontal: 25, marginTop: 30 }}>
            <Text style={styles.headingLearn}>What will you learn</Text>
          </View>
          <View style={styles.details_container}>
            <Ionicons
              name="md-checkmark-sharp"
              size={24}
              color="#2C2C2C"
              style={{ opacity: 0.4 }}
            />
            <Text style={styles.detailsTxt}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit{" "}
            </Text>
          </View>
          <View style={styles.details_container}>
            <Ionicons
              name="md-checkmark-sharp"
              size={24}
              color="#2C2C2C"
              style={{ opacity: 0.4 }}
            />
            <Text style={styles.detailsTxt}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit{" "}
            </Text>
          </View>
          <View style={styles.details_container}>
            <Ionicons
              name="md-checkmark-sharp"
              size={24}
              color="#2C2C2C"
              style={{ opacity: 0.4 }}
            />
            <Text style={styles.detailsTxt}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit{" "}
            </Text>
          </View>
          <View style={styles.details_container}>
            <Ionicons
              name="md-checkmark-sharp"
              size={24}
              color="#2C2C2C"
              style={{ opacity: 0.4 }}
            />
            <Text style={styles.detailsTxt}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit{" "}
            </Text>
          </View>
          <View style={styles.details_container}>
            <Ionicons
              name="md-checkmark-sharp"
              size={24}
              color="#2C2C2C"
              style={{ opacity: 0.4 }}
            />
            <Text style={styles.detailsTxt}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit{" "}
            </Text>
          </View>
          <View style={{ marginHorizontal: 30, marginVertical: 20 }}>
            <Text style={styles.headingLearn}>Instructor</Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("InstrutorScreen")}
              activeOpacity={0.7}
              style={styles.instructor_container}
            >
              <View>
                <Image
                  source={require("../../assets/instructor.png")}
                  style={{ width: 70, height: 70, resizeMode: "contain" }}
                />
              </View>
              <View style={{ paddingLeft: 15, justifyContent: "center" }}>
                <Text style={styles.instructor_name}>Muhammad Anas</Text>
                <Text style={styles.instructorTxt}>
                  Lorem ipsum dolor sit amet, consecteturg elit
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ marginVertical: 15, alignItems: "center" }}>
            <TouchableOpacity
              disabled={enrolled ? true : false}
              onPress={EnrollFunc}
              style={styles.btnBuy}
              activeOpacity={0.6}
            >
              <Text style={styles.buyTxt}>
                {enrolled ? "ENROLLED" : "ENROLL NOW"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default CourseDetails;
