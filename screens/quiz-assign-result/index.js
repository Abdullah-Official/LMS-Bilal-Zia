import React from "react";
import { Text, View } from "react-native";
import HeaderApp from "../../components/Header";
import styles from "../assign-quiz-screen/styles";
import ProgressCircle from "react-native-progress-circle";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";

const QuizAssignmentResult = ({route}) => {
  console.log(route.params.score, " RESULT")
  const navigation = useNavigation();
  // const title = route.params.props.route.params.topicActivities.topicName;
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View
        style={{
          flex: 2,
          backgroundColor: "#305364",
          marginTop: 35,
          marginHorizontal: 2,
          borderRadius: 16,
        }}
      >
        <HeaderApp
          title={`${route.params.props.route.params.topicName.slice(0, 13)} `}
          iconLeft={require("../../assets/back-arrow-white.png")}
          nav="back"
        />
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 40,
          }}
        >
          <View style={{ alignItems: "center" }}>
            <ProgressCircle
              percent={route.params.score}
              radius={65}
              borderWidth={12}
              color="#FFA24B"
              shadowColor="#ccc"
              bgColor="#fff"
            >
              <Text style={{ fontSize: 25, color:"#000" }}>{route.params.score  ? route.params.score : "00"}</Text>
              <Text
                style={{
                  fontFamily: "PoppinsMedium",
                  fontSize: 12,
                  color: "#868686",
                }}
              >
                Points
              </Text>
            </ProgressCircle>
            <View style={{ width: 210, marginVertical: 15 }}>
              <Text
                style={{
                  fontSize: 20,
                  color: "#fff",
                  fontFamily: "QuickSandMedium",
                  textAlign: "center",
                }}
              >
                magna sit amet purus gravida quis!
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{ flex: 2, alignItems: "center" }}>
        <View style={{ marginHorizontal: 30, marginVertical: 40 }}>
          <View style={{ flexWrap: "wrap", flexDirection: "row" }}>
            <View style={{ width: "50%" }}>
              <Text style={styles.lightTxt}>Total Points</Text>
              <Text style={styles.boldTxt}>100 points</Text>
            </View>
            <View style={{ width: "50%" }}>
              <Text style={styles.lightTxt}>Points Obatined</Text>
              <Text style={styles.boldTxt}>
                {route.params.score} points
              </Text>
            </View>
            {/* <View style={{ width: "50%", marginTop: 30 }}>
              <Text style={styles.lightTxt}>Total time</Text>
              <Text style={styles.boldTxt}>100 sec</Text>
            </View>
            <View style={{ width: "50%", marginTop: 30 }}>
              <Text style={styles.lightTxt}>Time Taken</Text>
              <Text style={styles.boldTxt}>40 sec</Text>
            </View> */}
          </View>
          <View
            style={{
              marginTop: 60,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("TopicDetails")}
              activeOpacity={0.6}
              style={styles.btnRetry}
            >
              <Text style={styles.retryTxt}>Retry</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default QuizAssignmentResult;
