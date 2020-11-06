import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Sumary = (props) => {
    return (
        <View style={styles.root}>
            <Text style={styles.title}>Resumo do pedido</Text>
        </View>
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
