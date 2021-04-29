import React from 'react'
import { ImageBackground } from 'react-native'
import { StatusBar } from 'react-native'
import { View, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import HeaderApp from '../../components/Header'
import styles from './styles'
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native'
import { Image } from 'react-native'

const CourseDetails = (props) => {
    console.log("props ",props.route.params.grade)
    return (
        <ScrollView style={{backgroundColor:'#fff'}}>
        <View style={{ flex: 1 }}>
          <StatusBar translucent={true} />
          <View style={{ flex: 2, backgroundColor: "#fff", marginTop:32 }}>
            <ImageBackground
              source={require("../../assets/buy_now_screen.png")}
              style={{
                flex: 2,
                height: 330,
                width: "100%",
                resizeMode: "cover",
              }}
            >
              <View style={{marginTop:-20}}>
                <HeaderApp 
                iconLeft={require('../../assets/back-arrow-white.png')}
                nav="back"
                />
              </View>
              <View style={styles.header_content}>
                  <Text style={styles.header_content_text}>{props.route.params.grade}</Text>
                  <Text style={styles.header_content_text}>Rs 599</Text>
              </View>
              <View>
                  <Text style={styles.header_para}>This package includes video lectures of all subject</Text>
              </View>
              <View style={{marginHorizontal:25, marginTop:90}}>
                  <Text style={styles.headingLearn}>What will you learn</Text>
              </View>
              </ImageBackground>
              </View>
              <View style={{flex:1,}}>
                  <View style={styles.details_container}>
                  <Ionicons name="md-checkmark-sharp" size={24} color="#2C2C2C" style={{opacity:0.4}} />
                  <Text style={styles.detailsTxt}>Lorem ipsum dolor sit amet, consectetur adipiscing elit </Text>
                  </View>
                  <View style={styles.details_container}>
                  <Ionicons name="md-checkmark-sharp" size={24} color="#2C2C2C" style={{opacity:0.4}} />
                  <Text style={styles.detailsTxt}>Lorem ipsum dolor sit amet, consectetur adipiscing elit </Text>
                  </View>
                  <View style={styles.details_container}>
                  <Ionicons name="md-checkmark-sharp" size={24} color="#2C2C2C" style={{opacity:0.4}} />
                  <Text style={styles.detailsTxt}>Lorem ipsum dolor sit amet, consectetur adipiscing elit </Text>
                  </View>
                  <View style={styles.details_container}>
                  <Ionicons name="md-checkmark-sharp" size={24} color="#2C2C2C" style={{opacity:0.4}} />
                  <Text style={styles.detailsTxt}>Lorem ipsum dolor sit amet, consectetur adipiscing elit </Text>
                  </View>
                  <View style={styles.details_container}>
                  <Ionicons name="md-checkmark-sharp" size={24} color="#2C2C2C" style={{opacity:0.4}} />
                  <Text style={styles.detailsTxt}>Lorem ipsum dolor sit amet, consectetur adipiscing elit </Text>
                  </View>
                  <View style={{marginHorizontal:30, marginVertical:20}}>
                      <Text style={styles.headingLearn}>Instructor</Text>
                      <TouchableOpacity activeOpacity={0.7} style={styles.instructor_container}>
                          <View>
                            <Image 
                            source={require('../../assets/instructor.png')}
                            style={{width:70, height:70, resizeMode:'contain'}}
                            />
                          </View>
                          <View style={{paddingLeft:15, justifyContent:'center'}}>
                              <Text style={styles.instructor_name}>Muhammad Anas</Text>
                              <Text style={styles.instructorTxt}>Lorem ipsum dolor sit amet, consecteturg elit</Text>
                          </View>
                      </TouchableOpacity>
                  </View>
                  <View style={{marginVertical:15, alignItems:'center'}}>
                      <TouchableOpacity style={styles.btnBuy} activeOpacity={0.6}>
                          <Text style={styles.buyTxt}>BUY NOW</Text>
                      </TouchableOpacity>
                  </View>
              </View>
              </View>
              </ScrollView>
    )
}

export default CourseDetails
