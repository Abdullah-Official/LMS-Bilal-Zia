import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { AuthContext } from '../../context'

const Profile = ({navigation}) => {
    console.log(navigation)
    const {signOut} = React.useContext(AuthContext)
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text>Profile</Text>
            <Button title="Drawer" onPress={() => navigation.openDrawer() } />
            <Button title="Sign Out" onPress={() => signOut()} />
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({})
