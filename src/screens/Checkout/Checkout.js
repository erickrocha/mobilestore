import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Divider } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'
import Address from './Address'
import ListItem from './ListItem'
import Payment from './Payment'
import Promotion from './Promotion'
import SubTotal from './SubTotal'

const Checkout = (props) => {
    const cart = useSelector((state) => state.cart)

    return (
        <SafeAreaView>
            <ScrollView>
                <Address />
                <Divider />
                <ListItem items={cart.items} />
                <Divider />
                <Promotion />
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
