import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  profileImg: {
    height: 80,
    width: 80,
    borderRadius: 100,
    resizeMode: "cover",
  },
  details_container: {
    flexDirection: "row",
    marginBottom: 15,
  },
  textDark: {
    fontFamily: "PoppinsSemiBold",
    fontSize: 16,
  },
  textLight: {
    fontFamily: "QuickSandMedium",
    color: "#535461",
    fontSize: 14,
    paddingTop: 3,
    paddingLeft: 20,
    textAlign: "center",
  },
  pencil: {
    position: "absolute",
    bottom: 80,
    right: 30,
    backgroundColor: "#305363",
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 11,
  },
  input: {
    backgroundColor: "#EFEFEF",
    width: "90%",
    paddingLeft: 30,
    paddingVertical: 8,
    borderRadius: 12,
    marginTop: 6,
    marginBottom: 10,
  },
  btnBuy: {
    backgroundColor: "#36657C",
    paddingVertical: 11,
    paddingHorizontal: 60,
    borderRadius: 12,
  },
  buyTxt: {
    color: "#fff",
    fontFamily: "QuickSandMedium",
  },
});

export default styles;
