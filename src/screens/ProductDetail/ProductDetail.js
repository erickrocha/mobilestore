import React, { useState } from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler'
import { Card, Divider, Paragraph, Title } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from 'react-redux'
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
                <Card>
                    <Card.Cover source={{ uri: product.showcase }} />
                    <Card.Title title={product.name} />
                    <Card.Content>
                        <Paragraph style={styles.description}>
                            {product.description}
                        </Paragraph>
                    </Card.Content>
                    <Divider />
                    <Card.Actions>
                        <InputNumber
                            quantity={quantity}
                            onAdd={handleAdd}
                            onSubtract={handleSubtract}
                        />
                    </Card.Actions>
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
    description: {
        fontSize: 19,
        textAlign: 'justify',
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
