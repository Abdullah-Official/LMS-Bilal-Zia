import React from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import HeaderApp from "../../components/Header";
import IndTopicCard from "../../components/IndTopicCard";
import styles from "../Chapters/styles";
const TopicDetails = (props) => {
  // console.log("TopicDetails Start ", props.route)
  return (
    <View style={{ flex: 1, backgroundColor: "#315566" }}>
      <View
        style={{
          flex: 1,
          backgroundColor: "#315566",
          justifyContent: "center",
        }}
      >
        <HeaderApp
          title={`CLASS ${props.route.params.grade}`}
          iconLeft={require("../../assets/back-arrow-white.png")}
          nav="back"
        />
      </View>
      <View
        style={{
          flex: 5,
          backgroundColor: "#fff",
          borderTopRightRadius: 60,
          borderTopLeftRadius: 60,
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              marginTop: 40,
              marginHorizontal: 25,
              alignItems: "center",
            }}
          >
            <Text style={styles.chaptersHeading}>
              Chapter: {props.route.params.chapterNumber}
            </Text>
            <Text style={styles.chapterNameHeading}>
              {props.route.params.chapterName}
            </Text>
            <View style={{ flexDirection: "row-reverse" }}>
              <Text style={styles.topicHeading}>
                {props.route.params.topicName.slice(0, 17)}
              </Text>
              <Text style={styles.topicTxt}>Topic: </Text>
            </View>
          </View>
          <View style={{ alignItems: "center", marginTop: 30 }}>
            <IndTopicCard
              content="Video Lecture"
              image={require("../../assets/video-lecture.png")}
              chapterName={props.route.params.chapterName}
              topicName={props.route.params.topicName}
              topicNumber={props.route.params.topicNumber}
              navigation="VideoLecture"
              grade={props.route.params.grade}
              chapterNumber={props.route.params.chapterNumber}
              navigation="VideoLecture"
              grade={props.route.params.grade}
              video={props.route.params.video}
              topicDescription={props.route.params.topicDescription}
            />
            {
              props.route.params.quiz.length > 0 ? (
                <IndTopicCard
              content="Quiz"
              image={require("../../assets/online-quiz.png")}
              topicName={props.route.params.topicName}
              quizData={props.route.params.quiz}
              navigation="QuizAssignmentScreen"
            />
              ): null
            }
           {
             props.route.params.assignment.length > 0 ? (
              <IndTopicCard
              content="Assignment"
              image={require("../../assets/assignment.png")}
              topicName={props.route.params.topicName}
              quizData={props.route.params.assignment}
              navigation="QuizAssignmentScreen"
            />
             ) : null
           }
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default TopicDetails;
