import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import Permission from '../../hoc/Permission'
import { useSelector } from 'react-redux'
import { PERMISSIONS } from 'react-native-permissions'
import { calculateCordinates } from '../../library/utility'

const Address = (props) => {
    const { address } = props
    const region = calculateCordinates(address)

    return (
        <Permission permission={PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION}>
            <MapView
                style={styles.root}
                provider={PROVIDER_GOOGLE}
                showsUserLocation={true}
                region={region}
            >
                <MapView.Marker
                    coordinate={{
                        latitude: region.latitude,
                        longitude: region.longitude,
                    }}
                />
            </MapView>
            <View style={styles.address}>
                <Text style={styles.addressLabel}>
                    {address?.formatted_address}
                </Text>
            </View>
        </Permission>
    )
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: 250,
    },
    address: {
        paddingBottom: 5,
        paddingTop: 5,
        paddingLeft: 2,
        paddingRight: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    addressLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})

export default Address
