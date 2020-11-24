import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Title from '../Title'

const ListItem = (props) => {
    const { items, title } = props

    return (
        <View style={styles.root}>
            <Title title={title} />
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
        padding: 5,
    },
    title: {
        flexGrow: 1,
        flexDirection: 'row',
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
