import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Checkout = (props) => {
    return (
        <View style={styles.root}>
            <Text style={styles.label}>Checkout</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        padding: 10,
        backgroundColor: 'yellow',
        flex: 1,
        flexGrow: 1,
    },
})

export default Checkout
