import React, {useState,useEffect} from 'react'
import {ToastAndroid,Platform, AlertIOS,
        SafeAreaView,StyleSheet,Dimensions,View,Image,Text,TextInput,ScrollView, Pressable} from 'react-native'
import {Picker} from '@react-native-picker/picker'
import {ButtonCustomeOrange} from '../Buttons/ButtonCustomeOrange.js'
import { Button, Modal } from 'react-native-paper'
import {SearchBar} from 'react-native-elements'
import {ModalTest} from './ModalTest';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DropDownPicker from 'react-native-dropdown-picker'

const {width} = Dimensions.get("window")
 
export const RegisterMedic = ({route,navigation}) => {
    const [etnia,setEtnia] = useState(null)
    const [place,setPlace] = useState (null)
    const [medic,setMedic] = useState(null)
    const [id, setId] = useState("")

    const handleSwitchToRegisterMedic = () =>{
       // id.length > 0 ? etnia != "No Asignado" && medic != 0 && place != "No Asignado" && navigation.navigate("register_ilustrator1") : notifyMessage("Faltan datos")
        const userValues = route.params
        console.log({route})
        navigation.navigate("register_ilustrator1",{type:"continuar"})
    }

    const notifyMessage = (msg) => {
    Platform.OS === 'android' ? ToastAndroid.show(msg, ToastAndroid.SHORT) : AlertIOS.alert(msg)
    }

    const medics=[{label: 'Roberto', value:0,},
    {label: 'Pepe', value:1},
    {label: 'Manuela', value:2}]

    const places=[{label: 'Austral', value:0,}]

    const etnias=[{label: 'Caucasico', value:0}]

    const generateDropPicker=(datas,data,dataSet,placeHolderText)=>{
        return(
            <DropDownPicker
                items={datas}
                defaultValue={data}
                style={data!=null?{...RegisterUser.reguse_drop_down_picker,backgroundColor: '#fafafa'}:{...RegisterUser.reguse_drop_down_picker, backgroundColor: "#E3E3E3",padding:0}}
                itemStyle={{ justifyContent: 'flex-start'}}
                containerStyle={{borderRadius:10}}
                dropDownStyle={{backgroundColor: '#fafafa'}}
                onChangeItem={item => dataSet(item.value)}
                placeholder={placeHolderText}
                placeholderStyle={data==null?{color:'#AAAAAA', fontSize:17}:{color:'black',fontSize:17}}
                zIndex={30000}
                >
            </DropDownPicker> 
        ) 
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
                
                <View style={RegisterUser.reguse_cont_cont}>
                    <View style={RegisterUser.reguse_top}>
                        <Image source={require("../../img/ic_medic.png")}/>
                        <Text style={RegisterUser.reguse_text_top}>   DATOS HOSPITALARIOS</Text>
                    </View>
                    <Image style={RegisterUser.reguse_top_img} source={require("../../img/register_deco.png")}/>
                    
                    <View style={RegisterUser.reguse_cont_regusein_inputs}>
                            <View zIndex={5000}>
                                <Text style={RegisterUser.reguse_text_upinput}>Medico</Text>
                                <View style={RegisterUser.reguse_picker} >
                                    {generateDropPicker(medics,medic,setMedic,'Seleccione su medico')}                              
                                </View>
                            </View>
                            <View style={{marginTop: 25} } zIndex={4000}>
                                <Text style={RegisterUser.reguse_text_upinput}>Lugar</Text>
                                <View style={RegisterUser.reguse_picker} >
                                    {generateDropPicker(places,place,setPlace,'Seleccione su Lugar')}  
                                </View>
                                
                            </View>
                            <View style={{marginTop: 25}} zIndex={3000}>
                                <Text style={RegisterUser.reguse_text_upinput}>Etnia</Text>
                                <View style={RegisterUser.reguse_picker}>
                                    {generateDropPicker(etnias,etnia,setEtnia,'Seleccione su etnia')}
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