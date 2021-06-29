import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, YellowBox } from "react-native";
import HeaderApp from "../../components/Header";
import styles from "./styles";
import * as Progress from "react-native-progress";
import CountdownCircle from "react-native-countdown-circle";
import { AntDesign } from "@expo/vector-icons";
import { LogBox } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { ScrollView } from "react-native";
import { Content, Card, CardItem, Body } from "native-base";
// import {quizData} from '../../Data/quiz'

const QuizAssignmentScreen = (props) => {
  console.log(props)
  useEffect(() => {
    LogBox.ignoreLogs(["Animated: `useNativeDriver`"]);
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState();
  const [score, setScore] = useState(0);
  const [progress, setProgress] = useState(0);
  const [solution, setSolution] = useState(false);
  const navigation = useNavigation();
  const quizData = props.route.params.quizData
  // alert(quizData.length)
  
  useEffect(() => {
    setOptions(
      handleShuffle([
        quizData[currentIndex]?.correct_answer,
        ...quizData[currentIndex]?.incorrect_answer,
      ])
    );
  }, [currentIndex]);

  const handleNext = () => {
    if (currentIndex >= quizData.length) {
      navigation.navigate("QuizAssignmentResult", {props,score})
    } else if (selected) {
      setCurrentIndex(currentIndex + 1);
      setSelected();
      setSolution(false);
    } else alert("Please select atleast one option.");
  };

  const handleCheck = (v) => {
    setSelected(v);
    if (v === quizData[currentIndex]?.correct_answer) {
      setScore(score + 10);
      setProgress(progress + 0.1);
    }
    setSolution(true);
  };

  const handleShuffle = (optionss) => {
    return optionss.sort(() => Math.random() - 0.5);
  };
  const handleSelect = (v) => {
    if (selected === v && selected === quizData[currentIndex]?.correct_answer) {
      return styles.answers_box, styles.answers_box_correct;
    } else if (
      selected === v &&
      selected !== quizData[currentIndex]?.correct_answer
    ) {
      return styles.answers_box, styles.answers_box_wrong;
    } else if (v === quizData[currentIndex]?.correct_answer) {
      return styles.answers_box, styles.answers_box_correct;
    }
  };

  console.log(progress);
  // const title = props.route.params.topicActivities.topicName;
  return (
    <View style={{ flex: 1, backgroundColor: "#315566" }}>
      <View
        style={{
          flex: 1,
          backgroundColor: "#315566",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <HeaderApp
          title={`Topic Name`}
          iconLeft={require("../../assets/back-arrow-white.png")}
          nav="back"
        />
        <View style={{ paddingTop: 15, alignItems: "center" }}>
          <Progress.Bar
            color={"#FFA24B"}
            borderColor={"transparent"}
            unfilledColor={"white"}
            height={8}
            progress={progress}
            width={200}
          />
        </View>
      </View>

      <View
        style={{
          flex: 5,
          backgroundColor: "#fff",
          borderRadius: 22,
          marginTop: 20,
          marginHorizontal: 7,
          marginVertical: 7,
        }}
      >
        <ScrollView>
          <View style={{ marginHorizontal: 15, marginVertical: 20 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginTop: 10,
              }}
            >
              <View style={{ paddingTop: 10 }}>
                <Text style={styles.pointsTxt}>20pts</Text>
              </View>
              <View style={{ position: "absolute", top: 0, right: 20 }}>
                <CountdownCircle
                  seconds={quizData.length * 10}
                  radius={30}
                  borderWidth={5}
                  color="#FFA24B"
                  bgColor="#fff"
                  height={20}
                  textStyle={{ fontSize: 20 }}
                  onTimeElapsed={() => [alert("Quiz time over .."), navigation.navigate("QuizAssignmentResult")]}
                />
              </View>
            </View>
          </View>
          <View style={styles.quiz_container}>
            <View style={styles.quiz_main}>
              <Text style={styles.questionTxt}>
                {quizData[currentIndex].question}
              </Text>
            </View>
          </View>
          <View style={{ marginTop: 20 }}>
            <View>
              <View style={{ alignItems: "center", marginTop: 14 }}>
                {options.map((v, i) => (
                  <TouchableOpacity
                    onPress={() => handleCheck(v)}
                    activeOpacity={0.5}
                    style={
                      selected
                        ? [styles.answers_box, handleSelect(v)]
                        : styles.answers_box
                    }
                  >
                    <View>
                      <Text>{v}</Text>
                    </View>
                    <View style={{ justifyContent: "center" }}>
                      <AntDesign name="right" size={19} color="black" />
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginHorizontal: 32,
              marginVertical: 20,
              marginBottom: 8,
            }}
          >
            <TouchableOpacity
              onPress={handleNext}
              activeOpacity={0.7}
              style={styles.btnNext}
            >
              <Text style={styles.nxtTxt}>Next</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginVertical: 13, marginHorizontal: 12 }}>
            {solution ? (
              <Content>
                <Card>
                  <CardItem header bordered>
                    <Text
                      style={{ color: "#386A82", textTransform: "uppercase" }}
                    >
                      Solution
                    </Text>
                  </CardItem>
                  <CardItem bordered>
                    <Body>
                      <Text>
                      {quizData[currentIndex].solution}
                      </Text>
                    </Body>
                  </CardItem>
                </Card>
              </Content>
            ) : null}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default QuizAssignmentScreen;
