import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  pointsTxt: {
    color: "#32586A",
    fontSize: 20,
    fontFamily: "PoppinsMedium",
  },
  quiz_container: {
    //   marginHorizontal:10,
    marginTop: 34,
    justifyContent: "center",
    alignItems: "center",
  },
  quiz_main: {
    paddingTop: 10,
    width: 270,
  },
  questionTxt: {
    textAlign: "justify",
    marginHorizontal: 6,
  },
  answers_box: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
    backgroundColor: "#EFEFEF",
    paddingHorizontal: 15,
    paddingVertical: 14,
    borderRadius: 14,
    marginBottom: 10,
  },
  answers_box_correct: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
    backgroundColor: "green",
    paddingHorizontal: 15,
    paddingVertical: 14,
    borderRadius: 14,
    marginBottom: 10,
  },
  answers_box_wrong: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
    backgroundColor: "#d80000",
    paddingHorizontal: 15,
    paddingVertical: 14,
    borderRadius: 14,
    marginBottom: 10,
  },
  btnNext: {
    borderColor: "#315668",
    borderWidth: 2,
    width: "90%",
    paddingVertical: 10,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 13,
  },
  nxtTxt: {
    color: "#315668",
    fontSize: 15,
    textTransform: "uppercase",
  },
  prevTxt: {
    color: "#315668",
    fontSize: 15,
  },
});

export default styles;
