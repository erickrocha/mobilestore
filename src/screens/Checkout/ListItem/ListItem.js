import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Title from '../../../components/Title'

const ListItem = (props) => {
    const { items } = props

    return (
        <View style={styles.root}>
            <Title title="Seu pedido" />
            {items.map((item) => (
                <View key={item.id} style={styles.item}>
                    <Text>{item.quantityInGrams}X</Text>
                    <Text>{item.product}</Text>
                    <Text>{(item.priceInCents / 100).toFixed(2)}</Text>
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        padding: 15,
        flex: 1,
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        flexDirection: 'row',
    },
    titleLabel: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'roboto',
    },
    item: {
        padding: 10,
        flexGrow: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
})

export default ListItem
