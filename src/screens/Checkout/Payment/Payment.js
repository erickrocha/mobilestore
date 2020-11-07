import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Title from '../../../components/Title'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const Payment = (props) => {
    const { availabes, payment, setPayment } = props
    const navigation = useNavigation()

    const handleSelectted = (method) => {
        const seledted = availabes.find(
            (available) => available.method === method
        )
        setPayment(seledted)
    }

    useEffect(() => {
        handleSelectted('PIX')
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
                            payment.icon ? payment.icon : ['fa', 'money-bill']
                        }
                        style={styles.money}
                        size={36}
                    />
                    <Text style={styles.label}>{payment.label}</Text>
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
