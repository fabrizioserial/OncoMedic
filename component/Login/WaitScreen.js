import React from 'react'
import {StyleSheet, SafeAreaView,Image,View,Text,Pressable} from 'react-native'

export const WaitScreen= ({navigation}) => {

    const moveToSwiper = ()=>{
        navigation.navigate('login')
    }

    return (
        <SafeAreaView style={RegisterIllustratorStyle.regilus_const_background}>
            <Pressable style={RegisterIllustratorStyle.regilus_const_background} onPress={moveToSwiper}>
                <View style={RegisterIllustratorStyle.regilus_deco}>
                    <Image style={RegisterIllustratorStyle.regilus_image} resizeMode={"contain"} source={require("../../img/back_ilu1.png")}/>
                    <Image style={RegisterIllustratorStyle.regilus_image2} resizeMode={"contain"} source={require("../../img/back_ilu2.png")}/>
                    <Image style={RegisterIllustratorStyle.regilus_image3} resizeMode={"cover"} source={require("../../img/back_ilu3.png")}/>
                    <Text style={RegisterIllustratorStyle.regilus_text_cont}>Haz click para volver al log in</Text>    
                </View>
                <View style={RegisterIllustratorStyle.regilus_cont_ilustext}>
                    <Text style={RegisterIllustratorStyle.regilus_text}>SU SOLICITUD</Text>
                    <Text style={RegisterIllustratorStyle.regilus_text}>ESTA SIENDO PROCESADA</Text>
                    <Image style={RegisterIllustratorStyle.regilus_ilus} resizeMode={"cover"} source={require("../../img/ilust_casiterminamos.png")}/>
                 </View>     
            </Pressable>
        </SafeAreaView>
    )
}

const RegisterIllustratorStyle = StyleSheet.create({
    regilus_const_background:{
        width:"100%",
        height:"100%",
        backgroundColor: "#B189F8",
        justifyContent: 'center',
        alignItems: 'center',
    },
    regilus_text_cont:{
        color:"#efefef",
        fontSize: 18,
        alignSelf: 'center',
        marginBottom:40
    },
    regilus_text:{
        color:"white",
        fontWeight: 'bold',
        fontSize: 35,
    },
    regilus_deco:{
        width:"100%",
        height:"100%",
        position: "relative",
        justifyContent: 'flex-end',
        flexDirection: 'column',
    },
    regilus_image:{
        width:"70%",
        height:"70%",
        position:"absolute"
    },
    regilus_image2:{
        width:"50%",
        height:"50%",
        position:"absolute"
    },
    regilus_image3:{
        width:'20%',
        height:"20%",
        position:"absolute"
    },
    regilus_ilus:{
        marginTop: 40,
        width:280,
        height:250,
        position:"relative",
        alignSelf: 'center',
        marginBottom: 120,
    },
    regilus_cont_ilustext:{
        position:"absolute",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    }
})
