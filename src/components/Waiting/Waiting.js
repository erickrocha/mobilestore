import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React from 'react'
import { ActivityIndicator, Modal, StyleSheet, View } from 'react-native'

const Waiting = (props) => {
    const { waiting } = props

    return (
        <View style={styles.root}>
            <Modal animationType="slide" transparent={true} visible={waiting}>
                <View style={styles.modalBody}>
                    {waiting ? (
                        <ActivityIndicator size={50} color="blue" />
                    ) : (
                        <FontAwesomeIcon
                            icon={['fa', 'check-circle']}
                            size={50}
                        />
                    )}
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
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
})

export default Waiting
