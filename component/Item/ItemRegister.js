import React from 'react'
import {Pressable,Text,StyleSheet} from 'react-native'
import {connect} from 'react-redux' 
import {setSmokeInformationAction,setDbtInformationAction,setDbtOptionAction} from '../../reduxStore/actions/registerAction'

const ItemRegister = ({item,type,nextScreen,switchSwiper,setSmokeInformationAction,setDbtInformationAction,setDbtOptionAction}) => {

    const saveInformation = (item) =>{
        if(type=='smoke'){
            setSmokeInformationAction(item.item=="No"?0:item.item=="Fumaba"?1:2)
            nextScreen()
        }
        else if(type=='diabetic'){
            setDbtInformationAction(item.item=="No"?false:true)
            nextScreen()
        }
        else{
            setDbtOptionAction(item.item)
            nextScreen()
        }
    }

    return (
        switchSwiper ?(
        <Pressable style={ItemRegisterStyle.ireg_back} onPress={()=>saveInformation({item}) , switchSwiper}>
            <Text style={ItemRegisterStyle.ireg_text}>{item}</Text>
        </Pressable>):(
        <Pressable style={ItemRegisterStyle.ireg_back} onPress={()=>saveInformation({item})}>
            <Text style={ItemRegisterStyle.ireg_text}>{item}</Text>
        </Pressable>)
    )
}

const mapDispatchToProps = {
    setSmokeInformationAction,
    setDbtInformationAction,
    setDbtOptionAction
}

export default connect(null,mapDispatchToProps)(ItemRegister)

const ItemRegisterStyle = StyleSheet.create({
    ireg_back:{
        width:300,
        height:60,
        backgroundColor: "#E3E3E3", 
        borderRadius: 12,
        marginTop: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    ireg_text:{
        fontSize: 19,
        color:"#434343",
        textAlign:'center'
    }
})
