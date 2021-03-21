import React,{useState,useEffect,useRef,useContex} from 'react'
import { SafeAreaView,Text,Image,View,StyleSheet,Dimensions,ScrollView } from 'react-native'
import {ItemDROption} from '../Item/ItemDROption.js'

const {width} = Dimensions.get('window')

export const DailyRegisterOptions = ({type,imageProp,switchSwiper,handleValue}) => {
    const [textType,setTextype] = useState(type)
    const [checked,setChecked] = useState(false)
    const [status,setStatus] = useState("")

    const inmap = ["1","2","3","4","5","6","7","8","9","10"]

    const switchOption = (value) =>{
        setStatus(value)
    }

    useEffect(() => {
        status != "" && switchSwiper(), handleValue(status)
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
                            {inmap.map((item,key)=><ItemDROption title={item} status={status == item ? true:false} onChange={switchOption}/>)}
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
