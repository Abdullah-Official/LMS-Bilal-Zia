import { StyleSheet} from 'react-native'
import {PrimaryColor, SecondaryColor} from '../../Constants/theme'

const styles = StyleSheet.create({
    login_heading:{
        fontSize:26,
        color:'#fff',
        fontFamily:'PoppinsMedium',
        textAlign:'center'
    },
    input:{
        borderBottomColor:'#fff',
        borderBottomWidth:1,
        color:'#fff'
    },
    placholder:{
        color:'#fff',
        fontFamily:'QuickSandRegular',
        fontWeight:'600',
        fontSize:13
    },
    input_container:{
        marginVertical:12
    },
    btn_container:{
        backgroundColor:'#fff',
        width:'90%',
        borderRadius:1000,
        padding:4,
        paddingVertical:11,
        alignItems:'center',
        alignSelf:'center'
    },
    btn_txt:{
        fontFamily:'QuickSandMedium',
        color: PrimaryColor,
        fontWeight:'600',
        fontSize:14
    },
    or_txt:{
        marginVertical:10,
        color:'#fff',
        fontFamily:'QuickSandRegular',
        fontSize:13,
        textAlign:'center'
    },
    btn2_container:{
        backgroundColor:'transparent',
        width:'90%',
        borderRadius:1000,
        borderWidth:2,
        borderColor: '#fff',
        padding:4,
        paddingVertical:11,
        alignItems:'center',
        alignSelf:'center'
    },
    btn2_txt:{
        fontFamily:'QuickSandMedium',
        color: '#fff',
        fontWeight:'600',
        fontSize:14
    },
    account_container:{
        flexDirection:'row',
        paddingTop:8,
        alignSelf:'center'
    },
    accTxt:{
        color:'#fff',
        fontFamily:'QuickSandLight',
        fontSize:12,
    },
    accTxt2:{
        color:'#fff',
        fontFamily:'QuickSandMedium',
        fontSize:12,
        paddingLeft:6
    },
    
})


export default styles