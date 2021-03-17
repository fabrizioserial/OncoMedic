import React,{useEffect} from 'react'
import {SafeAreaView,StyleSheet,Dimensions,Image} from 'react-native'

const {width} = Dimensions.get("window")



export const Splash = ({navigation}) => {

useEffect(() => {
                setTimeout(() => navigation.navigate("login"), 3000)
}, [])

    return (
        <SafeAreaView style={SplashStyle.splash_screen_cont}>
            <Image style={SplashStyle.image_logo} source={require('../../img/icon.png')}/>
            
        </SafeAreaView>
    )
}

const SplashStyle = StyleSheet.create({
    splash_screen_cont:{
        height:"100%",
        width,
        backgroundColor:"#B189F8",
        justifyContent: 'center',
        alignItems: 'center',
    },
    image_logo:{
        height:100,
        width:110
    }
})
