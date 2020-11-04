import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Title from '../../../components/Title'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { Input } from 'react-native-elements'

const Payment = (props) => {
    return (
        <View style={styles.root}>
            <Title title="Forma de pagamento" />
            <View>
                <View style={styles.payment}>
                    <FontAwesomeIcon
                        icon={['fa', 'money-bill-alt']}
                        style={styles.money}
                        size={36}
                    />
                    <Text style={styles.label}>Dinheiro</Text>
                    <FontAwesomeIcon
                        icon={['fa', 'exchange-alt']}
                        style={styles.money}
                        size={36}
                    />
                </View>
            </View>
            <Input
                placeholder="Troco para R$"
                leftIcon={{ type: 'font-awesome', name: 'question-circle' }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        padding: 15,
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
