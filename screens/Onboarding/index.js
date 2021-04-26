import React from "react";
import { View, Text, Image } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import styles from "./styles";
import { OnboardingData } from "../../Data/OnboardingData";
import { AuthContext } from '../../context'

const OnboardingScreen = () => {
    const {signIn} = React.useContext(AuthContext)
  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image
              style={{
                width: 280,
                height: 250,
                resizeMode: "cover",
                marginTop: 10,
              }}
              source={item.image}
            />
            <Text style={styles.title}>{item.title}</Text>
          </View>
          <View style={{ marginTop: 10, marginHorizontal: 12 }}>
            <Text style={styles.text}>{item.text}</Text>
          </View>
        </View>
      </View>
    );
  };

  const keyExtractor = (item) => item.title;

  const renderNextButton = () => {
    return (
      <TouchableOpacity activeOpacity={0.9} style={styles.nxtBtn}>
        <Text style={styles.rightText}>NEXT</Text>
      </TouchableOpacity>
    );
  };
  const renderSkipButton = () => {
    return (
      <TouchableOpacity activeOpacity={0.9} style={styles.skpBtn}>
        <Text style={styles.skpTxt}>SKIP</Text>
      </TouchableOpacity>
    );
  };
  const _renderDoneButton = () => {
    
    return (
      <TouchableOpacity onPress={() => signIn()} activeOpacity={0.3} style={styles.getStartedBtn}>
        <Text style={styles.getStartedTxt}>Get Started</Text>
      </TouchableOpacity>
    );
  };
  return (
    <>
      <StatusBar style="light" />
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <AppIntroSlider
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            data={OnboardingData}
            dotStyle={styles.dotStyle}
            renderNextButton={renderNextButton}
            renderDoneButton={_renderDoneButton}
            activeDotStyle={styles.activeDotStyle}
            showDoneButton={true}
            showSkipButton={true}
            bottomButton
            renderSkipButton={renderSkipButton}
          />
        </View>
      </View>
    </>
  );
};

export default OnboardingScreen;
