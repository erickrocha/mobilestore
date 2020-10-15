import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {
    Avatar,
    Button,
    Card,
    Title,
    Paragraph,
    Divider,
} from 'react-native-paper'
import { TouchableHighlight } from 'react-native-gesture-handler'

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />

const Product = (props) => {
    const { product, navigation } = props

    return (
        <Card key={product.uuid} style={styles.root}>
            <Card.Title title={product.name} />
            <Card.Cover source={{ uri: product.showcase }} />
            <Card.Content>
                <Paragraph>{product.description}</Paragraph>
            </Card.Content>
            <Divider />
            <Card.Actions style={styles.cardAction}>
                <Text style={styles.price}>
                    {(product.priceInCents / 100).toFixed(2)}
                </Text>
                <TouchableHighlight
                    activeOpacity={0.6}
                    underlayColor="#DDDDDD"
                    onPress={() =>
                        navigation.navigate('Detail', { product: product })
                    }
                >
                    <View style={styles.addcart}>
                        <FontAwesomeIcon
                            icon={['fa', 'cart-plus']}
                            style={styles.cart}
                            size={24}
                        />
                    </View>
                </TouchableHighlight>
            </Card.Actions>
        </Card>
    )
}

const styles = StyleSheet.create({
    root: {
        marginBottom: 10,
    },
    price: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    cardAction: {
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
})

export default Product
