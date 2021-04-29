import React from 'react'
import { View, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import HeaderApp from '../../components/Header'
import styles from './styles'
import { Video, AVPlaybackStatus } from 'expo-av';
import { Button } from 'react-native'

const VideoLecture = (props) => {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    // console.log("Video ", props.route.params.topicActivities.topicName)
    return (
      <View style={{ flex: 1, backgroundColor: "#315566" }}>
        <View style={{ flex: 1, backgroundColor: "#315566", justifyContent:'center' }}>
          <HeaderApp
            title={props.route.params.topicActivities.class}
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
                marginTop: 25,
                marginHorizontal: 25,
                alignItems: "center",
              }}
            >
              <Text style={styles.chaptersHeading}>
                Chapter: {props.route.params.topicActivities.topicNumber}
              </Text>
              <View style={{ flexDirection: "row-reverse" }}>
                <Text style={styles.topicHeading}>
                  {props.route.params.topicActivities.topicName.slice(0, 17)}
                </Text>
                <Text style={styles.topicTxt}>Topic: </Text>
              </View>
            </View>
            <View style={{ marginTop: 40 }}>
              <Text style={styles.videoLectureHeading}>Video Lecture</Text>
              <View style={{marginTop:20, alignItems:'center'}}>
                <Video
                  ref={video}
                  style={{height:200, width:'90%'}}
                  source={require('../../assets/lecture.mp4')}
                  useNativeControls
                  resizeMode="contain"
                  isLooping
                />
              </View>
              <View style={{alignItems:'center', marginHorizontal:24, marginVertical:20}}>
                  <Text style={styles.descHeading}>Topic Description</Text>
                  <Text style={styles.descTxt}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
}

export default VideoLecture
