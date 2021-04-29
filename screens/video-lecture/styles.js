import { StyleSheet } from 'react-native'



const styles = StyleSheet.create({
    chaptersHeading: {
        fontFamily: "PoppinsSemiBold",
        fontSize: 20,
        color: "#01110A",
        textAlign: "center",
      },
      chapterNameHeading:{
        fontFamily: "PoppinsRegular",
        fontSize: 20,
        color: "#2C2C2C",
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
      },
      videoLectureHeading:{
        fontFamily: "PoppinsMedium",
        fontSize: 18,
        color: "#2C2C2C",
        // paddingTop:10,
        paddingLeft:4,
        textAlign:'center'
      },
      descHeading:{
        fontFamily: "PoppinsMedium",
        fontSize: 18,
        color: "#2C2C2C",
        textAlign:'center'
      },
      descTxt:{
        textAlign:'justify',
        paddingTop:10,
        color:'#313131',
        opacity:0.8,
        fontFamily:'QuickSandRegular'
      }
})

export default styles
