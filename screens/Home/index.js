import React from 'react'
import { StatusBar } from 'react-native'
import { Image } from 'react-native'
import { ImageBackground } from 'react-native'
import {  Text, View } from 'react-native'
import CoursesBox from '../../components/Courses'
import HeaderApp from '../../components/Header'
import styles from './styles'

const Home = ({navigation}) => {
    return (
    <>
    <View style={{flex:1}}>
        <StatusBar translucent={true} />
        <View style={{flex:1, backgroundColor:'#fff'}}>
            <ImageBackground
            source={require('../../assets/header-home-screen3.png')}
            style={{flex:1, height:'96%', width:'100%', resizeMode:'contain', }}
            >
                <View>
                    <HeaderApp />
                </View>
                <View>
                    <View style={styles.profile_container}>
                        <View>
                            <Text style={styles.helloTxt}>Hello,</Text>
                            <Text style={styles.nameTxt}>Marry Jane</Text>
                        </View>
                        <View style={{justifyContent:'center'}}>
                            <Image 
                            source={require('../../assets/profile-pic.png')}
                            style={{height:40, width:40, resizeMode:'contain'}}
                            />
                        </View>
                    </View>
                    <View style={{marginTop:80, marginHorizontal:25}}>
                        <Text style={styles.coursesTxt}>Courses Enrolled</Text>
                    </View>
                </View>
                
            </ImageBackground>
            
        </View>
        <View style={{flex:1, backgroundColor:'#fff'}}>
            <View style={{marginHorizontal:25}}>
            <CoursesBox />
            </View>
        </View>
    </View>
    </>
    )
}

export default Home

