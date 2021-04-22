import React,{useState,useEffect,useRef,useContex} from 'react'
import { SafeAreaView } from 'react-native'
import  Swiper  from "react-native-swiper";
import {DailyRegisterOptions} from './DailyRegisterOptions.js'
import {DailyRegisterButtons} from './DailyRegisterButtons.js'
import firestore from '@react-native-firebase/firestore';
import { connect } from 'react-redux';
import { Alert } from 'react-native';


const DailyRegister = ({navigation,idR}) => {
    const swiper = React.useRef(null);

    const [id,setId] = useState(idR)
    const [mood,setMood] = useState("");
    const [sad,setSad] = useState("")
    const [hungry,setHungry] = useState('');
    const [hid,setHid] = useState('');
    const [run,setRun] = useState('');
    const [social,setSocial] = useState('');

    useEffect(()=>{
        setId(id)
    },[id])

    useEffect(() =>{
        if(social != ''){
            pushDR()
        }
    },[social])

    const cant_screen = 5;

    const swipeNext = (i) =>{
        console.log('mood ' + mood)
        console.log('sad '+sad)
        console.log('hungry '+hungry)
        console.log('hid '+ hid)
        console.log('run ' + run)
        console.log('social' + social)
        console.log('--------------')

        swiper.current.scrollBy(1)
    }

    const pushDR = () =>{
        const date = new Date()
        const userDocument = firestore()
        .collection('diaryReg')
        .doc(id +'EN'+ date.getDate() +'DE'+ date.getMonth() +'DE'+ date.getFullYear())
        .set({
            date:date,
            id:id,
            mood:mood,
            sad:sad,
            hungry:hungry,
            hid:hid,
            run:run,
            social:social
        })
        .then(
            navigation.navigate('home'))
    }

    return (
        
            <Swiper ref={swiper} loop={false} activeDotColor={"#FFB13A"}>
                <DailyRegisterOptions type={"ESTADO DE ANIMO"} imageProp={require("../../img/ic_child.png")} switchSwiper={swipeNext} handleValue={setMood} index={0}/>
                <DailyRegisterOptions type={"DOLOR"} imageProp={require("../../img/ic_sad.png")} switchSwiper={swipeNext} handleValue={setSad} index={1}/>
                <DailyRegisterButtons type={"¿APETITO?"} imageProp={require("../../img/ic_utensils.png")} switchSwiper={swipeNext} handleValue={setHungry} index={2}/>
                <DailyRegisterButtons type={"¿HIDRATACION?"} imageProp={require("../../img/ic_water.png")} switchSwiper={swipeNext} handleValue={setHid} index={3}/>
                <DailyRegisterButtons type={"ACTIVIDAD FISICA"} imageProp={require("../../img/ic_run.png")} switchSwiper={swipeNext} handleValue={setRun} index={4}/>
                <DailyRegisterButtons type={"ACTIVIDAD SOCIAL"} imageProp={require("../../img/ic_social.png")} switchSwiper={swipeNext} handleValue={setSocial} index={5}/>
            </Swiper>
       
    )
}

const mapStateToProps = (state) => {
    return {
        idR: state.user_data.id
    }
}

export default connect(mapStateToProps)(DailyRegister)
