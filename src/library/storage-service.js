import EncryptedStorage from 'react-native-encrypted-storage'

export const setItem = async (key, value) => {
    try {
        await EncryptedStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
        console.log(`error trying to save ${key} . error: ${error}`)
    }
}

export const getItem = async (key) => {
    try {
        const value = await EncryptedStorage.getItem(key)
        if (value !== undefined) {
            return value
        }
        return null
    } catch (err) {
        console.log(`error trying to read ${key} . error: ${error}`)
    }
}

export const clear = async () => {
    try {
        await EncryptedStorage.clear()
    } catch (error) {
        console.log(`error trying to clean storage. error: ${error}`)
    }
}

export const removeItem = async (key) => {
    try {
        await EncryptedStorage.removeItem(key)
    } catch (error) {
        console.log(`error trying to remove ${key}. error: ${error}`)
    }
}
