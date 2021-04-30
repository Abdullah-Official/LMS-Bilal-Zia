import React from 'react'
import { FlatList } from 'react-native'
import { View, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import CoursesBox from '../../components/Courses'
import HeaderApp from '../../components/Header'
import { CoursesData } from '../../Data/Courses'
import CourseDetails from '../course-details'

const AllCourses = () => {
    return (
        <View style={{flex:1, backgroundColor:'#fff'}}>
            <View style={{justifyContent:'center', marginTop:30}}>
            <HeaderApp
            iconLeft={require("../../assets/nav-icon-dark.png")}
            iconRight={require('../../assets/profile-pic.png')}
            nav="drawer"
          />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{marginTop:30, marginHorizontal:25}}>
                <Text style={{fontFamily:'PoppinsSemiBold', color:'#01110A', fontSize:22,}}>
                    All Courses
                </Text>
                <View style={{alignItems:'center', marginVertical:20}}>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  data={CoursesData}
                  renderItem={({ item }) => (
                    <CoursesBox
                      id={item.id}
                      grade={item.grade}
                      about={item.about}
                      chapters={item.chapters}
                      navigation={"CourseDetails"}
                    />
                  )}
                  keyExtractor={(item, index) => index.toString()}
                />
                </View>
            </View>
            </ScrollView>
        </View>
    )
}

export default AllCourses
