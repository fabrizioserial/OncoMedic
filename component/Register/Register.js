import React, {useState,useEffect} from 'react'
import {ToastAndroid,Platform, AlertIOS,
        SafeAreaView,StyleSheet,Dimensions,View,Image,Text,TextInput,ScrollView, Button,Modal,Pressable} from 'react-native'
import {Picker} from '@react-native-picker/picker'
import {ButtonCustomeOrange} from '../Buttons/ButtonCustomeOrange.js'

const {width} = Dimensions.get("window")
 
export const Register = ({navigation}) => {

    const [modalVisible,setModalVisible] = useState(false)
    const [email,setEmail] = useState("")
    const [name,setName] = useState ("")
    const [gender,setGender] = useState(0)
    const [birth, setBirth] = useState("")
    const [lenghtbirth,setLength] = useState(0)
    const [birthValidate,setBValidate] = useState(true)
    const [emailValidate,setEValidate] = useState(true)


    useEffect(() => {
        var string = birth;
        lenghtbirth < string.length && string.length == 2 ? (setLength(string.length),string=string +"/") : setLength(string.length)
        lenghtbirth < string.length && string.length == 5 ? (setLength(string.length), string = string + "/") : setLength(string.length)
        setBirth(string)

        if(string.length == 10){
            const day = string.substring(0,2)
            if(parseInt(day) > 0 && parseInt(day) <= 31){
                const month = string.substring(3,5)
                if(parseInt(month) > 0 && parseInt(month,10) <= 12){
                    setBValidate(true)
                }else{
                    setBValidate(false)
                }
            }else{
                setBValidate(false)
            }
        }
        

    }, [birth])

    useEffect(() => {
        const email_aux = email;
        email_aux.length > 0 ? email_aux.includes("@") ? setEValidate(true) : setEValidate(false) : setEValidate(true)
        console.log(emailValidate)
    }, [email])

    const handleSwitchToRegisterMedic = () =>{
       // email.length > 0 ? name.length >0 && gender != 0 && birth >0 && navigation.navigate("register_medic") : notifyMessage("Faltan datos")
        navigation.navigate("register_medic")
    }

    const notifyMessage = (msg) => {
    Platform.OS === 'android' ? ToastAndroid.show(msg, ToastAndroid.SHORT) : AlertIOS.alert(msg)
    }

    return (
        <SafeAreaView style={RegisterUser.reguse_cont_background}>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
                }}
            >
                <View style={RegisterUser.centeredView}>
                    <View style={RegisterUser.modalView}>
                        <Picker
                            style={RegisterUser.reguse_picker}  
                            dropdownIconColor={"#AAAAAA"}
                            selectedValue={gender}
                            onValueChange={(itemValue, itemIndex) =>
                                    setGender(itemValue)
                                    }>
                        <Picker.Item label="Masculino"  value={0} />
                        <Picker.Item label="Femenino" value={1} />
                        <Picker.Item label="No indicar" value={2} />
                        </Picker>
                        <Pressable
                        style={[RegisterUser.button, RegisterUser.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}
                        >
                        <Text style={RegisterUser.textStyle}>Confirmar</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>

            <View style={RegisterUser.reguse_top}>
                <Image source={require("../../img/ic_user.png")}/>
                <Text style={RegisterUser.reguse_text_top}>   DATOS USUARIO</Text>
            </View>
            <View>
            <Image style={RegisterUser.reguse_top_img} source={require("../../img/register_deco.png")}/>
            </View>
            <ScrollView  contentContainerStyle={RegisterUser.scroll} >
                <View style={RegisterUser.reguse_cont_cont}>
                    
                    <View style={RegisterUser.reguse_cont_regusein_inputs}>
                            <View>
                                <Text style={RegisterUser.reguse_text_upinput}>Nombre y apellido</Text>
                                <TextInput onChangeText={setName} placeholderTextColor="#c4c4c4" placeholder="Ingrese su ID de paciente" style={RegisterUser.reguse_textInput}></TextInput>
                            </View>
                            <View style={{marginTop: 25}}>
                                <View>
                                    <Text style={RegisterUser.reguse_text_upinput}>Genero</Text>
                                    <Pressable style={RegisterUser.reguse_btn_gender} onPress={()=>setModalVisible(true)}>{gender==0? <Text style={RegisterUser.reguse_text}>Masculino</Text> :gender==1? <Text style={RegisterUser.reguse_text}>Femenino</Text> : <Text style={RegisterUser.reguse_text}>Otro</Text> }</Pressable>
                                </View>
                                
                            </View>
                            <View style={{marginTop: 25}}>
                                <Text style={RegisterUser.reguse_text_upinput}>Email</Text>
                                <TextInput onChangeText={setEmail} value={email} keyboardType={"email-address"} placeholderTextColor="#c4c4c4" placeholder="Ingrese su email" style={ emailValidate ? RegisterUser.reguse_textInput : RegisterUser.reguse_textInputRed }></TextInput>
                                {
                                    !emailValidate  && <Text style={RegisterUser.reguse_validvalue}>Introducir valor valido</Text>
                                }
                            </View>
                            <View style={{marginTop: 25}}>
                                <Text style={RegisterUser.reguse_text_upinput}>Fecha de Nacimiento</Text>
                                <TextInput onChangeText={setBirth} value={birth} maxLength={10} placeholder="Ingrese fecha de nacimiento" placeholderTextColor="#c4c4c4" style={birthValidate ? RegisterUser.reguse_textInput : RegisterUser.reguse_textInputRed}></TextInput>
                                {
                                    !birthValidate  && <Text style={RegisterUser.reguse_validvalue}>Introducir valor valido</Text>
                                }
                            </View>
                            <ButtonCustomeOrange title={"Continuar"} handleFunction={handleSwitchToRegisterMedic} marginT={{marginTop: 50}}/>
                    
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const RegisterUser = StyleSheet.create({
    button: {
        borderRadius: 10,
        padding: 10,
        elevation: 2,
        width:150,
        backgroundColor: "#B189F8",
      },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        backgroundColor: "hsla(175, 75%, 0%, 0.15)",
    },
    modalView: {
        height: 300,
        margin: 10,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 20,
        alignItems: "center",
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    reguse_validvalue:{
        color:"red"
    },
    scroll:{
        width,
        paddingBottom: 30,
        alignItems: 'center',
        minHeight: "100%",

    },
    reguse_cont_cont:{
        width,
        justifyContent: 'center',
        position:"relative",
        flex: 1,
    },
    reguse_text_upinput:{
        color:"#AAAAAA",
        fontSize: 17,
    },
    reguse_picker:{
        marginTop: 80,
        marginBottom:80,
        width:300,
        height:50,
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#E3E3E3",
        justifyContent: 'center',
    },
    reguse_textInput:{
        marginTop: 6,
        width:300,
        height:50,
        fontSize: 17,
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#E3E3E3",   
    },
    reguse_text:{
        fontSize: 17,
    },
    reguse_textInputRed:{
        marginTop: 6,
        width:300,
        height:50,
        fontSize: 17,
        padding: 10,
        borderWidth: 2,
        borderColor: "red",
        borderRadius: 10,
        backgroundColor: "#E3E3E3",   
    },
    reguse_cont_regusein_inputs:{
        flexDirection: 'column',
        width:300,
        alignSelf: 'center',
        marginTop: 20,
        justifyContent: 'center',
        flex: 4,
        marginBottom:50
    },
    reguse_top_color:{
        backgroundColor:"#B189F8",
        height:80,
        width
    },
    reguse_text_reguse:{
        fontSize: 25,
        fontWeight: 'bold',
    },
    reguse_text_in:{
        fontSize: 25,
        fontWeight: 'bold',
        color: "#B189F8",
        marginLeft: 5,
    },

    reguse_text_top:{
        fontWeight: 'bold',
        fontSize: 18,
        color:"white"
    },
    reguse_top_img:{
        width,
        flex: 0,
    },
    reguse_cont_background:{
        width,
        height:"100%",
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: "#FFF",
    },
    reguse_top:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        width,
        height:80,
        flex: 0,
        backgroundColor: "#B189F8",
    },
    reguse_btn_gender:{
        backgroundColor: "#E3E3E3",
        width:300,
        height:50,
        padding: 10,
        borderRadius: 10,
        justifyContent:'center',
        alignContent: 'center', 
    },
})
