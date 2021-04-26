import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Details = ({route}) => {
    return (
        <View  style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text>Details</Text>
            {route.params.name && <Text>{route.params.name}</Text>}
        </View>
    )
}

export default Details

const styles = StyleSheet.create({})
