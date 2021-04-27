import React from 'react'
import { ImageBackground } from 'react-native';
import { Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import ChaptersBox from '../../components/Chapters';
import HeaderApp from '../../components/Header';
import styles from "./styles";

const Chapters = ({route}) => {
    return (
        <View style={{flex:1, backgroundColor:'#315566'}}>
            <View style={{flex:1, backgroundColor:'#315566'}}>
            <HeaderApp 
            title={route.params.grade}
            iconLeft={require('../../assets/back-arrow-white.png')}
            nav='back'
            />
            </View>
            <View style={{flex:5, backgroundColor:'#fff', borderTopRightRadius:60, borderTopLeftRadius:60}}>
               <ScrollView
               showsVerticalScrollIndicator={false}
               >
               <View style={{marginTop:40}}>
                    <Text style={styles.chaptersHeading}>Chapter Wise List</Text>
                </View>
                <View style={{alignItems:'center', marginTop:30}}>
                    <ChaptersBox />
                    <ChaptersBox />
                    <ChaptersBox />
                    <ChaptersBox />
                    <ChaptersBox />
                    <ChaptersBox />
                    <ChaptersBox />
                    <ChaptersBox />
                    <ChaptersBox />
                </View>
               </ScrollView>
            </View>
        </View>
    )
}

export default Chapters
