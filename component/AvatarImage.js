import React from 'react'
import {Image, StyleSheet} from 'react-native'

export const AvatarImage = ({index,size}) => {
    switch(index){
        case 1 : return( <Image style={size=='small'?AvatarStyle.small:size=='medium'?AvatarStyle.medium:AvatarStyle.big} source={require('../img/avatar/avatar1.png')}></Image>)
        case 2 : return( <Image style={size=='small'?AvatarStyle.small:size=='medium'?AvatarStyle.medium:AvatarStyle.big} source={require('../img/avatar/avatar2.png')}></Image>)
        case 3 : return( <Image style={size=='small'?AvatarStyle.small:size=='medium'?AvatarStyle.medium:AvatarStyle.big} source={require('../img/avatar/avatar3.png')}></Image>)
        case 4 : return( <Image style={size=='small'?AvatarStyle.small:size=='medium'?AvatarStyle.medium:AvatarStyle.big} source={require('../img/avatar/avatar4.png')}></Image>)
        case 5 : return( <Image style={size=='small'?AvatarStyle.small:size=='medium'?AvatarStyle.medium:AvatarStyle.big} source={require('../img/avatar/avatar5.png')}></Image>)
        case 6 : return( <Image style={size=='small'?AvatarStyle.small:size=='medium'?AvatarStyle.medium:AvatarStyle.big} source={require('../img/avatar/avatar6.png')}></Image>)
        case 7 : return( <Image style={size=='small'?AvatarStyle.small:size=='medium'?AvatarStyle.medium:AvatarStyle.big} source={require('../img/avatar/avatar7.png')}></Image>)
        case 8 : return( <Image style={size=='small'?AvatarStyle.small:size=='medium'?AvatarStyle.medium:AvatarStyle.big} source={require('../img/avatar/avatar8.png')}></Image>)
        case 9 : return( <Image style={size=='small'?AvatarStyle.small:size=='medium'?AvatarStyle.medium:AvatarStyle.big} source={require('../img/avatar/avatar9.png')}></Image>)
        default: return( <Image style={size=='small'?AvatarStyle.small:size=='medium'?AvatarStyle.medium:AvatarStyle.big} source={require('../img/avatar/avatar1.png')}></Image>)
    }
}

const AvatarStyle= StyleSheet.create({
   small:{
        height:50,
        width:50
   },
   medium:{
        height: 80,
        width: 80,
   },
    big:{
        height:120,
        width:120
    }
})
