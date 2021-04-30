import React from 'react'
import { ImageBackground } from 'react-native';
import { StatusBar } from 'react-native';
import { Image } from 'react-native';
import { Button, Text, View } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import HeaderApp from '../../components/Header';
import styles from './styles'
import { Feather } from '@expo/vector-icons';

const Profile = ({navigation}) => {
    return (
        <>
        <ScrollView style={{flex:1, backgroundColor:"#fff"}}>
        <View style={{ flex: 1}}>
          <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <ImageBackground
              source={require("../../assets/header-home-screen3.png")}
              style={{
                flex: 1,
                height: "96%",
                width: "100%",
                resizeMode: "contain",
              }}
            >
              <View style={{justifyContent:'center', marginTop:30}}>
                <HeaderApp 
                iconLeft={require('../../assets/nav-con.png')}
                nav="drawer"
                title="Profile"
                />
              </View>
              <View style={{alignItems:'center', marginTop:80, paddingBottom:20}}>
                  <Image 
                  source={require('../../assets/profile-pic.png')}
                  style={styles.profileImg}
                  />
              </View>
            </ImageBackground>
          </View>
          <View style={{marginTop:40, marginHorizontal:25}}>
              <View style={styles.details_container}>
              <Text style={styles.textDark}>Name</Text>
              <Text style={styles.textLight}>Marry Jane</Text>
              </View>
              <View style={styles.details_container}>
              <Text style={styles.textDark}>Email</Text>
              <Text style={styles.textLight}> maryjane@gmail.com</Text>
              </View>
              <View style={styles.details_container}>
              <Text style={styles.textDark}>Phone</Text>
              <Text style={styles.textLight}>+92-32134901</Text>
              </View>
          </View>
        </View>
        
      </ScrollView>
      <View style={styles.pencil} activeOpacity={0.6}>
      <TouchableOpacity onPress={() => navigation.navigate("ProfileEdit")} >
      <Feather name="edit" size={22} color="white" />
      </TouchableOpacity>
</View>
</>
    );
}

export default Profile

