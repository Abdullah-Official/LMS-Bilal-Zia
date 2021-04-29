import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from './styles'

const IndTopicCard = (props) => {
    const navigation = useNavigation()
    // console.log("data ", props)
    return (
        <View style={{alignItems:'center', marginHorizontal:30}}>
            <TouchableOpacity onPress={() => props.navigation && navigation.navigate(props.navigation, props)} style={styles.card_container} activeOpacity={0.7}>
                <View style={styles.image_cont}>
                    <Image 
                    source={props.image}
                    style={{width:85, height:85, resizeMode:'contain'}}
                    />
                </View>
                <View style={styles.content}>
                    <Text style={styles.contentTxt}>{props.content}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default IndTopicCard
