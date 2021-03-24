import React from 'react'
import { SafeAreaView,View,Text,StyleSheet,Dimensions,Image } from 'react-native'
import {ButtonCustomeHome} from '../Buttons/ButtonCustomeHome.js'

const {width} = Dimensions.get('window')

export const Home = ({navigation}) => {

    const switchDailyRegister = () =>{
        navigation.navigate("registro_diario")
    }

    const switchSymptomsRegister = () =>{
        navigation.navigate('registro_sintoma')
    }

    return (
        <SafeAreaView style={HomeStyle.h_const_background}>

            <View style={HomeStyle.h_back_img}>
                <View  style={HomeStyle.h_back_img}>
                    <Image style={HomeStyle.h_img}source={require('../../img/back_home1.png')}/>
                    <View style={HomeStyle.h_img_view}/>
                </View>
                <View  style={HomeStyle.h_back_img}>
                    <Image style={HomeStyle.h_img}source={require('../../img/back_home2.png')}/>
                    <View style={HomeStyle.h_img_view2}/>
                </View>            
                
            </View>
            <View style={HomeStyle.h_header}>
                <Image style={HomeStyle.h_header_img} source={require('../../img/avatar/avatar1.png')}/>
            </View>
            

            <ButtonCustomeHome title={"Como te encuentras hoy?"} orientation={"row"} illustration={"RD"} text={"Completa y cuentanos como te has sentido"} color={"#A476FC"} handlePres={switchDailyRegister}/>
            <ButtonCustomeHome title={"No te encuentras bien?"} orientation={"row-reverse"} text={"Completa y cuentanos que te sucede!"} color={"#7685FC"} handlePres={switchSymptomsRegister}/>

        </SafeAreaView>
    )
}
const HomeStyle = StyleSheet.create({
    h_header_img:{
        width:50,
        height:50
    },
    h_header:{
        justifyContent: 'center',
        padding: 10,
        width,
        height:80,
        position: "absolute",
        top: 0,
    },
    h_img_view:{
        height:320,
        width:"100%",
        backgroundColor: "#F7F3FE",
    },
    h_img_view2:{
        height:250,
        width:"100%",
        backgroundColor: "#EEE6FD",
    },
    h_const_background:{
        width,
        flex: 1,
        height:"100%",
        backgroundColor: "white",
        alignItems: 'center',
        justifyContent: 'center',
    },
    h_back_img:{
        width,
        height:"100%",
        position: "absolute",
        justifyContent: 'flex-end',
    },
    h_img:{
        width,
        position: "relative",
    }
})
