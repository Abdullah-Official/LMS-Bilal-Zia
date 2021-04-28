import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "../../screens/Chapters/styles";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

const TopicBox = (props) => {
  // console.log('box', props)
  const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={() => navigation.navigate("TopicDetails", props)}  style={styles.chapters_container} activeOpacity={0.7}>
      <View>
        <Text style={styles.chapterNumber}>{props.topicNumber}</Text>
      </View>
      <View>
        <Text style={styles.chapterName}>{props.topicName} ...</Text>
      </View>
      <View style={{ justifyContent: "center" }}>
        <FontAwesome5 name="chevron-right" size={18} color="black" />
      </View>
    </TouchableOpacity>
  );
};

export default TopicBox;
