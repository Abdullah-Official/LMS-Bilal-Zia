import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from "../../screens/notifications/styles";

const NoDataComponent = ({description, message, iconPath, custom}) => {
  return (
    <View
    style={{
      flex: 2,
      justifyContent: "center",
      alignItems: "center",
      marginTop: !custom ? 0 : -30,
    }}
  >
    {!custom ? (
        <Image style={{width:270, height:270}} source={iconPath} />
    ) : (
        <Image source={iconPath} />
    )}
    <View
      style={{
        marginTop: 40,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={styles.notifTxt1}>{message}</Text>
      <Text style={styles.notifTxt2}>
       {description}
      </Text>
    </View>
  </View>
  )
}

export default NoDataComponent

