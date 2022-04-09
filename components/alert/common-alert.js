import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { FancyAlert } from 'react-native-expo-fancy-alerts';
import { PrimaryColor } from '../../Constants/theme';
import styles from "../../screens/assign-quiz-screen/styles";

 
const CommonAlert = ({visible, setVisible, toggleAlert, response}) => {

 
  return (
    <View>
      <FancyAlert
        visible={visible}
        icon={<View style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: PrimaryColor,
          borderRadius: 50,
          width: '100%',
        }}><Text>🤓</Text></View>}
        style={{ backgroundColor: 'white' }}
      >
        <Text onPress={toggleAlert} style={{ marginTop: -16, marginBottom: 32,textAlign:'center' }}>
            {response && response}
        </Text>
        <View style={{alignItems: "center", width:'80%', marginBottom:15}}>
        <TouchableOpacity
              onPress={toggleAlert}
              activeOpacity={0.7}
              style={styles.btnNext}
            >
              <Text style={styles.nxtTxt}>Cancel</Text>
            </TouchableOpacity>
        </View>
      </FancyAlert>
    </View>
  )
}
 
export default CommonAlert;
