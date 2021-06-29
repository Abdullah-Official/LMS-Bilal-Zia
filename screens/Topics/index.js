import React from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import HeaderApp from "../../components/Header";
import TopicBox from "../../components/TopicBox";
import styles from '../Chapters/styles'

const Topics = ({route}) => {
    console.log("topics ", route.params)
  return (
    <View style={{ flex: 1, backgroundColor: "#315566" }}>
      <View style={{ flex: 1, backgroundColor: "#315566" , justifyContent:'center'}}>
        <HeaderApp
          title={`CLASS ${route.params.grade}`}
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
          <View style={{ marginTop: 40, alignItems: "center" }}>
            <Text style={styles.chaptersHeading}>
              Chapter: {route.params.id}
            </Text>
            <Text style={styles.chapterNameHeading}>{route.params.name}</Text>
          </View>
          <View style={{ alignItems: "center", marginTop: 30 }}>
            {route.params.topics.map((v, i) => {
              return (
                <TopicBox
                  key={i}
                  topicName={v.topicName}
                  topicNumber={v.topicNumber}
                  quiz={v.quiz}
                  assignment={v.assignment}
                  chapterName={route.params.name}
                  chapterNumber={route.params.id}
                  grade={route.params.grade}
                  video={v.video}
                  topicDescription={v.topicDescription}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Topics;
