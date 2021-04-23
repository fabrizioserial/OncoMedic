import React from 'react'
import { SafeAreaView,View,Text,StyleSheet,Dimensions,Image,Pressable } from 'react-native'

const {width} = Dimensions.get('window')


export const FailStatus = ({route,navigation}) => {

    const {e } = route.params;

    return (
        <Pressable onPress={()=>navigation.navigate('home')} style={failStyle.sstate_cont_background}>
            <View style={failStyle.sstate_back_img}>
                <View style={failStyle.sstate_back_img}>
                    <Image style={failStyle.sstate_cont_back_deco} source={require('../../img/backRdeco.png')} resizeMode="stretch"/>
                    <View style={failStyle.sstate_cont_back_deco_solid}></View>
                </View>
                <View style={failStyle.sstate_back_img}>
                    <Image style={failStyle.sstate_cont_back_deco} source={require('../../img/medRdeco.png')} resizeMode="stretch"/>
                    <View style={failStyle.sstate_cont_back_deco_solid2}></View>
                </View>
                <View style={failStyle.sstate_back_img}>
                    <Image style={failStyle.sstate_cont_back_deco} source={require('../../img/frontRdeco.png')} resizeMode="stretch"/>
                    <View style={failStyle.sstate_cont_back_deco_solid3}>
                        <Text style={failStyle.sstate_text}>{e}</Text>
                    </View>
                </View>
            </View>
            <View style={failStyle.sstate_cont_mid_back_text}>
                <Text style={failStyle.sstate_text_notification2}>{`Hubo un problema!`}</Text>

            </View> 
            <View style={failStyle.sstate_cont_mid_back}>
                <Image style={failStyle.sstate_img} source={require('../../img/error.png')} resizeMode="stretch"/>
            </View> 
        </Pressable>
    )
}

const failStyle = StyleSheet.create({

    sstate_text_notification:{
        fontSize: 50,
        textAlign:'center',
        color:"white",
        fontWeight:'bold',
        width:310
    },
    sstate_text_notification2:{
        fontSize: 35,
        textAlign:'center',
        color:"white",
        fontWeight:'bold',
        width:250
    },
    sstate_img:{
        width:250,
        height:220
    },
    sstate_cont_back_deco:{
        width,
        marginBottom:-10
    },
    sstate_cont_mid_back_text:{
        width:250,
        marginBottom:70,
        marginTop:-50
    },
    sstate_cont_mid_back:{
        marginBottom:180,
        width:250
    },
    sstate_text:{
        color:"white",
        fontSize:18
    },
    sstate_cont_back_deco_solid:{
        height: 430,
        width,
        backgroundColor: '#FD7691'
    },
    sstate_cont_back_deco_solid2:{
        height: 375,
        width,
        backgroundColor: '#FF8FA5'
    },
    sstate_cont_back_deco_solid3:{
        height: 200,
        width,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#FFA5B6'
    },
    sstate_cont_back_flex:{
        flexDirection: 'column',
        height: '100%',
        
    },
    sstate_cont_background:{
        width,
        flex: 1,
        height:"100%",
        backgroundColor:"#FF6584",
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