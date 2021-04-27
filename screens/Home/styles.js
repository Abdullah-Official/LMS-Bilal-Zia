import { StyleSheet } from 'react-native'



const styles = StyleSheet.create({
    profile_container:{
        marginHorizontal:25,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingTop:35
    },
    helloTxt:{
        fontFamily:'PoppinsMedium',
        fontSize:15,
        color:'#fff',
        fontWeight:'600'
    },
    nameTxt:{
        fontFamily:'PoppinsSemiBold',
        fontSize:22,
        color:'#fff',
    },
    coursesTxt:{
        fontFamily:'PoppinsSemiBold',
        fontSize:22,
        color:'#01110A',
    },
    noEnrollmentTxt:{
        fontFamily:'QuickSandRegular',
        fontSize:14,
        marginHorizontal:25,
        color:'#535461',
        marginTop:10,
        width:250
    }
})

export default styles
