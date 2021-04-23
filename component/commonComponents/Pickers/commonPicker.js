import React from 'react'
import DropDownPicker from 'react-native-dropdown-picker'
import {StyleSheet} from 'react-native'

export const CustomPicker = ({items, defaultValue, setValue, placeHolder}) => {
    return(
        <DropDownPicker
            items={items}
            defaultValue={defaultValue}
            style={defaultValue!=null?CustomPickerStyle.not_picked : CustomPickerStyle.picked}
            itemStyle={{ justifyContent: 'flex-start'}}
            containerStyle={CustomPickerStyle.container_style}
            dropDownStyle={{backgroundColor: '#fafafa'}}
            onChangeItem={(item) => setValue(item.value)}
            placeholder={placeHolder}
            placeholderStyle={defaultValue==null?CustomPickerStyle.place_holder_style_not_picked : CustomPickerStyle.place_holder_style_picked}>
        </DropDownPicker>
    )
}

const CustomPickerStyle= StyleSheet.create({

    place_holder_style_picked:{
        color:'black',
        fontSize:17
    },

    place_holder_style_not_picked:{
        color:'#AAAAAA',fontSize:17
    },

    container_style:{
        borderTopLeftRadius:10,
        borderTopRightRadius:10, 
        borderBottomLeftRadius:10, 
        borderBottomRightRadius:10,
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

