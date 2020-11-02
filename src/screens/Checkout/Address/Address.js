import React, { useEffect, useState } from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import Permission from '../../../hoc/Permission'
import { useDispatch, useSelector } from 'react-redux'
import { PERMISSIONS } from 'react-native-permissions'
import * as handler from '../../../redux/application/index'

const Address = (props) => {
    const hasLocationPermission = useSelector(
        (state) => state.permission.granted
    )
    const loading = useSelector((state) => state.app.loading)

    const dispatch = useDispatch()
    useEffect(() => {
        if (hasLocationPermission) {
            dispatch(handler.loadLocation())
        }
    }, [])

    const region = useSelector((state) => state.app.region)

    if (loading) {
        return <ActivityIndicator size="large" color="#00ff00" />
    } else {
        return (
            <Permission permission={PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION}>
                <MapView
                    style={styles.root}
                    provider={PROVIDER_GOOGLE}
                    showsUserLocation={true}
                    initialRegion={region}
                >
                    <MapView.Marker
                        coordinate={{
                            latitude: region.latitude,
                            longitude: region.longitude,
                        }}
                        title={'Você está aqui'}
                        draggable
                    />
                </MapView>
            </Permission>
        )
    }
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: 250,
    },
})

export default Address
