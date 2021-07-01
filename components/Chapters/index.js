import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "../../screens/Chapters/styles";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

const ChaptersBox = (props) => {
  // console.log("START ", props, " PRAAAPS")
  const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Topics", props)} style={styles.chapters_container} activeOpacity={0.7}>
      <View>
        <Text style={styles.chapterNumber}>{props.id}</Text>
      </View>
      <View >
        <Text style={styles.chapterName}>{props.name}</Text>
      </View>
      <View >
        <FontAwesome5 name="chevron-right" size={18} color="black" />
      </View>
    </TouchableOpacity>
  );
};

export default ChaptersBox;
