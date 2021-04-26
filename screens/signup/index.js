import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { AuthContext } from '../../context'

const SignUp = () => {
    const {signUp} = React.useContext(AuthContext)
    return (
        <View>
            <Button title="Create Account" onPress={() => signUp()} />
        </View>
    )
}

export default SignUp

const styles = StyleSheet.create({})
