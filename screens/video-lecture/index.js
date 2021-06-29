import React from 'react'
import { View, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import HeaderApp from '../../components/Header'
import styles from './styles'
import { Video, AVPlaybackStatus } from 'expo-av';
import { Button } from 'react-native'
import { WebView } from 'react-native-webview';

const VideoLecture = (props) => {
  // console.log("Video lecture ", props)
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    console.log("Video ", props.route.params)
    return (
      <View style={{ flex: 1, backgroundColor: "#315566" }}>
        <View style={{ flex: 1, backgroundColor: "#315566", justifyContent:'center' }}>
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
                marginTop: 25,
                marginHorizontal: 25,
                alignItems: "center",
              }}
            >
              <Text style={styles.chaptersHeading}>
                Chapter: {props.route.params.chapterNumber}
              </Text>
              <View style={{ flexDirection: "row-reverse" }}>
                <Text style={styles.topicHeading}>
                {` ${props.route.params.topicName}`}
                </Text>
                <Text style={styles.topicTxt}>Topic: </Text>
              </View>
            </View>
            <View style={{ marginTop: 40 }}>
              <Text style={styles.videoLectureHeading}>Video Lecture</Text>
              <View style={{marginTop:20, alignItems:'center'}}>
                <WebView source={{ uri: props.route.params.video}} allowsFullscreenVideo={true} style={{width: 300, height:250, resizeMode:'cover', alignItems:'center', borderRadius:10}} />
              </View>
              <View style={{alignItems:'center', marginHorizontal:24, marginVertical:20}}>
                  <Text style={styles.descHeading}>Topic Description</Text>
                  <Text style={styles.descTxt}>{props.route.params.topicDescription}</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
}

export default VideoLecture
