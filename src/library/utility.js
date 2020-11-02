import { Dimensions } from 'react-native'

export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties,
    }
}

export const calculateCordinates = (position) => {
    const { cords } = position
    const boundingBox = {
        southWest: {
            latitude: '24.234631',
            longitude: '89.907127',
        },
        northEast: {
            latitude: '24.259769',
            longitude: '89.934692',
        },
    }

    const { width } = Dimensions.get('screen').width
    const height = 250
    const ASPECT_RATIO = width / height

    const lat = parseFloat(cords.latitude)
    const lng = parseFloat(cords.longitude)
    const northeastLat = parseFloat(boundingBox.northEast.latitude)
    const southwestLat = parseFloat(boundingBox.southWest.latitude)
    const latDelta = northeastLat - southwestLat
    const lngDelta = latDelta * ASPECT_RATIO
    return {
        latitude: lat,
        longitude: lng,
        latitudeDelta: latDelta,
        longitudeDelta: lngDelta,
    }
}
