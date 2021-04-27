import React from 'react'
import { Image } from 'react-native'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from './styles'

const HeaderApp = (props) => {
    return (
        <View style={styles.header_container}>
            <TouchableOpacity>
                <Image 
                source={require('../../assets/nav-con.png')}
                style={{height:40, width:40, resizeMode:'contain'}}
                />
            </TouchableOpacity>
            <View>
            <Text style={styles.headingHeader}>Heading</Text>
            </View>
            <TouchableOpacity>
            <Image 
                source={require('../../assets/logo.png')}
                style={{height:40, width:40, resizeMode:'contain'}}
                />
            </TouchableOpacity>
        </View>
    )
}

export default HeaderApp

