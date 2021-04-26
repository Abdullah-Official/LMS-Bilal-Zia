import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const Search = ({navigation}) => {
    return (
        <View  style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text>Search</Text>
            <Button title="React School" onPress={() => navigation.navigate("Details", {name: 'React Native School'})} />
            <Button title="Search 2" onPress={() => navigation.navigate("Search2", {name: 'Search 2'})} />
        </View>
    )
}

export default Search

const styles = StyleSheet.create({})
