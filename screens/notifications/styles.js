import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    notificationTxt:{
        fontFamily:'PoppinsSemiBold',
        fontSize:20
    },
    notifTxt1:{
        fontSize:14,
        marginBottom:8,
        fontFamily:'PoppinsMedium',
        fontWeight:'600'
    },
    notifTxt2:{
        fontSize:14,
        fontFamily:'QuickSandRegular',
        color:'#5D5E6B'
    },
    maincard_container:{
        flexDirection:'row',
        // justifyContent:'space-around',
        marginBottom:10,
        marginHorizontal:15
    },
    avatar:{
        
        width:60,
        height:60,
        justifyContent:'center',
        borderRadius:100
    },
    class:{
        color:'#fff',
        fontFamily:'PoppinsSemiBold',
        fontSize:20,
        textAlign:'center'
    },
    container:{
        borderBottomColor:'#DEDEDE',
        borderBottomWidth:1,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:34
    },
    right:{
        paddingLeft:25,
        width:'75%'
    },
    left:{
        width:'25%',
    },
    nameAdmin:{
        fontFamily:'PoppinsSemiBold',
        fontSize:14
    },
    notifDetails:{
        color:'#5D5E6B',
        fontSize:12,
        fontFamily:'QuickSandRegular',
        fontWeight:'600'
    },
    topicNotif:{
        color:'#234F8F',
        fontSize:11
    }

});

export default styles;
