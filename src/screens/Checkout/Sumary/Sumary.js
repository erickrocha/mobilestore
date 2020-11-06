import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Divider, Overlay } from 'react-native-elements'
import Title from '../../../components/Title'
import ListItem from '../ListItem'
import SubTotal from '../SubTotal'

const Sumary = (props) => {
    const { isVisible, setVisible, cart, address } = props
    const { items } = cart

    return (
        <Overlay
            overlayStyle={styles.root}
            isVisible={isVisible}
            onBackdropPress={() => setVisible(false)}
        >
            <Text style={styles.title}>Resumo do pedido</Text>
        </Overlay>
    )
}

const styles = StyleSheet.create({
    root: {
        padding: 15,
        flex: 0.9,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
})

export default Sumary
