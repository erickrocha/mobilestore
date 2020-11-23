import JSEncrypt from 'jsencrypt'

export const encrypt = (text, publicKey) => {
    const rsaEncrypt = new JSEncrypt()
    rsaEncrypt.setPublicKey(publicKey)
    return rsaEncrypt.encrypt(text)
}

export const encryptFields = (entity, publicKey) => {
    const rsaEncrypt = new JSEncrypt()
    rsaEncrypt.setPublicKey(publicKey)
    const encryptedEntity = {}
    Object.keys(entity).forEach((key) => {
        encryptedEntity[key] = rsaEncrypt.encrypt(entity[key])
    })
    return encryptedEntity
}
