import React,{useState,useEffect,useRef,useContex} from 'react'
import { SafeAreaView,Text,Image,View,StyleSheet,Dimensions,ScrollView } from 'react-native'
import ItemDRButtons from '../Item/ItemDRButton'


const {width} = Dimensions.get('window')

export const DailyRegisterButtons = ({type,imageProp,switchSwiper,handleValue,index}) => {

    const option = type=="¿APETITO?" ? ["Menos de lo normal","Normal","Mas de lo normal"] : type == "¿HIDRATACION?"? ["Menos de 1L","Entre 1L y 2L","Mas de 2L"]:type=="ACTIVIDAD FISICA"?
    ["No","Menos de 30 min","Entre 30 y 60 min","Mas de 60 min"]:["No. No vi a nadie","Si. Limitado a pocas interacciones interpersonales","Si. Vi a conocidos y amigos mas de una hora","Si. Vi a conocidos y amigos mas de 2 horas"]

    const swipeHandler= () =>{
        console.log('carlos' + index)
        switchSwiper(index)
    }

    return (
        <SafeAreaView style={DailyRegisterEStyle.dairegele_const_back}>
            <ScrollView style={DailyRegisterEStyle.dairegele_scroll}>
                <View style={DailyRegisterEStyle.dairegele_cont}>
                    <View style={DailyRegisterEStyle.dairegele_cont_top}>
                        <Image  source={imageProp}/>
                        <Text style={DailyRegisterEStyle.dairegele_cont_top_text}>{type}</Text>
                    </View>
                </View>
                <View style={DailyRegisterEStyle.dairegele_itemcont}> 
                    {
                        option.map((item,index) => <ItemDRButtons item={item} key={index} switchSwiper={swipeHandler} handlePress={handleValue} index={index}/>)
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
