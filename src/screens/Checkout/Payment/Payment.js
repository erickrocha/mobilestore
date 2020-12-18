import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Title from '../../../components/Title'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

const Payment = (props) => {
    const { availabes } = props
    const navigation = useNavigation()
    const [payment, setPayment] = useState({})

    const handleSelected = (method) => {
        const selected = availabes.find(
            (available) => available.method === method
        )
        setPayment(selected)
    }

    const cart = useSelector((state) => state.cart)

    useEffect(() => {
        handleSelected(cart?.payment?.method)
    }, [])

    return (
        <View style={styles.root}>
            <Title title="Forma de pagamento" />
            <TouchableHighlight
                style={styles.buttom}
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                onPress={() => navigation.navigate('Wallet')}
            >
                <View style={styles.payment}>
                    <FontAwesomeIcon
                        icon={
                            payment?.icon ? payment.icon : ['fa', 'money-bill']
                        }
                        style={styles.money}
                        size={36}
                    />
                    <Text style={styles.label}>{payment?.label}</Text>
                    <FontAwesomeIcon
                        icon={['fa', 'exchange-alt']}
                        style={styles.money}
                        size={36}
                    />
                </View>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        padding: 15,
    },
    buttom: {
        marginTop: 30,
        borderRadius: 5,
        borderWidth: 1,
    },
    payment: {
        flexGrow: 1,
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-between',
    },
    money: {
        color: 'green',
    },
    label: {
        fontSize: 20,
    },
})

export default Payment
