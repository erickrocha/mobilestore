import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import { TouchableHighlight } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { Card } from 'react-native-elements'

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />

const Product = (props) => {
    const { product } = props

    const navigation = useNavigation()

    const goToDetail = () => {
        navigation.navigate('Detail', { product: product })
    }

    return (
        <Card containerStyle={styles.root}>
            <Card.Image source={{ uri: product.showcase }} />
            <Card.Title style={styles.title}>{product.name}</Card.Title>
            <Text style={styles.description}>{product.description}</Text>
            <Card.Divider />
            <View style={styles.footer}>
                <Text style={styles.price}>
                    {(product.priceInCents / 100).toFixed(2)}
                </Text>
                <TouchableHighlight
                    activeOpacity={0.6}
                    underlayColor="#DDDDDD"
                    onPress={() => goToDetail()}
                >
                    <View style={styles.addcart}>
                        <FontAwesomeIcon
                            icon={['fa', 'cart-plus']}
                            style={styles.cart}
                            size={24}
                        />
                    </View>
                </TouchableHighlight>
            </View>
        </Card>
    )
}

const styles = StyleSheet.create({
    root: {
        marginBottom: 10,
        borderRadius: 10,
    },
    price: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    addcart: {
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'green',
        borderRadius: 5,
        borderWidth: 1,
        width: 100,
    },
    cart: {
        color: 'green',
    },
    title: {
        textAlign: 'left',
        fontSize: 20,
        fontWeight: 'bold',
    },
    description: {
        padding: 5,
        textAlign: 'justify',
        fontSize: 17,
    },
})

export default Product
