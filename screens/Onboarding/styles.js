import { StyleSheet} from 'react-native'
import {PrimaryColor, SecondaryColor} from '../../Constants/theme'

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: "#fff",
        marginTop:-50,
      },
      nxtBtn: {
        backgroundColor: PrimaryColor,
        color:'black',
        width:'80%',
        marginVertical:5,
        alignSelf:'center',
        padding:10,
        alignItems:'center',
        opacity:0.9,
        borderRadius:12
      },
      skpBtn: {
        backgroundColor:'#fff',
        width:'80%',
        marginVertical:5,
        alignSelf:'center',
        padding:8,
        alignItems:'center',
        opacity:0.9,
        borderColor: PrimaryColor,
        borderWidth:2,
        borderRadius:12
      },
      title: {
        fontSize: 20,
        textAlign: "center",
        marginHorizontal: 40,
        marginTop:20,
        fontFamily:'PoppinsSemiBold',
        color:'#000'
      },
      text: {
        fontSize: 14,
        color: "#A9A9A9",
        textAlign: "center",
        marginHorizontal: 20,
        marginTop: 10,
        fontFamily:'QuickSandRegular',
        fontWeight:'normal',
      },
      dotStyle: {
        backgroundColor: "#cccc",
      },
      activeDotStyle: {
        backgroundColor: SecondaryColor ,
        
      },
      rightTextWrapper: {
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      },
      rightText: {
        color: "#fff",
        fontSize: 14,
        textTransform:'uppercase',
        fontFamily:'QuickSandMedium',
      },
      skpTxt: {
        color: PrimaryColor ,
        fontSize: 14,
        textTransform:'uppercase',
        fontFamily:'QuickSandMedium',
      },
      getStartedBtn:{
        backgroundColor: PrimaryColor,
        padding:12,
        width:'80%',
        alignItems:'center',
        alignSelf:'center',
        borderRadius:100
      },
      getStartedTxt:{
        color:'#fff',
        fontFamily:'QuickSandMedium',
        fontWeight:'600',
        fontSize:14
      }
})


export default styles