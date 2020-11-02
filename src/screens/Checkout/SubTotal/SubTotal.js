import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Title from '../../../components/Title'

const SubTotal = (props) => {
    const { cart } = props

    return (
        <View style={styles.root}>
            <Title title="Sub total" />
            <View style={styles.row}>
                <Text style={styles.text}>Total items</Text>
                <Text style={styles.value}>
                    {(cart.totalCartInCents / 100).toFixed(2)}
                </Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.text}>Promoção</Text>
                <Text style={styles.value}>0.00</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.text}>Taxa entrega</Text>
                <Text style={styles.value}>
                    {(cart.deliveryFeeInCents / 100).toFixed(2)}
                </Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.text}>Total</Text>
                <Text style={styles.value}>
                    {(cart.finalAmountInCents / 100).toFixed(2)}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        padding: 15,
    },
    row: {
        paddingTop: 5,
        paddingBottom: 5,
        flexGrow: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: {
        fontSize: 17,
        fontWeight: 'bold',
    },
    value: {
        fontSize: 20,
    },
})

export default SubTotal
