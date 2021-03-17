import React from 'react'
import {Pressable,Text,StyleSheet} from 'react-native'

export const ItemRegister = ({item, handlePress}) => {
    return (
        <Pressable style={ItemRegisterStyle.ireg_back} onPress={()=>handlePress({item})}>
            <Text style={ItemRegisterStyle.ireg_text}>{item}</Text>
        </Pressable>
    )
}

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
        color:"#434343"

    }
})
