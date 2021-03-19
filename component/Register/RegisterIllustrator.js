import React from 'react'
import { StyleSheet, SafeAreaView,Image,Dimensions,View,Text,Pressable} from 'react-native'

const {width} = Dimensions.get("window")

export const RegisterIllustrator = ({navigation,route,typeI,switchScreen}) => {

    const {type} = typeI ? typeI: route.params;
    const userData= route.params.user

    const handleSwitchScreen = () =>{
        navigation.navigate(type == "continuar" ? "register_viewer":"home")
    }

    return (
        <SafeAreaView style={RegisterIllustratorStyle.regilus_const_background}>
            {console.log(userData)}
            <Pressable style={RegisterIllustratorStyle.regilus_const_background} onPress={type == "continuar"?handleSwitchScreen:switchScreen}>
                <View style={RegisterIllustratorStyle.regilus_deco}>
                    <Image style={RegisterIllustratorStyle.regilus_image} resizeMode={"contain"} source={require("../../img/back_ilu1.png")}/>
                    <Image style={RegisterIllustratorStyle.regilus_image2} resizeMode={"contain"} source={require("../../img/back_ilu2.png")}/>
                    <Image style={RegisterIllustratorStyle.regilus_image3} resizeMode={"cover"} source={require("../../img/back_ilu3.png")}/>
                    <Text style={RegisterIllustratorStyle.regilus_text_cont}>Haz click para continuar</Text>    
                </View>
                {
                    type == "continuar" ?   <View style={RegisterIllustratorStyle.regilus_cont_ilustext}>
                                        <Text style={RegisterIllustratorStyle.regilus_text}>CASI</Text>
                                        <Text style={RegisterIllustratorStyle.regilus_text}>TERMINAMOS!</Text>
                                        <Image style={RegisterIllustratorStyle.regilus_ilus} resizeMode={"cover"} source={require("../../img/ilust_casiterminamos.png")}/>
                                    </View>:
                                    <View style={RegisterIllustratorStyle.regilus_cont_ilustext}>
                                        <Text style={RegisterIllustratorStyle.regilus_text}>REGISTRO</Text>
                                        <Text style={RegisterIllustratorStyle.regilus_text}>TERMINADO!</Text>
                                        <Image style={RegisterIllustratorStyle.regilus_ilus} resizeMode={"cover"} source={require("../../img/illust_terminado.png")}/>
                                    </View>

                }
                
            </Pressable>
        </SafeAreaView>
    )
}
const RegisterIllustratorStyle = StyleSheet.create({
    regilus_const_background:{
        width,
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
        width,height:"100%",
        position: "relative",
        justifyContent: 'flex-end',
        flexDirection: 'column',
    },
    regilus_image:{
        width,
        height:"70%",
        position:"absolute"
    },
    regilus_image2:{
        width,
        height:"50%",
        position:"absolute"
    },
    regilus_image3:{
        width,
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
