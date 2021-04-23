import React from 'react'
import { SafeAreaView,View,Text,StyleSheet,Dimensions,Image,Pressable } from 'react-native'

const {width} = Dimensions.get('window')


export const SucessStatus = ({route,navigation}) => {
    const { text } = route.params;


    return (
        <Pressable onPress={()=>navigation.navigate('home')} style={sucessStyle.sstate_cont_background}>
            <View style={sucessStyle.sstate_back_img}>
                <View style={sucessStyle.sstate_back_img}>
                    <Image style={sucessStyle.sstate_cont_back_deco} source={require('../../img/backGdeco.png')} resizeMode="stretch"/>
                    <View style={sucessStyle.sstate_cont_back_deco_solid}></View>
                </View>
                <View style={sucessStyle.sstate_back_img}>
                    <Image style={sucessStyle.sstate_cont_back_deco} source={require('../../img/medGdeco.png')} resizeMode="stretch"/>
                    <View style={sucessStyle.sstate_cont_back_deco_solid2}></View>
                </View>
                <View style={sucessStyle.sstate_back_img}>
                    <Image style={sucessStyle.sstate_cont_back_deco} source={require('../../img/frontGdeco.png')} resizeMode="stretch"/>
                    <View style={sucessStyle.sstate_cont_back_deco_solid3}>
                        <Text style={sucessStyle.sstate_text}>Haz click para continuar</Text>
                    </View>
                </View>
            </View>
            <View style={sucessStyle.sstate_cont_mid_back_text}>
                <Text style={sucessStyle.sstate_text_notification}>{`${text} EXITOSO!`}</Text>
            </View> 
            <View style={sucessStyle.sstate_cont_mid_back}>
                <Image style={sucessStyle.sstate_img} source={require('../../img/exitoillus.png')} resizeMode="stretch"/>
            </View> 

        </Pressable>
    )
}

const sucessStyle = StyleSheet.create({

    sstate_text_notification:{
        fontSize: 30,
        textAlign:'center',
        color:"white",
        fontWeight:'bold',
        width:310
    },
    sstate_img:{
        width:310,
        height:230
    },
    sstate_cont_back_deco:{
        width,
        marginBottom:-10
    },
    sstate_cont_mid_back_text:{
        width:310,
        marginBottom:50,
        marginTop:-50
    },
    sstate_cont_mid_back:{
        marginBottom:100,
        width:310
    },
    sstate_text:{
        color:"white",
        fontSize:18
    },
    sstate_cont_back_deco_solid:{
        height: 410,
        width,
        backgroundColor: '#6FCDAA'
    },
    sstate_cont_back_deco_solid2:{
        height: 355,
        width,
        backgroundColor: '#70DAB3'
    },
    sstate_cont_back_deco_solid3:{
        height: 150,
        width,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#7EEAC2'
    },
    sstate_cont_back_flex:{
        flexDirection: 'column',
        height: '100%',
        
    },
    sstate_cont_background:{
        width,
        flex: 1,
        height:"100%",
        backgroundColor:"#57B894",
        alignItems: 'center',
        justifyContent: 'center',
    },
    sstate_back_img:{
        width,
        height:"100%",
        position: "absolute",
        justifyContent: 'flex-end',
    }
})