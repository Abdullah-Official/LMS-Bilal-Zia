import { StyleSheet } from "react-native";
import { PrimaryColor, SecondaryColor } from "../../Constants/theme";

const styles = StyleSheet.create({
  main_heading: {
    fontSize: 20,
    fontFamily: "PoppinsSemiBold",
  },
  purchase_container: {
    height: 250,
    width: 180,
    marginBottom: 20,
  },
  purchaseUp: {
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  purchaseDown: {
    backgroundColor: "#EFEFEF",
    height: "50%",
    justifyContent: "center",
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
    paddingVertical: 10,
  },
  classTxt: {
    color: "#fff",
    fontFamily: "PoppinsSemiBold",
    fontSize: 35,
  },
  darkTxt: {
    textAlign: "justify",
    fontFamily: "PoppinsMedium",
    fontSize: 13,
    opacity: 0.7,
  },
  lightTxt: {
    textAlign: "justify",
    opacity: 0.6,
    fontSize: 13,
  },
  purchase_details2: {
    marginTop: 10,
  },
});

export default styles;
