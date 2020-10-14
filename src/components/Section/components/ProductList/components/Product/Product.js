import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper'

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />

const Product = (props) => {
    const { product } = props

    return (
        <Card style={styles.root}>
            <Card.Title title={product.name} />
            <Card.Content>
                <Paragraph>{product.description}</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: product.showcase }} />
            <Card.Actions>
                <Text>{(product.priceInCents / 100).toFixed(2)}</Text>
                <Button>Ok</Button>
            </Card.Actions>
        </Card>
    )
}

const styles = StyleSheet.create({
    root: {
        marginBottom: 10,
    },
})

export default Product
