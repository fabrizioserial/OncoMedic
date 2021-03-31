import React,{useState,useEffect,useRef,useContex} from 'react'
import { SafeAreaView } from 'react-native'
import  Swiper  from "react-native-swiper";
import {DailyRegisterOptions} from './DailyRegisterOptions.js'
import {DailyRegisterButtons} from './DailyRegisterButtons.js'


export const DailyRegister = ({navigation}) => {
    const swiper = React.useRef(null);
    const [mood,setMood] = useState("");
    const [sad,setSad] = useState("")
    const [hungry,setHungry] = useState('');
    const [hid,setHid] = useState('');
    const [run,setRun] = useState('');
    const [social,setSocial] = useState('');


    const cant_screen = 5;
    var index =0;

    const swipeNext = () =>{
        cant_screen > index ?
        swiper.current.scrollBy(++index,true) : cant_screen < index && navigation.navigate("home")
    }

    return (
        
            <Swiper ref={swiper} loop={false} activeDotColor={"#FFB13A"}>
                <DailyRegisterOptions type={"ESTADO DE ANIMO"} imageProp={require("../../img/ic_child.png")} switchSwiper={swipeNext} handleValue={setMood}/>
                <DailyRegisterOptions type={"DOLOR"} imageProp={require("../../img/ic_sad.png")} switchSwiper={swipeNext} handleValue={setSad}/>
                {/*
                <DailyRegisterButtons type={"¿APETITO?"} imageProp={require("../../img/ic_utensils.png")} switchSwiper={swipeNext} handleValue={setHungry}/>
                <DailyRegisterButtons type={"¿HIDRATACION?"} imageProp={require("../../img/ic_water.png")} switchSwiper={swipeNext} handleValue={setHid}/>
                <DailyRegisterButtons type={"ACTIVIDAD FISICA"} imageProp={require("../../img/ic_run.png")} switchSwiper={swipeNext} handleValue={setRun}/>
                <DailyRegisterButtons type={"ACTIVIDAD SOCIAL"} imageProp={require("../../img/ic_social.png")} switchSwiper={swipeNext} handleValue={setSocial}/>
                */}
            </Swiper>
       
    )
}
