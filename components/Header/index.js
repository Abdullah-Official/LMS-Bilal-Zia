import React from 'react'
import { Image } from 'react-native'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from './styles'
import { useNavigation } from '@react-navigation/native';

const HeaderApp = (props) => {
    const navigation = useNavigation()
    return (
        <View style={styles.header_container}>
            <TouchableOpacity activeOpacity={0.7} onPress={() => !props.nav ? null : props.nav === 'drawer' ? navigation.openDrawer() : props.nav === 'back' ? navigation.goBack() : null  }>
                <Image 
                source={props.iconLeft}
                style={props.nav === 'back' ? {height:23, width:23, resizeMode:'contain', marginTop:6} : {height:40, width:40, resizeMode:'contain'}}
                />
            </TouchableOpacity>
            <View>
            <Text style={styles.headingHeader}>{props.title}</Text>
            </View>
            <TouchableOpacity activeOpacity={0.8}>
            <Image 
                source={props.iconRight}
                style={{height:40, width:40, resizeMode:'contain'}}
                />
            </TouchableOpacity>
        </View>
    )
}

export default HeaderApp

