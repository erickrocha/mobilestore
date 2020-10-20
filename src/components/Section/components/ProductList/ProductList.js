import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Product } from './components'

const ProductList = (props) => {
    const { items } = props
    return (
        <View style={styles.root}>
            {items.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        padding: 10,
    },
})

export default ProductList
