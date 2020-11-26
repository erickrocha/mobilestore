import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React from 'react'
import { ActivityIndicator, Modal, StyleSheet, Text, View } from 'react-native'

const Waiting = () => {
    return (
        <View style={styles.root}>
            <View style={styles.modalBody}>
                <View>
                    <Text>Aguarde enquanto processamos seu pedido</Text>
                </View>
                <ActivityIndicator
                    style={styles.indicator}
                    size={50}
                    color="blue"
                />
                <View>
                    <Text>Isso pode levar alguns segundos</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalBody: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    indicator: {
        padding: 50,
    },
})

export default Waiting
