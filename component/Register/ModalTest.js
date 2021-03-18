import React, { Component } from 'react'
import{View, StyleSheet} from 'react-native'
import { Modal } from 'react-native-paper'

export class ModalTest extends Component {
    render() {
        {console.log('hola')}
        return (
            
            <Modal
                animationType="slide"
                transparent={true}
                visible={props.isVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    props.setModalVisible(!props.isVisible);
                    }}>
                <View style={ModalStyle.modalView}>
                    <Text> Funca </Text>
                </View>

            </Modal>
        )
    }
    
}

const ModalStyle= StyleSheet.create({
    modalView: {
        height: 300,
        margin: 10,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 20,
        alignItems: "center",
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
})

export default Modal

