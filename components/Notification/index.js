import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from '../../screens/notifications/styles'

const NotificationBox = ({name,classNumber,description, bgAvatar}) => {
    return (
      <TouchableOpacity style={styles.container}>
        <View style={styles.maincard_container}>
          <View style={styles.left}>
            <View style={styles.avatar , {...styles.avatar, backgroundColor: bgAvatar}}>
              <Text style={styles.class}>{classNumber}</Text>
            </View>
          </View>
          <View style={styles.right}>
            <Text style={styles.nameAdmin}>{name}</Text>
            <View style={styles.rightChild}>
            <Text style={styles.notifDetails}>{description}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
}

export default NotificationBox
