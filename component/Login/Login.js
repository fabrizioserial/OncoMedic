import React,{useEffect, useState} from 'react'
import {SafeAreaView,Image,StyleSheet,Dimensions,View,Text,TextInput,Pressable,Modal,Button } from 'react-native'
import {ButtonCustomeOrange} from '../Buttons/ButtonCustomeOrange.js'
import {setUser} from '../../reduxStore/actions/registerAction'
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {width} = Dimensions.get("window")
const {height} = Dimensions.get("window")

const Login = ({navigation, setUser}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [id,setId]=useState("")
    const [password,setPassword] = useState("")

    const handleSwitchToRegister = () =>{
        navigation.navigate('register')
    }

    const switchToHome = async () =>{
        const token = await getToken(id)
        fetch('https://83b9594e94c4.ngrok.io/users/' + id,{
            method: 'GET',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+ token
            }
        }).then((response) => response.json())
        .then(async (json) =>{
            const userGot = json[0]
            console.log(userGot.password)
            console.log(password)
            if(userGot.password==password){
                const smoke={smoke:json.smoke,time:json.time,qnt:json.qnt}
                const dbt={dbt:json.dbt,med:json.med}
                setUser({
                name:userGot.name,
                password:userGot.password,
                gender:userGot.gender,
                email:userGot.email,
                birth:userGot.birth,
                medic:userGot.medic,
                place:userGot.place,
                etnia:userGot.etnia,
                id:userGot.id,
                smoke:smoke,
                dbt:dbt,
                gip:userGot.gip,
                epoc:userGot.epoc,
                acv:userGot.acv,
                inf:userGot.inf,
                avatar:userGot.avatar
                })
                navigation.navigate('home')
            }
            else(console.log('error'))
        })
    }
    

    const getToken = async (idToGet) => {
        try{
            const value = await AsyncStorage.getItem(idToGet)
            if(value!=null){
                return value
            }
            else{
                console.log('err')
                return
            }
        }catch(e){
            console.log('error')
        }
    }

    return (
        <SafeAreaView style={LoginStyle.log_cont}>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Proximamente va a funcionar</Text>
                    <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                    >
                    <Text style={styles.textStyle}>Genial!</Text>
                    </Pressable>
                </View>
                </View>
            </Modal>
            
            <View style={height<700?LoginStyle.log_top_color2:LoginStyle.log_top_color}/>
            <Image resizeMode={height<700 ?"stretch":"cover"} style={height<700?LoginStyle.log_img_deco2:LoginStyle.log_img_deco1} source={require('../../img/loging_deco.png')}/>
            <View style={LoginStyle.log_cont_login}>
                <View style={LoginStyle.log_cont_login_inside}>
                    <Text style={LoginStyle.log_text_log}>Iniciar</Text>
                    <Text style={LoginStyle.log_text_in}>Sesion</Text>
                </View>
                <View style={LoginStyle.log_cont_login_inputs}>
                    <View>
                        <Text style={LoginStyle.log_text_upinput}>ID de paciente</Text>
                        <TextInput onChangeText={setId} placeholderTextColor="#c4c4c4" placeholder="Ingrese su ID de paciente" style={LoginStyle.log_textInput}></TextInput>
                    </View>
                    <View style={{marginTop: 20}}>
                        <Text style={LoginStyle.log_text_upinput}>Constraseña</Text>
                        <TextInput onChangeText={setPassword} placeholderTextColor="#c4c4c4" placeholder="Ingrese su contraseña" style={LoginStyle.log_textInput}></TextInput>
                    </View>
                    <View style={LoginStyle.log_cont_olvcont}>
                        <Pressable style={{width:300}} onPress={() => setModalVisible(true)}>
                            <Text style={LoginStyle.log_olvcont}>
                                ¿Olvidaste la contraseña?
                            </Text>
                        </Pressable>
                    </View>
                    {
                        //TEST SWITCHHOME
                    }
                    <ButtonCustomeOrange  title="Iniciar sesion" handleFunction={switchToHome}/>
                    <Pressable style={LoginStyle.log_cont_register} onPress={handleSwitchToRegister}>
                        <Text>No tienes cuenta?</Text>
                        <Text style={LoginStyle.log_text_register}> Registrate!</Text>
                    </Pressable>
                </View>
            </View>
            <Button onPress={()=>AsyncStorage.clear()} title={'clear storage'}></Button>
        </SafeAreaView>
    )
}

const LoginStyle = StyleSheet.create({
    log_text_register:{
        fontWeight: 'bold',
    },
    log_cont_register:{
        flexDirection: 'row',
        marginTop: 15,
        justifyContent: 'center',
    },
    log_btn_login:{
        height:50,
    },
    log_cont_olvcont:{
        width:300,
        justifyContent: 'flex-end',
    },
    log_olvcont:{
        fontSize: 12,
        marginTop: 10,
        textAlign: 'right'
    },
    log_text_upinput:{
        color:"#CCCCCC",
        fontSize: 17,
    },
    log_textInput:{
        marginTop: 6,
        width:300,
        height:50,
        fontSize: 17,
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#E3E3E3",
        
    },
    log_cont_login_inputs:{
        flexDirection: 'column',
        width:300,
        marginTop: 20,
    },
    log_top_color:{
        backgroundColor:"#B189F8",
        height:80,
        width
    },
    log_top_color2:{
        backgroundColor:"#B189F8",
        height:40,
        width
    },
    log_text_log:{
        fontSize: 25,
        fontWeight: 'bold',
    },
    log_text_in:{
        fontSize: 25,
        fontWeight: 'bold',
        color: "#B189F8",
        marginLeft: 5,
    },
    log_img_deco1:{
        width:"100%",
       height:150
    },
    log_img_deco2:{
        width: "100%",
        height:100,
    },
    log_cont_login:{
        marginTop: 20,
    },
    log_cont_login_inside:{
        flexDirection: 'row',  
    },
    log_cont:{
        width,
        flex: 1,
        height:"100%",
        flexDirection: 'column',
        backgroundColor:"#FFFFFF",
        alignItems: 'center',
    }
})

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: "hsla(175, 75%, 0%, 0.15)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    width:150
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#B189F8",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

const mapDispatchToProps = {
    setUser
}

export default connect(null,mapDispatchToProps) (Login)