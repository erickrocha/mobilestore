import React, { useState } from 'react'
import {
    Button,
    Dimensions,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { useDispatch } from 'react-redux'
navigator.geolocation = require('react-native-geolocation-service')
import * as handler from '../../redux/application/index'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { calculateCordinates } from '../../library/utility'

const Address = (props) => {
    const [address, setAddress] = useState({})
    const [region, setRegion] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    })

    const dispatch = useDispatch()

    const handleAddress = () => {
        dispatch(handler.setAddress(address))
    }

    return (
        <SafeAreaView style={styles.root}>
            <View style={{ flex: 1 }}>
                <GooglePlacesAutocomplete
                    placeholder="Procurar"
                    minLength={3}
                    onPress={(data, details = null) => {
                        setAddress(details)
                        setRegion(calculateCordinates(details))
                    }}
                    query={{
                        key: 'AIzaSyC-sQl-srqIw6tYSI9sOyWm300DkWtkQu8',
                        language: 'pt_BR',
                        components: 'country:br',
                    }}
                    fetchDetails={true}
                    currentLocation={true}
                    currentLocationLabel="Localização Atual"
                />
            </View>
            {address.geometry ? (
                <MapView
                    style={{ flex: 1, height: 250 }}
                    provider={PROVIDER_GOOGLE}
                    showsUserLocation={true}
                    region={region}
                >
                    <MapView.Marker
                        coordinate={region}
                        title={'Você está aqui'}
                        draggable
                    />
                </MapView>
            ) : null}
            <View style={styles.addressContainer}>
                <Text style={styles.label}>{address?.formatted_address}</Text>
                <Button
                    disabled={!address.geometry}
                    titleStyle={{ fontSize: 25 }}
                    buttonStyle={{
                        padding: 20,
                        justifyContent: 'space-evenly',
                    }}
                    containerStyle={styles.buttonContaiter}
                    title="Confirmar"
                    type="outline"
                    onPress={() => handleAddress()}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        padding: 15,
    },
    addressContainer: {
        flexDirection: 'column',
        padding: 15,
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    buttonContaiter: {
        width: '100%',
        padding: 20,
    },
})

export default Address
