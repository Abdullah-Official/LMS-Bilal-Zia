import { StyleSheet } from 'react-native'



const styles = StyleSheet.create({
  chaptersHeading: {
    fontFamily: "PoppinsSemiBold",
    fontSize: 22,
    color: "#01110A",
    textAlign: "center",
  },
  chapters_container: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#EFEFEF",
    width: "70%",
    padding: 14,
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
});

export default styles
