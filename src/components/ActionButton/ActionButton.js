import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'

const ActionButton = (props) => {
    const { onExecute, label } = props

    return (
        <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => onExecute()}
            style={styles.root}
        >
            <View style={styles.buttonContainer}>
                <Text style={styles.label}>{label}</Text>
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
        margin: 5,
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
})

export default ActionButton
