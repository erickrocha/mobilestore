import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Divider, Overlay } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from 'react-redux'
import Address from './Address'
import ListItem from './ListItem'
import Payment from './Payment'
import Promotion from './Promotion'
import SubTotal from './SubTotal'
import * as handler from '../../redux/cart/index'
import OrderButton from './OrderButton'
import Sumary from './Sumary'

const Checkout = (props) => {
    const cart = useSelector((state) => state.cart)
    const [confirm, setConfirm] = useState(false)
    const [payment, setPayment] = useState({})
    const address = useSelector((state) => state.app.address)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(handler.get())
    }, [])

    return (
        <SafeAreaView style={styles.root}>
            <ScrollView>
                <Address />
                <Divider />
                <ListItem items={cart.items} />
                <Divider />
                <SubTotal cart={cart} />
                <Divider />
                <Payment payment={payment} setPayment={setPayment} />
            </ScrollView>
            <OrderButton onConfirm={setConfirm} />
            <Sumary
                isVisible={confirm}
                setVisible={setConfirm}
                cart={cart}
                address={address}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        flexGrow: 1,
    },
})

export default Checkout
