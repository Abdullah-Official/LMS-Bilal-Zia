import React, { useState } from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

const CoursesBox = (props) => {
  const navigation = useNavigation()
  console.log(props.enrolled)
  const [buy, setBuy] = useState(props.enrolled)
  return (
    <View>
      <TouchableOpacity
      onPress={() =>  navigation.navigate(props.navigation, props)}
        style={
          (styles.courseBox_container,
          props.id % 2 === 0
            ? { ...styles.courseBox_container, backgroundColor: "#224E8F", }
            : styles.courseBox_container)
        }
        activeOpacity={0.8}
      >
        <View style={{ padding: 20 }}>
          <View>
            <Text style={styles.course_class}>{props.grade}</Text>
            <Text style={styles.course_about}>{props.about}</Text>
          </View>
        </View>
        <View
          style={{ alignItems: "flex-end", paddingRight: 14, paddingTop: 10 }}
        >
          <FontAwesome name="chevron-right" size={24} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CoursesBox;
