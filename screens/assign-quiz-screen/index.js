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

const QuizAssignmentScreen = (props) => {
  useEffect(() => {
    LogBox.ignoreLogs(["Animated: `useNativeDriver`"]);
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState();
  const [score, setScore] = useState(0);
  const [progress, setProgress] = useState(0);
  const [color,setColor] = useState('')
  const navigation = useNavigation();

  const quizData = [
    {
      question:
        "Which best selling toy of 1983 caused hysteria, resulting in riots breaking out in stores?",
      correct_answer: "Cabbage Patch Kids",
      incorrect_answers: ["Transformers", "Care Bears", "Rubik&rsquo;s Cube"],
    },
    {
      question: "In past times, what would a gentleman keep in his fob pocket?",
      correct_answer: "Watch",
      incorrect_answers: ["Money", "Keys", "Notebook"],
    },
    {
      question: "Which American president appears on a one dollar bill?",
      correct_answer: "George Washington",
      incorrect_answers: [
        "Thomas Jefferson",
        "Abraham Lincoln",
        "Benjamin Franklin",
      ],
    },
    {
      question: "What is the nickname of the US state of California?",
      correct_answer: "Golden State",
      incorrect_answers: ["Sunshine State", "Bay State", "Treasure State"],
    },
    {
      question: "Which candy is NOT made by Mars?",
      correct_answer: "Almond Joy",
      incorrect_answers: ["M&amp;M&#039;s", "Twix", "Snickers"],
    },
    {
      question: "When someone is inexperienced they are said to be what color?",
      correct_answer: "Green",
      incorrect_answers: ["Red", "Blue", "Yellow"],
    },
    {
      question:
        "If you are caught &quot;Goldbricking&quot;, what are you doing wrong?",
      correct_answer: "Slacking",
      incorrect_answers: ["Smoking", "Stealing", "Cheating"],
    },
    {
      question: "What is the closest planet to our solar system&#039;s sun?",
      correct_answer: "Mercury",
      incorrect_answers: ["Mars", "Jupiter", "Earth"],
    },
    {
      question: "The Canadian $1 coin is colloquially known as a what?",
      correct_answer: "Loonie",
      incorrect_answers: ["Boolie", "Foolie", "Moodie"],
    },
    {
      question: "What is the French word for &quot;fish&quot;?",
      correct_answer: "poisson",
      incorrect_answers: ["fiche", "escargot", "mer"],
    },
  ];

  useEffect(() => {
    setOptions(
      handleShuffle([
        quizData[currentIndex]?.correct_answer,
        ...quizData[currentIndex]?.incorrect_answers,
      ])
    );
  }, [currentIndex]);

  const handleNext = () => {
    if (currentIndex > 8) {
      alert(score);
    } else if (selected) {
      setCurrentIndex(currentIndex + 1);
      setSelected();
    } else alert("ERR");
  };

  const handleCheck = (v) => {
    setSelected(v);
    if (v === quizData[currentIndex]?.correct_answer) {
      setScore(score + 10);
      setProgress(progress + 0.1);
    }
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
const title = props.route.params.topicActivities.topicName;
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
          title={`${title.slice(0,13)} ..`}
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
          marginTop:20,
          marginHorizontal:7,
          marginVertical:7
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
                onTimeElapsed={() => alert("Time Over")}
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
            marginVertical: 40,
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
        </ScrollView>
      </View>
    </View>
  );
};

export default QuizAssignmentScreen;
