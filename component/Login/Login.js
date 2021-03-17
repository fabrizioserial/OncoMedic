import React,{useState} from 'react'
import {SafeAreaView,Image,StyleSheet,Dimensions,View,Text,TextInput,Pressable,Modal,Button } from 'react-native'
import {ButtonCustomeOrange} from '../Buttons/ButtonCustomeOrange.js'

const {width} = Dimensions.get("window")
const {height} = Dimensions.get("window")


export const Login = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);

    const handleSwitchToRegister = () =>{
        navigation.navigate('register')
    }

    const switchToHome = () =>{
        navigation.navigate('home')
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
            
            {
                console.log(height)
            }
            <View style={LoginStyle.log_top_color}/>
            <Image resizeMode={"cover"} style={LoginStyle.log_img_deco1} source={require('../../img/loging_deco.png')}/>
            <View style={LoginStyle.log_cont_login}>
                <View style={LoginStyle.log_cont_login_inside}>
                    <Text style={LoginStyle.log_text_log}>Iniciar</Text>
                    <Text style={LoginStyle.log_text_in}>Sesion</Text>
                </View>
                <View style={LoginStyle.log_cont_login_inputs}>
                    <View>
                        <Text style={LoginStyle.log_text_upinput}>ID de paciente</Text>
                        <TextInput placeholderTextColor="#c4c4c4" placeholder="Ingrese su ID de paciente" style={LoginStyle.log_textInput}></TextInput>
                    </View>
                    <View style={{marginTop: 20}}>
                        <Text style={LoginStyle.log_text_upinput}>Constraseña</Text>
                        <TextInput placeholderTextColor="#c4c4c4" placeholder="Ingrese su contraseña" style={LoginStyle.log_textInput}></TextInput>
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