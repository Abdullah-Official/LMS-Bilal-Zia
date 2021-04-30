import React, { useState } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import HeaderApp from '../../components/Header'
import { Image } from 'react-native'
import NotificationBox from '../../components/Notification'
import { ScrollView } from 'react-native-gesture-handler'

const Notifications = () => {
    const [isNotif, setIsNotif] = useState(false)
    return (
        <View style={{flex:1, backgroundColor:'#fff'}}>
            <View style={{flex:0}}>
            <View style={{justifyContent:'center', marginTop:30}}>
                <HeaderApp 
                iconLeft={require('../../assets/nav-icon-dark.png')}
                nav="drawer"
                />
              </View>
              <View style={{marginTop:30, alignItems:'center'}}>
                  <Text style={styles.notificationTxt}>Notifications</Text>
              </View>
            </View>
           
           {
                isNotif === false ? (
                    <View style={{flex:2, justifyContent:'center', alignItems:'center', marginTop:-30}}>
                <Image 
                source={require('../../assets/notif-bell.png')}
                />
                <View style={{marginTop:40, justifyContent:'center', alignItems:'center'}}>
                <Text style={styles.notifTxt1}>No notification found</Text>
                <Text style={styles.notifTxt2}>We did not find any notification</Text>
                </View>
            </View>
                ) : (
                    <ScrollView>
                    <View style={{flex:1, marginTop:30, marginHorizontal:25,}}> 

                       <NotificationBox bgAvatar='#04597D' />
                       <NotificationBox bgAvatar='#234F8F'/>
                       <NotificationBox bgAvatar='#04597D'/>
                       <NotificationBox bgAvatar='#234F8F'/>
                       <NotificationBox bgAvatar='#04597D'/>

                    </View>
                    </ScrollView>

                )
            }
        </View>
    )
}

export default Notifications
