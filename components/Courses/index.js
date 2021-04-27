import React from 'react'
import {Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from './styles'
import { FontAwesome } from '@expo/vector-icons';

const CoursesBox = () => {
    return (
        <View>
            <TouchableOpacity style={styles.courseBox_container} activeOpacity={0.8}>
                <View style={{padding:20}}>
                    <View>
                    <Text style={styles.course_class}>GRADE IX</Text>
                    <Text style={styles.course_about}>lorem ipsum lorem ipsum lorem ipsum </Text>
                    </View>
                   
                </View>
                <View style={{alignItems:'flex-end', paddingRight:14, paddingTop:10}}>
                    <FontAwesome name="chevron-right" size={24} color="white" />
                    </View>
            </TouchableOpacity>
        </View>
    )
}

export default CoursesBox

