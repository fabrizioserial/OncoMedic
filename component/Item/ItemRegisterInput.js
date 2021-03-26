import React,{useState,useEffect} from 'react'
import { SafeAreaView,View,TextInput,Text,StyleSheet } from 'react-native'

export const ItemRegisterInput = ({item,type,handlePress}) => {

    return (
        <SafeAreaView style={{marginTop: 40,}}>
            <Text style={IRIStyle.iris_text}>{item}</Text>
            <TextInput onChangeText={handlePress} style={IRIStyle.reguse_textInput}/>
        </SafeAreaView>
    )
}



const IRIStyle = StyleSheet.create({
    reguse_textInput:{
        marginTop: 6,
        width:300,
        height:50,
        fontSize: 17,
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#E3E3E3",   
    },
    iris_text:{
        fontSize: 23,
        textAlign:"center",
        marginBottom:10,
        fontWeight: 'bold',
        color:"#434343"
    }
})
