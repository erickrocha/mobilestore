import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Title = (props) => {
    const { title } = props

    return (
        <View style={styles.root}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        paddingLeft: 5,
        paddingRight: 5,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        borderStyle: 'solid',
        flexGrow: 1,
        flexDirection: 'row',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'roboto',
    },
})

export default Title
