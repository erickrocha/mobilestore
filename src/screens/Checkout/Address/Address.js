import React from 'react'
import { StyleSheet, View } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

const Address = (props) => {
    return (
        <MapView
            style={styles.root}
            provider={PROVIDER_GOOGLE}
            initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
        />
    )
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: 250,
    },
})

export default Address
