import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { Text } from 'react-native'
import { StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import { useSelector } from 'react-redux'
import { Waiting } from '../../components'

const Approval = ({ navigation }) => {
    const waiting = useSelector((state) => state.order.loading)
    const order = useSelector((state) => state.order.order)
    const availables = useSelector((state) => state.app.payments)
    const selected = availables.find(
        (currrent) => currrent.method === order?.paymentMethod
    )

    const goToHome = () => {
        navigation.navigate('Home')
    }

    if (waiting) {
        return <Waiting />
    } else {
        return (
            <View style={styles.root}>
                <View
                    style={{
                        flexDirection: 'column',
                        alignItems: 'center',
                        flex: 8,
                        alignSelf: 'flex-start',
                    }}
                >
                    <Text style={styles.title}>Autorizado!</Text>
                    <View>
                        <FontAwesomeIcon
                            icon={['fa', 'check-circle']}
                            size={200}
                            style={styles.success}
                        />
                    </View>
                    <Text>Obrigado pelo seu pedido!</Text>
                    <View style={styles.payment}>
                        <FontAwesomeIcon
                            icon={
                                selected?.icon
                                    ? selected.icon
                                    : ['fa', 'money-bill']
                            }
                            size={36}
                            style={styles.card}
                        />
                        <Text style={{ margin: 10, fontSize: 25 }}>
                            {order.payment.label}
                        </Text>
                        <Text style={{ fontSize: 25 }}>{`R$ ${(
                            order.cart.finalAmountInCents / 100
                        ).toFixed(2)}`}</Text>
                    </View>
                    <View style={styles.authorization}>
                        <Text>{`Data: ${order.dateRegister} - Hora: ${order.time}`}</Text>
                        <Text>{`Autorização: ${order.authorization}`}</Text>
                    </View>
                </View>
                <View
                    style={{
                        alignSelf: 'flex-end',
                        flex: 1,
                        flexDirection: 'row',
                    }}
                >
                    <Button
                        title={`Ir para loja`}
                        containerStyle={{ flex: 1 }}
                        titleStyle={{ fontSize: 25 }}
                        onPress={() => goToHome()}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 10,
        padding: 15,
    },
    title: {
        fontSize: 35,
        textTransform: 'capitalize',
    },
    success: {
        marginTop: 15,
        color: 'green',
    },
    card: {
        color: 'tan',
    },
    payment: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    authorization: {
        paddingLeft: 25,
        alignSelf: 'flex-start',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
})

export default Approval
