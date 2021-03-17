import React,{useState,useEffect} from 'react'
import { SafeAreaView,View,TextInput,Text,StyleSheet } from 'react-native'
import { RadioButton } from 'react-native-paper';


export const ItemRegisterRadio = ({title,handlePress,key}) => {
    const [checked,setChecked] = useState(false)

    useEffect(()=>{
        handlePress(checked,key)
    },[checked])
    
    return (
       
        <SafeAreaView style={{marginTop: 40,}}>
            
            <Text style={IRIStyle.iris_text}>{title}</Text>
            <View style={IRIStyle.iris_cont_radio}>
                <View>
                    <Text>Si</Text>
                    <RadioButton
                    value="Si"
                    color={"#B189F8"}
                    status={ checked ? 'checked' : 'unchecked' }
                    onPress={() => setChecked(true)}/>
                </View>
                
                <View>
                    <Text>No</Text>
                    <RadioButton
                    color={"#B189F8"}
                value="No"
                status={ !checked ? 'checked' : 'unchecked' }
                onPress={() => setChecked(false)}/>
                </View>
                
            </View>
           
        </SafeAreaView>
    )
}


const IRIStyle = StyleSheet.create({
    iris_cont_radio:{
        flexDirection: 'row',
        justifyContent: 'center',
    },
    iris_text:{
        fontSize: 23,
        textAlign:"center",
        marginBottom:10,
        fontWeight: 'bold',
        color:"#434343"
    }
})
