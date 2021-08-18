import React from "react";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import HeaderApp from "../../components/Header";

const Subjects = (props) => {
  const { subjects, grade } = props.route.params;
  console.log("Subject ", subjects)
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
          title={`CLASS ${grade}`}
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
          paddingHorizontal: 20,
        }}
      >
        <View>
          <Text
            style={{
              fontFamily: "PoppinsMedium",
              fontSize: 20,
              marginTop: 46,
              paddingLeft:20,
              color:'#000',
            }}
          >
            Subjects
          </Text>
          <View style={styles.subjectsContainer}>
            {subjects.map((v, i) => {
              return (
                <View
                  key={i}
                  activeOpacity={0.6}
                  style={styles.subjectsBox}
                >
                  <Image
                    source={
                      i == 0
                        ? require("../../assets/phy.jpg")
                        : i == 1
                        ? require("../../assets/maths.png")
                        : i == 2
                        ? require("../../assets/chem.png")
                        : require("../../assets/bio.png")
                    }
                    style={{
                      resizeMode: "contain",
                      width: 60,
                      height: 60,
                      borderRadius: 100,
                    }}
                  />
                  <Text
                    style={{
                      fontFamily: "PoppinsSemiBold",
                      marginTop: 10,
                      textTransform: "uppercase",
                      fontSize: 13,
                      textAlign: "center",
                    }}
                  >
                    {v.subject}
                  </Text>
                  <View style={{marginTop:12}}>
                      <TouchableOpacity
                      activeOpacity={0.5}
                      style={styles.enterBtn}
                      onPress={() => props.navigation.navigate("Chapters", {chapters: v.chapters, grade} )}
                      >
                          <Text style={styles.enterTxt}>Enter</Text>
                      </TouchableOpacity>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      </View>
    </View>
  );
};

export default Subjects;

const styles = StyleSheet.create({
  subjectsContainer: {
    flexWrap: "wrap",
    justifyContent: "space-between",
    // alignItems: "center",
    marginHorizontal: 10,
    flexDirection: "row",
  },
  subjectsBox: {
    width: "47%",
    backgroundColor: "#fff",
    padding: 15,
    paddingVertical: 26,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
    borderRadius: 16,
    alignItems: "center",
    marginTop: 20,
  },
  enterTxt:{
      fontFamily:'PoppinsRegular',
      fontSize:12,
      textAlign:'center',
      color:'#2FAA96'
  },
  enterBtn:{
      backgroundColor:'#DBFEF8',
      width: 100,
      borderRadius:8,
      justifyContent:'center',
      alignItems:'center',
      padding:8
  }
});
