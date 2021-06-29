import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  chaptersHeading: {
    fontFamily: "PoppinsSemiBold",
    fontSize: 20,
    color: "#01110A",
    textAlign: "center",
  },
  chapters_container: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#EFEFEF",
    width: "80%",
    paddingVertical: 14,
    borderRadius: 13,
    marginBottom: 13,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  chapterName: {
    fontFamily: "PoppinsMedium",
    fontSize: 14,
    color: "#2C2C2C",
  },
  chapterNumber: {
    fontFamily: "PoppinsRegular",
    fontSize: 14,
    color: "#2C2C2C",
  },
  chapterNameHeading:{
    fontFamily: "PoppinsRegular",
    fontSize: 20,
    color: "#2C2C2C",
    // paddingTop:20
  },
  topicHeading:{
    fontFamily: "PoppinsRegular",
    fontSize: 18,
    color: "#2C2C2C",
    paddingTop:10,
    paddingLeft:4
  },
  topicTxt:{
    fontFamily: "PoppinsMedium",
    fontSize: 18,
    color: "#2C2C2C",
    paddingTop:10
  }
});

export default styles;
