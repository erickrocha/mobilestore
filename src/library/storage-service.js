import AsyncStorage from '@react-native-community/async-storage'

export const getItem = async (key) => {
    return await AsyncStorage.getItem(key)
}

export const setItem = async (key, value) => {
    await AsyncStorage.setItem(key, value)
}

export const setObject = async (key, value) => {
    await AsyncStorage.setItem(key, JSON.stringify(value))
}

export const getObject = async (key) => {
    const obejct = await AsyncStorage.getItem(key)
    return JSON.parse(obejct)
}

export const removeItem = async (key) => {
    await AsyncStorage.removeItem(key)
}

export const getAllKeys = async () => {
    await AsyncStorage.getAllKeys()
}

export const getAllValues = async () => {
    const keys = getAllKeys()
    return await AsyncStorage.multiGet(keys)
}

export const getItems = async (keys) => {
    return await AsyncStorage.multiGet(keys)
}

export const clear = async () => {
    await AsyncStorage.clear()
}
