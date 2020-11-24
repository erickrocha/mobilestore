import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React from 'react'
import { Text, View } from 'react-native'
import { useSelector } from 'react-redux'

const Payment = (props) => {
    const { cart } = props
    const payment = cart.payment
    const availables = useSelector((state) => state.app.payments)
    const selected = availables.filter(
        (currrent) => currrent.method === payment.method
    )

    return (
        <View>
            <FontAwesomeIcon
                icon={selected?.icon ? selected.icon : ['fa', 'money-bill']}
                size={36}
            />
            <Text>{payment.label}</Text>
        </View>
    )
}

export default Payment
