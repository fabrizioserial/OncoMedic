import React, {useState,useEffect} from 'react'
import {ToastAndroid,Platform, AlertIOS,
        SafeAreaView,StyleSheet,Dimensions,View,Image,Text,TextInput,ScrollView, Pressable} from 'react-native'
import {Picker} from '@react-native-picker/picker'
import {ButtonCustomeOrange} from '../Buttons/ButtonCustomeOrange.js'
import { Button, Modal } from 'react-native-paper'
import {SearchBar} from 'react-native-elements'
import {ModalTest} from './ModalTest';
import store from '../../reduxStore/store';
import {setMedicalInformationAction} from '../../reduxStore/actions/registerAction'
import { RegisterMedic } from 'component\Register\RegisterMedic';


const {width} = Dimensions.get("window")
 
export const RegisterMedic = ({navigation}) => {
    const [etnia,setEtnia] = useState("No Asignado")
    const [place,setPlace] = useState ("No Asignado")
    const [medic,setMedic] = useState(0)
    const [medicModal,setModalVisible] = useState(false)
    const [medicSearch,setMedicSearch] = useState('')
    const [id, setId] = useState("")

    const medics=['pedro', 'pepe']

    const handleSwitchToRegisterMedic = () =>{
       // id.length > 0 ? etnia != "No Asignado" && medic != 0 && place != "No Asignado" && navigation.navigate("register_ilustrator1") : notifyMessage("Faltan datos")
        setMedicalInformationAction({
            medic:medic,
            place:place,
            etnia:etnia,
            id:id
        })
        navigation.navigate("register_ilustrator1",{type:"continuar"})
    }

    const notifyMessage = (msg) => {
    Platform.OS === 'android' ? ToastAndroid.show(msg, ToastAndroid.SHORT) : AlertIOS.alert(msg)
    }

    return (
        <SafeAreaView style={RegisterUser.reguse_cont_background}>


            {
                /*
                    <Modal
                animationType="slide"
                transparent={true}
                visible={medicModal}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setMedicModal(!medicModal);
                }}>
                       
                <SearchBar
                placeholder="Seleccione su medico"
                onChangeText={(crSearch)=>setMedicSearch(crSearch)}
                value={medicSearch}>
                </SearchBar>

                {medics.map((medic)=>{
                    if(medic.startsWith(medicSearch)){
                        <Pressable>{medic}</Pressable>
                    }
                })}
                
                </Modal>
                */
            }

            <ScrollView  contentContainerStyle={RegisterUser.scroll} >
                

               
                    <ModalTest
                    isVisible={medicModal}
                    setModalVisible={setModalVisible}>
                    </ModalTest>
                
                

                <View style={RegisterUser.reguse_cont_cont}>
                    <View style={RegisterUser.reguse_top}>
                        <Image source={require("../../img/ic_medic.png")}/>
                        <Text style={RegisterUser.reguse_text_top}>   DATOS HOSPITALARIOS</Text>
                    </View>
                    <Image style={RegisterUser.reguse_top_img} source={require("../../img/register_deco.png")}/>
                    
                    <View style={RegisterUser.reguse_cont_regusein_inputs}>
                            <View>
                                <Text style={RegisterUser.reguse_text_upinput}>Medico</Text>
                                <View style={RegisterUser.reguse_picker}>
                                    <Button style={{width:300, height:20}} onPress={() => setModalVisible(true)} title={'Medico'}></Button>
                                </View>
                            </View>
                            <View style={{marginTop: 25}}>
                                <Text style={RegisterUser.reguse_text_upinput}>Lugar</Text>
                                <View style={RegisterUser.reguse_picker}>
                                </View>
                                
                            </View>
                            <View style={{marginTop: 25}}>
                                <Text style={RegisterUser.reguse_text_upinput}>Etnia</Text>
                                <View style={RegisterUser.reguse_picker}>
                                    <Picker  dropdownIconColor={"#AAAAAA"}
                                    selectedValue={etnia}
                                    onValueChange={(itemValue, itemIndex) =>
                                        setEtnia(itemValue)
                                    }>
                                        <Picker.Item style={{color:"red"}} label="Seleccionar lugar" value={"No Asignado"} />
                                        <Picker.Item label="Blanco" value={"blanco"} />
                                    </Picker>
                                </View>
                                
                            </View>
                            <View style={{marginTop: 25}}>
                                <Text style={RegisterUser.reguse_text_upinput}>Id de paciente</Text>
                                <TextInput onChangeText={setId} value={id} maxLength={10} placeholder="Ingrese su ID de paciente" placeholderTextColor="#c4c4c4" style={RegisterUser.reguse_textInput }></TextInput>
                            </View>
                            <ButtonCustomeOrange title={"Continuar"} handleFunction={handleSwitchToRegisterMedic} marginT={{marginTop: 50}}/>
                    
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const mapDispatchToProps = {
    setMedicalInformationAction
}

export default connect(null,mapDispatchToProps)(RegisterMedic)

const RegisterUser = StyleSheet.create({
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
        marginTop: 6,
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
    reguse_btn_medic:{
        backgroundColor: "#E3E3E3",
        width:300,
        height:50,
        padding: 10,
        borderRadius: 10,
        justifyContent:'center',
        alignContent: 'center', 
    },
})