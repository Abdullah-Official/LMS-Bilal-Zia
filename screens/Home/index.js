import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const Home = ({navigation}) => {
    return (
        <> 
      
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <View >
            <Text>Header</Text>
        </View>
            <Text>Home</Text>
            <Button title="React Native By Examples" onPress={() => navigation.navigate("Details", {name: 'React Native By Example'})} />
            <Button title="React School" onPress={() => navigation.navigate("Details", {name: 'React Native School'})} />
            <Button title="Drawer" onPress={() => navigation.openDrawer()} />
        </View>
        </>
    )
}

export default Home

const styles = StyleSheet.create({})
