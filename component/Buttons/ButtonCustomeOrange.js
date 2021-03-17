import React from 'react'
import { TouchableOpacity,Text,StyleSheet,Pressable } from "react-native";

export const ButtonCustomeOrange = ({title,handleFunction,marginT}) => {
    return (
        <Pressable onPress={handleFunction} style={[marginT ? marginT : stylesbtn.appbtn_margin,stylesbtn.appButtonContainer]}>
            <Text style={stylesbtn.appButtonText}>{title}</Text>
        </Pressable>
    )
}

const stylesbtn = StyleSheet.create({
  appButtonContainer: {
    height:50,
    backgroundColor: "#FFB13A",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appbtn_margin:{
    marginTop: 50,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});