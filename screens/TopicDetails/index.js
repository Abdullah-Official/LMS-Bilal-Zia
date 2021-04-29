import React from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import HeaderApp from "../../components/Header";
import IndTopicCard from "../../components/IndTopicCard";
import styles from '../Chapters/styles'

const TopicDetails = (props) => {
    // console.log("TopicDetails Start ", props)
  return (
    <View style={{ flex: 1, backgroundColor: "#315566" }}>
      <View style={{ flex: 1, backgroundColor: "#315566", justifyContent:'center' }}>
        <HeaderApp
          title={props.route.params.class}
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
          <View style={{ marginTop: 40, marginHorizontal:25, alignItems:'center' }}>
            <Text style={styles.chaptersHeading}>Chapter: {props.route.params.topicNumber}</Text>
            <Text style={styles.chapterNameHeading}>{props.route.params.chapterName}</Text>
            <View style={{flexDirection:'row-reverse'}}>
            <Text style={styles.topicHeading}>{props.route.params.topicName.slice(0,17)}</Text>
            <Text style={styles.topicTxt}>Topic: </Text>
            </View>
          </View>
          <View style={{ alignItems: "center", marginTop: 30 }}>
           {
              props.route.params.topicDetails.map((v,i) => {
               return (
                 <IndTopicCard 
                 key={i}
                 image={v.image}
                 content={v.content}
                 navigation={v.navigation}
                  topicActivities={props.route.params}
                 />
               )
             })
           }
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default TopicDetails;
