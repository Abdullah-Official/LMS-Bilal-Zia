import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { AuthContext } from '../../context'

const SignIn = ({navigation}) => {
    const {signIn} = React.useContext(AuthContext)
    return (
        <View style={{justifyContent:'center', alignItems:'center', flex:1}}>
            <Text>SignIn</Text>
            <Button color="red" title="Sign In" onPress={() => signIn()} />
            <Button onPress={() => navigation.navigate('SignUp')} title="Create Account" />
        </View>
    )
}

export default SignIn

const styles = StyleSheet.create({})
