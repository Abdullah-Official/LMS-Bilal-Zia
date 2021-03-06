import React from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ChaptersBox from "../../components/Chapters";
import HeaderApp from "../../components/Header";
import NoDataComponent from "../../components/noData/no-data";
import styles from "./styles";

const Chapters = ({ route }) => {
  console.log("START  ", route.params, " chapters data new");
  return (
    <View style={{ flex: 1, backgroundColor: "#315566" }}>
      <View
        style={{
          flex: 1,
          backgroundColor: "#315566",
          justifyContent: "center",
        }}
      >
        <HeaderApp
          title={`CLASS ${route.params.grade}`}
          iconLeft={require("../../assets/back-arrow-white.png")}
          nav="back"
        />
      </View>
      <View
        style={{
          flex: 5,
          backgroundColor: "#fff",
          borderTopRightRadius: 60,
          borderTopLeftRadius: 60,
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ marginTop: 40 }}>
            <Text style={styles.chaptersHeading}>Chapter Wise List</Text>
          </View>
          <View style={{ alignItems: "center", marginTop: 30 }}>
            {route.params.chapters?.length > 0 ? (
              route.params.chapters.map((v, i) => {
                return (
                  <ChaptersBox
                    key={i}
                    grade={route.params.grade}
                    name={v.chapterName}
                    id={v.chapterNumber}
                    topics={v.topics}
                    class={v.grade}
                  />
                );
              })
            ) : (
              <NoDataComponent
                message="No chapter found"
                description="We did not find any chapters"
                iconPath={require("../../assets/no-data.png")}
              />
            )}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Chapters;
