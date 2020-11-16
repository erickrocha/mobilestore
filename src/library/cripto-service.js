import crypto from 'crypto'

export const encrypt = (text, publicKey) => {
    const publicKey = Uint8Array.from(atob(publicKey))
    const encrypted = crypto.publicEncrypt(JSON.stringify(text), publicKey)
    return btoa(encrypted)
}
