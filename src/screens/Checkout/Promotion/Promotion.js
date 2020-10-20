import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Title from '../../../components/Title'

const Promotion = (props) => {
    return (
        <View style={styles.root}>
            <Title title="Promoção" />
            <View style={styles.promotion}>
                <Text>Promotion code is here</Text>
            </View>
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
    promotion: {
        backgroundColor: 'grey',
        height: 50,
    },
})

export default Promotion
