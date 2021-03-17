import React,{useContext,useState,useEffect} from 'react'
import {  } from 'react-native';

export const ContextElement = React.createContext()

export const ContextRegister = (props) => {

    const [hip,setHip] = useState(false)
    const [epoc,setEpoc] = useState(false)
    const [acv,setAcv] = useState(false)
    const [inf,setInf] = useState(false)


    useEffect(() => {
        console.log(hip)
    }, [hip])

    return ( 
        <ContextElement.Provider value={{hipElement:[hip,setHip],epocElement:[epoc,setEpoc],acvElement:[acv,setAcv],infElement:[inf,setInf]}}>
            {
                props.children
            }
        </ContextElement.Provider>   
    )
}
