import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import * as handler from '../../redux/showcase/index'
import * as cartHandler from '../../redux/cart/index'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Section } from '../../components'
import Footer from './Footer'
import * as permissionHandler from '../../redux/permission/index'

const Showcase = ({ navigation }) => {
    const sections = useSelector((state) => state.showcase.sections)

    const cart = useSelector((state) => state.cart)

    const renderItem = ({ item }) => <Section section={item} />

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(permissionHandler.getAllPermissionGranted())
    }, [])

    useEffect(() => {
        dispatch(handler.get())
    }, [])

    useEffect(() => {
        dispatch(cartHandler.get())
    }, [])

    const footer =
        cart && cart.items && cart.items.length > 0 ? (
            <Footer
                totalInCents={cart.totalCartInCents}
                totalItemsInGrams={cart.totalItems}
            />
        ) : null

    return (
        <SafeAreaView style={styles.root}>
            <FlatList
                data={sections}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
            {footer}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
})

export default Showcase
