import React,{useState,useEffect,useRef,useContext} from 'react'
import { SafeAreaView } from 'react-native'
import  Swiper  from "react-native-swiper";
import {RegisterElements} from './RegisterElements.js'
import {RegisterElementsMore} from './RegisterElementsMore.js'
import {RegisterIllustrator} from './RegisterIllustrator.js'


export const Register_Swiper = ({navigation}) => {

    var index =0;
 
    const [smoke,setSmoke] = useState(false)
    const [dbt,setDbt] = useState(false)
    const [smokeR,setSmokeR] = useState("")
    const [dbtmed, setDbtmed] = useState("")
    const [fin,setFin] = useState(false)

    const [hip,setHip] = useState(false)

    const swiper = React.useRef(null);

    const handleSwitchScreenSMK = (value) =>{
        setSmoke(value)
        swiper.current.scrollBy(++index,true);
    }
    const handleSwitchScreenDBT = (value) =>{
        setDbt(value)
        swiper.current.scrollBy(++index,true);
    }

    const handleDBTMed = (value) =>{
        setDbtmed(value)
        swiper.current.scrollBy(++index,true);
    }

    const switchToHome = () =>{
        navigation.navigate("home")
    }

    return (
            <Swiper ref={swiper}  loop={false} activeDotColor={"#B189F8"}>
                
                <RegisterElements key="1"  type={"smoke"} handlePress={handleSwitchScreenSMK}/>
                    {
                        smoke && <RegisterElementsMore type={"smoke"} handlePress={setSmokeR}/>
                    }
                <RegisterElements type={"diabetic"} handlePress={handleSwitchScreenDBT}/>
                    {
                        dbt && <RegisterElementsMore type={"diabetic"} handlePress={handleDBTMed}/>
                    }
                <RegisterElementsMore type={"medicamento"}/>

                <RegisterIllustrator typeI={"a"} switchScreen={switchToHome}/>
            </Swiper>
            
        
    )
}
