import React from 'react'
import { TextInput } from 'react-native'
import { Button, StyleSheet, Text, View } from 'react-native'
import { AuthContext } from '../../context'

const SignUp = () => {
    const {signUp} = React.useContext(AuthContext)
    return (
        <View style={{marginTop:100}}>
            <Button title="Create Account" onPress={() => signUp()} />
            <TextInput
        style={styles.input}
        // onChangeText={(e) => setEmail(e)}
        // value={email}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
        </View>
    )
}

export default SignUp

const styles = StyleSheet.create({})
