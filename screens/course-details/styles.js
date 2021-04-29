import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header_content:{
    marginHorizontal:25, 
    marginTop:20,
    justifyContent:'space-between',
    flexDirection:'row'
  },
  header_content_text:{
      color:'#fff',
      fontFamily:"PoppinsSemiBold",
      fontSize:20
  },
  header_para:{
      marginHorizontal:25,
      width:240,
      color:'#fff',
      fontFamily:'QuickSandRegular',
      fontSize:12,
      paddingHorizontal:6,
      paddingTop:10
  },
  headingLearn:{
      color:'#0E0E0E',
      paddingLeft:19,
      fontFamily:'PoppinsSemiBold',
      fontSize:20
  },
  details_container:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginHorizontal:40,
      marginLeft:60,
      marginBottom:10
      
  },
  detailsTxt:{
      width:210,
      color:'#535461',
      fontSize:14,
      opacity:0.6
  },
  instructor_container:{
      backgroundColor:'#EFEFEF',
      borderRadius:12,
      padding:12,
      flexDirection:'row',
  },
  instructor_name:{
    color:'#0E0E0E',
    fontFamily:'QuickSandMedium',
    fontSize:14,
    fontWeight:'700'
  },
  instructorTxt:{
      fontSize:10,
      width:200,
      fontFamily:'QuickSandRegular'
  },
  btnBuy:{
      backgroundColor: '#36657C',
      paddingVertical:12,
      paddingHorizontal:40,
      borderRadius:12
  },
  buyTxt:{
      color:'#fff',
      fontFamily:'QuickSandMedium'
  }

});

export default styles;
