import React, { useState } from 'react'
import { Modal, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Divider } from 'react-native-elements'
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import {
    ActionButton,
    ListItem,
    Payment,
    SubTotal,
    Title,
    Waiting,
} from '../../components'
import Address from '../../components/Address'
import PersonalData from '../../components/PersonalData'
import * as handler from '../../redux/order/index'

const Sumary = (props) => {
    const cart = useSelector((state) => state.cart)
    const address = useSelector((state) => state.customer.address)
    const waiting = useSelector((state) => state.order.loading)

    const dispatch = useDispatch()
    const executeOrder = () => {
        dispatch(handler.execute({}))
    }

    return (
        <SafeAreaView style={styles.root}>
            <Waiting waiting={waiting} />
            <ScrollView>
                {/* <PersonalData title="Dados Pessoais" person={customer} /> */}
                <View>
                    <Title title="Endereço de entrega" />
                    <Address address={address} />
                </View>
                <ListItem title="Items do pedido" items={cart.items} />
                <Divider />
                <SubTotal cart={cart} />
                <Divider />
                <Payment cart={cart} />
                <Divider />
                <Text style={styles.termo_uso}>
                    Ao confirmar o pedido, automaticamente você concorda com
                    nossoes termos e uso do serviço de entrega
                </Text>
                <ActionButton
                    label={`Confirmar - R$ ${(
                        cart.finalAmountInCents / 100
                    ).toFixed(2)}`}
                    onExecute={() => executeOrder()}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    root: {
        padding: 5,
        flex: 1,
    },
    termo_uso: {
        padding: 5,
        textAlign: 'justify',
    },
    order: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 5,
        borderColor: 'cornflowerblue',
        borderWidth: 1,
        borderRadius: 5,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    openButton: {
        backgroundColor: '#F194FF',
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
})

export default Sumary
