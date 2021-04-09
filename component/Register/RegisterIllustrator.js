import React,{useState} from 'react'
import { StyleSheet, SafeAreaView,Image,Dimensions,View,Text,Pressable} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { connect } from 'react-redux';

const {width} = Dimensions.get("window")

const RegisterIllustrator = ({navigation,userData,goHomeFunction}) => {

    
    const handleSwitchScreen = () =>{
        pushToDatabase(userData).then(
            goHomeFunction()
        )
    }

    const pushToDatabase = async (user) =>{
        fetch('https://83b9594e94c4.ngrok.io/users',{
            method: 'POST',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name:user.name,
                password:user.password,
                gender:user.gender,
                email:user.email,
                birth:user.birth,
                medic:user.medic,
                place:user.place,
                etnia:user.etnia,
                id:user.id,
                smoke:user.smoke.smoke,
                time: user.smoke.time==''?0:user.smoke.time,
                qnt:user.smoke.qnt==''?0:user.smoke.qnt,
                dbt:user.dbt.dbt,
                med:user.dbt.med,
                gip:user.gip,
                epoc:user.epoc,
                acv:user.acv,
                inf:user.inf,
                avatar:user.avatar
            })
        }).then((response) => response.json())
        .then(async (json) =>{
            try{
                await AsyncStorage.setItem(user.id,json.body.token)
            }catch(e){
                console.log('error')
            }
        })
    }

    return (
        <SafeAreaView style={RegisterIllustratorStyle.regilus_const_background}>
            <Pressable style={RegisterIllustratorStyle.regilus_const_background} onPress={handleSwitchScreen}>
                <View style={RegisterIllustratorStyle.regilus_deco}>
                    <Image style={RegisterIllustratorStyle.regilus_image} resizeMode={"contain"} source={require("../../img/back_ilu1.png")}/>
                    <Image style={RegisterIllustratorStyle.regilus_image2} resizeMode={"contain"} source={require("../../img/back_ilu2.png")}/>
                    <Image style={RegisterIllustratorStyle.regilus_image3} resizeMode={"cover"} source={require("../../img/back_ilu3.png")}/>
                    <Text style={RegisterIllustratorStyle.regilus_text_cont}>Haz click para continuar</Text>    
                </View>
            
                <View style={RegisterIllustratorStyle.regilus_cont_ilustext}>
                    <Text style={RegisterIllustratorStyle.regilus_text}>REGISTRO</Text>
                    <Text style={RegisterIllustratorStyle.regilus_text}>TERMINADO!</Text>
                    <Image style={RegisterIllustratorStyle.regilus_ilus} resizeMode={"cover"} source={require("../../img/illust_terminado.png")}/>
                </View>
            </Pressable>
        </SafeAreaView>
    )
}

const mapStateToProps = (state) => {
    return {
        userData: state.user_data
    }
}

export default connect(mapStateToProps)(RegisterIllustrator)

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
