import React,{useState,useEffect,useContext} from 'react'
import { SafeAreaView,View,TextInput,Text,StyleSheet } from 'react-native'
import { RadioButton } from 'react-native-paper';


export const ItemDROption = ({title,status,onChange}) => {

    return (
        <SafeAreaView >
            <View style={IRIStyle.iris_cont_radio}>
                <View style={IRIStyle.iris_cont_items}>
                    <Text>{title}</Text>
                    <RadioButton
                    value={title}
                    color={"#FFB13A"}
                    status={ status ? 'checked' : 'unchecked' }
                    onPress={() => onChange(title)}/>
                </View>
            </View>
        </SafeAreaView>
    )
}


const IRIStyle = StyleSheet.create({
    iris_cont_items:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    iris_cont_radio:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iris_text:{
        fontSize: 23,
        textAlign:"center",
        marginBottom:10,
        
        fontWeight: 'bold',
        color:"#434343"
    }
})
