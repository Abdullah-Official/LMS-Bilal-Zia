import React, { useState } from 'react'
import { KeyboardAvoidingView } from 'react-native'
import { StatusBar } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { ImageBackground, Image } from 'react-native'
import { Text, View } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import styles from './styles';

const Signin = () => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    return (
      <>
        <ImageBackground
          style={{ flex: 1, width: "100%", height: "100%" }}
          source={require("../../assets/gradient-bg.png")}
        >
          <ScrollView
            keyboardShouldPersistTaps={"handled"}
            bounces={false}
            scrollEnabled={false}
            style={{
              width: "100%",
            }}
          >
            <KeyboardAvoidingView enabled behavior="position">
              <View style={{ flex: 1, marginHorizontal: 20 }}>
                <View style={{ alignItems: "center", marginTop: 100 }}>
                  <Image
                    source={require("../../assets/logo.png")}
                    style={{ width: 140, height: 140 }}
                  />
                </View>
                <View style={{ paddingTop: 40 }}>
                  <Text style={styles.login_heading}>Login In</Text>
                </View>
                <View style={{marginHorizontal:20, marginTop:20}}>
                  <View style={styles.input_container}>
                  <Text style={styles.placholder}>Email</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={(e) => setEmail(e)}
                    value={email}
                    placeholderTextColor="white"
                  />
                  </View>
                  
                 <View style={styles.input_container}>
                 <Text style={styles.placholder}>Password</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={(e) => setPassword(e)}
                    value={password}
                    placeholderTextColor="white"
                    secureTextEntry={true}
                  />
                 </View>
                </View>
                <View style={{marginVertical:15, alignItems:'center'}}>
                    <TouchableOpacity activeOpacity={0.7} style={styles.btn_container}>
                        <Text style={styles.btn_txt}>Login in</Text>
                    </TouchableOpacity>
                    <Text style={styles.or_txt}>or</Text>
                    <TouchableOpacity activeOpacity={0.7} style={styles.btn2_container}>
                        <Text style={styles.btn2_txt}>Login in with Google</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} style={styles.account_container}>
                      <Text style={styles.accTxt}>Create Account?</Text>
                      <Text style={styles.accTxt2}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
              </View>
            </KeyboardAvoidingView>
          </ScrollView>
        </ImageBackground>
      </>
    );
}

export default Signin

