import React, {useState,useEffect} from 'react'
import {ToastAndroid,Platform, AlertIOS,
        SafeAreaView,StyleSheet,Dimensions,View,Image,Text,TextInput,ScrollView, Button,Modal,Pressable} from 'react-native'
import {Picker} from '@react-native-picker/picker'
import {ButtonCustomeOrange} from '../Buttons/ButtonCustomeOrange.js'
import {connect} from 'react-redux'
import {setPersonalInformationAction} from '../../reduxStore/actions/registerAction'
import DropDownPicker from 'react-native-dropdown-picker'

const {width} = Dimensions.get("window")
 
const Register = ({navigation,setPersonalInformationAction}) => {

    const [email,setEmail] = useState("")
    const [name,setName] = useState ("")
    const [password,setPassword] = useState("")
    const [gender,setGender] = useState(2)
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
    }, [email])

    const handleSwitchToRegisterMedic = () =>{
       // email.length > 0 ? name.length >0 && gender != 0 && birth >0 && navigation.navigate("register_medic") : notifyMessage("Faltan datos")
        setPersonalInformationAction({name:name,email:email,gender:gender,birth:birth,password:password})
        navigation.navigate("register_medic")
    }

    const notifyMessage = (msg) => {
    Platform.OS === 'android' ? ToastAndroid.show(msg, ToastAndroid.SHORT) : AlertIOS.alert(msg)
    }

    const genderTypes=[{label: 'Masculino', value:0,},
                {label: 'Femenino', value:1},
                {label: 'Otro', value:2}]

    return (
        <SafeAreaView style={RegisterUser.reguse_cont_background}>

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
                                <TextInput onChangeText={setName} placeholderTextColor="#c4c4c4" placeholder="Ingrese su nombre" style={RegisterUser.reguse_textInput}></TextInput>
                            </View>
                            <View style={{marginTop:25}}>
                                <Text style={RegisterUser.reguse_text_upinput}>Contraseña</Text>
                                <TextInput onChangeText={setPassword} placeholderTextColor="#c4c4c4" placeholder="Ingrese su contraseña" style={RegisterUser.reguse_textInput}></TextInput>
                            </View>
                            <View style={{marginTop: 25}} zIndex={10000}>
                                <View>
                                    <Text style={RegisterUser.reguse_text_upinput}>Genero</Text>
                                    <DropDownPicker
                                        items={genderTypes}
                                        defaultValue={gender}
                                        style={gender!=null?{...RegisterUser.reguse_drop_down_picker,backgroundColor: '#fafafa'}:{...RegisterUser.reguse_drop_down_picker,backgroundColor: "#E3E3E3"}}
                                        itemStyle={{ justifyContent: 'flex-start'}}
                                        containerStyle={{borderTopLeftRadius:10, borderTopRightRadius:10, borderBottomLeftRadius:10, borderBottomRightRadius:10}}
                                        dropDownStyle={{backgroundColor: '#fafafa'}}
                                        onChangeItem={(item) => setGender(item.value)}
                                        placeholder={'Seleccione su genero'}
                                        placeholderStyle={gender==null?{color:'#AAAAAA',fontSize:17}:{color:'black',fontSize:17}}
                                        zIndex={30}>
                                    </DropDownPicker>
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
const mapDispatchToProps = {
    setPersonalInformationAction
}

export default connect(null,mapDispatchToProps)(Register)

const RegisterUser = StyleSheet.create({

    reguse_drop_down_picker:{
        padding:0,
        borderTopLeftRadius:10,
        borderTopRightRadius:10, 
        borderBottomLeftRadius:10, 
        borderBottomRightRadius:10,
        height:50,
    },
    reguse_validvalue:{
        color:"red"
    },
    scroll:{
        width,
        paddingBottom: 30,
        alignItems: 'center',
    

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
