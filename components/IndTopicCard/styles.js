import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    card_container:{
        height:190,
        width:180,
        marginBottom:15
    },
    image_cont:{
        backgroundColor: '#315567',
        height:'75%',
        justifyContent:'center',
        alignItems:'center',
        borderTopRightRadius:12,
        borderTopLeftRadius:12,
    },
    content:{
        backgroundColor:'#ccc',
        height:'25%',
        justifyContent:'center',
        alignItems:'center',
        borderBottomLeftRadius:12,
        borderBottomRightRadius:12
    },
    contentTxt:{
        fontFamily:'QuickSandMedium',
        fontSize:12
    }
})

export default styles