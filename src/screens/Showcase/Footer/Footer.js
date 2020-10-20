import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'

const Footer = (props) => {
    const { totalInCents, totalItemsInGrams } = props

    const navigation = useNavigation()

    return (
        <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => navigation.navigate('Checkout')}
            style={styles.root}
        >
            <View style={styles.button}>
                <Text style={styles.buttonText}>
                    R$ {(totalInCents / 100).toFixed(2)}
                </Text>
                <Text style={styles.buttonText}>View Cart</Text>
                <Text style={styles.quantity}>{totalItemsInGrams}</Text>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: 'darkgreen',
        padding: 20,
        borderTopWidth: 1,
        flexGrow: 1,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'space-between',
    },
    buttonText: {
        color: 'snow',
        fontSize: 25,
        flexGrow: 1,
    },
    quantity: {
        color: 'snow',
        fontSize: 25,
        flexGrow: 1,
        textAlign: 'right',
    },
})

export default Footer
