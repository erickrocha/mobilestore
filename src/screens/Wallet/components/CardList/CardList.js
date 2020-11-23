import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Icon } from 'react-native-elements'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'

const CardList = (props) => {
    const { setPayment } = props
    const navigation = useNavigation()
    const customer = useSelector((state) => state.customer.customer)

    const onSelect = (payment) => {
        setPayment(payment)
    }

    return (
        <View style={styles.root}>
            <Text>Cartão</Text>
            {customer?.payments?.map((payment) => (
                <TouchableHighlight
                    key={payment.id}
                    activeOpacity={0.6}
                    underlayColor="#DDDDDD"
                    onPress={() => onSelect(payment)}
                    style={styles.root}
                >
                    <View style={styles.item}>
                        <Icon
                            type={'font-awesome'}
                            name={'credit-card'}
                            size={32}
                            style={styles.card}
                        />
                        <Text style={styles.label}>{payment.label}</Text>
                    </View>
                </TouchableHighlight>
            ))}
            <Button
                containerStyle={{ alignItems: 'flex-start' }}
                title="Adicionar cartão"
                type="clear"
                onPress={() => navigation.navigate('Card')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        paddingTop: 15,
    },
    card: {
        marginRight: 30,
    },
    item: {
        padding: 15,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'blue',
        borderRadius: 5,
    },
    label: {
        fontSize: 25,
    },
})

export default CardList
