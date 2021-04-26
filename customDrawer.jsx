import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Profile"
          onPress={() => props.navigation.navigate('Profile')}
        />
      </DrawerContentScrollView>
    );
  }

export default CustomDrawerContent

const styles = StyleSheet.create({})
