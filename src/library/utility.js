import { Dimensions } from 'react-native'

export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties,
    }
}

export const calculateCordinates = (details) => {
    const { location, viewport } = details?.geometry

    const { width } = Dimensions.get('screen')
    const ASPECT_RATIO = width / 250

    const latDelta = viewport?.northeast?.lat - viewport?.southwest?.lat
    const lngDelta = latDelta * ASPECT_RATIO
    const region = {
        latitude: location.lat,
        longitude: location.lng,
        latitudeDelta: latDelta,
        longitudeDelta: lngDelta,
    }
    return region
}
