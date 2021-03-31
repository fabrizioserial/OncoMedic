import React from 'react'
import {Image , Pressable, StyleSheet} from 'react-native'
import { AvatarImage } from '../AvatarImage'

export const ButtonAvatarSelection = ({handleFunction, avatarImage}) => {
    return (
        <Pressable onPress={handleFunction} style={AvatarButtonStyle.avb_container}>
            <AvatarImage index={avatarImage} size={'medium'}></AvatarImage>
        </Pressable>
    )
}

const AvatarButtonStyle= StyleSheet.create({
    avb_container:{
        height: 80,
        width:80,
        marginBottom:60,
    }
})
