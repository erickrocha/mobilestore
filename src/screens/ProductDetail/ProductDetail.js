import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Card } from 'react-native-elements'
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch } from 'react-redux'
import { InputNumber } from '../../components'
import * as handler from '../../redux/cart/index'

const ProductDetail = ({ route, navigation }) => {
    const { product } = route.params
    const [hidden, setHidden] = useState(true)
    const [amount, setAmount] = useState(product.priceInCents)
    const [quantity, setQuantity] = useState(1)

    const handleAdd = () => {
        setAmount(amount + product.priceInCents)
        setQuantity(quantity + 1)
    }

    const handleSubtract = () => {
        setAmount(amount - product.priceInCents)
        setQuantity(quantity - 1)
    }

    const dispatch = useDispatch()

    const addItem = () => {
        const cartData = { [product.id]: quantity }
        dispatch(handler.addItem(cartData))
    }

    return (
        <SafeAreaView style={styles.root}>
            <ScrollView
                contentContainerStyle={styles.children}
                style={styles.root}
            >
                <Card containerStyle={styles.card}>
                    <Card.Title style={styles.title}>{product.name}</Card.Title>
                    <Card.Divider />
                    <Card.Image source={{ uri: product.showcase }} />
                    <Text style={styles.description}>
                        {product.description}
                    </Text>
                    <Card.Divider />
                    <View style={styles.actions}>
                        <InputNumber
                            quantity={quantity}
                            onAdd={handleAdd}
                            onSubtract={handleSubtract}
                        />
                    </View>
                </Card>
            </ScrollView>
            <View style={styles.footer}>
                <TouchableHighlight
                    activeOpacity={0.6}
                    underlayColor="#DDDDDD"
                    onPress={() => addItem()}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>
                        Add {quantity} to cart - R$ {(amount / 100).toFixed(2)}
                    </Text>
                </TouchableHighlight>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    root: {
        flexGrow: 1,
    },
    children: {
        justifyContent: 'space-between',
    },
    card: {
        borderRadius: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    description: {
        padding: 10,
        fontSize: 20,
        textAlign: 'justify',
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
    },
    footer: {
        padding: 20,
        borderTopWidth: 1,
    },
    button: {
        backgroundColor: 'darkgreen',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: 'snow',
        fontSize: 25,
        padding: 15,
    },
})

export default ProductDetail
