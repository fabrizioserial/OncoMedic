import React,{useState,useEffect,useRef,useContext} from 'react'
import { SafeAreaView } from 'react-native'
import  Swiper  from "react-native-swiper";
import {RegisterElements} from './RegisterElements.js'
import RegisterElementsMore from './RegisterElementsMore.js'
import RegisterIllustrator from './RegisterIllustrator.js'
import { connect } from 'react-redux';


const Register_Swiper = ({navigation,smokeState,dbtState}) => {

    var index =0;
 
    const swiper = React.useRef(null);

    const nextScreen = (value) =>{
        swiper.current.scrollBy(++index,true);
    }

    const switchToHome = () =>{
        navigation.navigate("home")
    }

    useEffect(()=>{
        smokeState && nextScreen()

    },[smokeState])

    useEffect(()=>{
        dbtState && nextScreen()

    },[dbtState])
    

    return (
            <Swiper ref={swiper}  loop={false} activeDotColor={"#B189F8"}>
                
                <RegisterElements key="1"  type={"smoke"}/>
                    {
                        smokeState != 0 && <RegisterElementsMore type={"smoke"}/>
                    }
                <RegisterElements type={"diabetic"}/>
                    {
                        dbtState && <RegisterElementsMore type={"diabetic_more"}/>
                    }
                <RegisterElementsMore type={"medicamento"}/>

                <RegisterIllustrator typeI={"a"} switchScreen={switchToHome}/>
            </Swiper>            
    )
}
const mapStateToProps = (state) => {
    return {
        smokeState: state.user_data.smoke.smoke,
        dbtState: state.user_data.dbt.dbt,
    }
}

export default connect(mapStateToProps)(Register_Swiper)

