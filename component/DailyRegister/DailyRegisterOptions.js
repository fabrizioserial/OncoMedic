import React,{useState,useEffect,useRef,useContex} from 'react'
import { SafeAreaView,Text,Image,View,StyleSheet,Dimensions,ScrollView } from 'react-native'
import {ItemDROption} from '../Item/ItemDROption.js'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

const {width} = Dimensions.get('window')

export const DailyRegisterOptions = ({type,imageProp,switchSwiper,handleValue,index}) => {
    const [textType,setTextype] = useState(type)
    const [checked,setChecked] = useState(false)
    const [status,setStatus] = useState("")

    const swipeHandler= () =>{
        switchSwiper(index)
    }

    const inmap = [{label: '1', value: 1 },
    {label: '2', value: 2 },
    {label: '3', value: 3 },
    {label: '4', value: 4},
    {label: '5', value: 5 },
    {label: '6', value: 6 },
    {label: '7', value: 7 },
    {label: '8', value: 8 },
    {label: '9', value: 9 },
    {label: '10', value: 10 }]

    useEffect(() => {
        if(status != ""){
            handleValue(status)
            swipeHandler(index)
        }
    }, [status])

    return (
        <SafeAreaView style={DailyRegisterEStyle.dairegele_const_back}>
            <ScrollView style={DailyRegisterEStyle.dairegele_scroll}>
                <View style={DailyRegisterEStyle.dairegele_cont}>
                    <View style={DailyRegisterEStyle.dairegele_cont_top}>
                        <Image  source={imageProp}/>
                        <Text style={DailyRegisterEStyle.dairegele_cont_top_text}>{textType}</Text>
                    </View>
                    <Image style={DailyRegisterEStyle.dairegele_deco_top} source={require("../../img/day_deco.png")}/>
                </View>
                <View style={DailyRegisterEStyle.dairegele_itemcont}> 
                    {
                        <View style={DailyRegisterEStyle.radOption}>
                            <RadioForm
                            radio_props={inmap}
                            initial={0}
                            formHorizontal={true}
                            labelHorizontal={false}
                            buttonColor={"#FFB13A"}
                            buttonSize={15}
                            animation={true}
                            onPress={(value) => {setStatus(value)}}
                            />
                        </View>
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
const DailyRegisterEStyle = StyleSheet.create({
    radOption:{
        flexDirection: 'row',
        marginBottom: 60
    },
    dairegele_itemcont:{
        flex: 5,
        width,
        minHeight: 350,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dairegele_const_back:{
    
        width,
        height:"100%",
        backgroundColor: "white",
    },
    dairegele_scroll:{
        width,
        flexGrow: 1,
        minHeight: "100%",    
        flexDirection: 'column',
    },
    dairegele_cont:{
        alignItems: 'center',
        flex:1,
    },
    dairegele_cont_top:{
        paddingTop: 70,
        paddingBottom: 50,
        backgroundColor: "#FFB13A",
        width,
        flexDirection: 'column',
        alignItems: 'center',
    },
    dairegele_deco_top:{
        width,
    },
    dairegele_cont_top_text:{
        maxWidth: 250,
        marginTop:30,
        fontSize: 25,
        color:"white",
        fontWeight: 'bold',
        textAlign:"center",

    }
})