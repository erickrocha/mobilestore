import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Divider } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from 'react-redux'
import Address from './Address'
import ListItem from './ListItem'
import Payment from './Payment'
import Promotion from './Promotion'
import SubTotal from './SubTotal'
import * as handler from '../../redux/cart/index'

const Checkout = (props) => {
    const cart = useSelector((state) => state.cart)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(handler.get())
    }, [])

    return (
        <SafeAreaView>
            <ScrollView>
                <Address />
                <Divider />
                <ListItem items={cart.items} />
                <Divider />
                <SubTotal cart={cart} />
                <Divider />
                <Payment />
            </ScrollView>
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
