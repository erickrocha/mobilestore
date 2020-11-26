import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'

const Payment = (props) => {
    const { cart } = props
    const payment = cart.payment
    const availables = useSelector((state) => state.app.payments)
    const selected = availables.find(
        (currrent) => currrent.method === payment.method
    )

    return (
        <View style={styles.root}>
            <FontAwesomeIcon
                icon={selected?.icon ? selected.icon : ['fa', 'money-bill']}
                size={36}
                style={styles.card}
            />
            <Text style={styles.label}>{payment.label}</Text>
            <FontAwesomeIcon
                icon={['fa', 'check-double']}
                size={24}
                style={styles.check}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    card: {
        color: 'tan',
    },
    label: {
        fontSize: 25,
    },
    check: {
        color: 'royalblue',
    },
})

export default Payment
