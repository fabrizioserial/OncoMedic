import React,{useState} from 'react'
import DropDownPicker from 'react-native-dropdown-picker'
import {StyleSheet} from 'react-native'
import { View,TextInput } from 'react-native'

export const SearchPicker = ({items, defaultValue, setValue, placeHolder}) => {



    return(
        <DropDownPicker
            items={items}
            defaultValue={defaultValue}
            style={defaultValue!=null? CustomPickerStyle.picked : CustomPickerStyle.not_picked}
            itemStyle={{justifyContent: 'flex-start'}}
            containerStyle={CustomPickerStyle.container_style}
            dropDownStyle={{backgroundColor: 'white'}}
            onChangeItem={item =>{
                setValue(item);
            }}
            placeholderStyle={defaultValue==null? CustomPickerStyle.place_holder_style_not_picked : CustomPickerStyle.place_holder_style_picked}
            searchable={true}
            searchablePlaceholder={placeHolder}
            searchablePlaceholderTextColor='#AAAAAA'
            searchableError={()=><Text>Not Found</Text>}
        >
        </DropDownPicker>
    )
}

const CustomPickerStyle= StyleSheet.create({

    place_holder_style_picked:{
        color:'black',
        fontSize:17,
    },

    place_holder_style_not_picked:{
        color:'#AAAAAA',fontSize:17
    },

    container_style:{
        width:'80%',
        height:50,
    },

    not_picked:{
        padding:0,
        borderTopLeftRadius:10,
        borderTopRightRadius:10, 
        borderBottomLeftRadius:10, 
        borderBottomRightRadius:10,
        height:50,
        backgroundColor: '#fafafa'
    },

    picked:{
        padding:0,
        borderTopLeftRadius:10,
        borderTopRightRadius:10, 
        borderBottomLeftRadius:10, 
        borderBottomRightRadius:10,
        height:50,
        backgroundColor: "#E3E3E3"
    }

})
