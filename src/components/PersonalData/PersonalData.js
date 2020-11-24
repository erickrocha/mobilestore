import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Title from '../Title'

const PersonalData = (props) => {
    const { title, person } = props

    return (
        <View style={styles.root}>
            <Title title={title} />
            <Text style={styles.info}>{person?.name}</Text>
            <Text style={styles.info}>{person?.socialSecurity}</Text>
            <Text style={styles.info}>{person?.phone}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        padding: 5,
    },
    info: {
        fontSize: 18,
        padding: 2,
    },
})

export default PersonalData
