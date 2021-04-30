import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from '../../screens/notifications/styles'

const NotificationBox = (props) => {
    return (
      <TouchableOpacity style={styles.container}>
        <View style={styles.maincard_container}>
          <View style={styles.left}>
            <View style={styles.avatar , {...styles.avatar, backgroundColor: props.bgAvatar}}>
              <Text style={styles.class}>IX</Text>
            </View>
          </View>
          <View style={styles.right}>
            <Text style={styles.nameAdmin}>Muhammad Anas</Text>
            <View style={styles.rightChild}>
            <Text style={styles.notifDetails}>Added a new quiz in <Text style={styles.topicNotif}>Semi-Conductors</Text></Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
}

export default NotificationBox
