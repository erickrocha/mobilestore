import React, { useEffect, useState } from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import { Button, Icon, Input } from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux'
import validate from 'validate.js'
import * as cryptoService from '../../library/cripto-service'
import * as handler from '../../redux/customer/index'

const schema = {
    cardNumber: {
        presence: {
            allowEmpty: false,
            message: 'Número do cartão obrigatório',
        },
    },
    expireDate: {
        presence: { allowEmpty: false, message: 'Validade é obrigatório' },
    },
    securityCode: {
        presence: {
            allowEmpty: false,
            message: 'Código verificador é obrigatório',
        },
    },
    cardHolder: {
        presence: { allowEmpty: false, message: 'Nome é obrigatório' },
    },
}

const Card = (props) => {
    const [card, setCard] = useState({
        isValid: false,
        values: {},
        touched: {},
        errors: {},
    })

    useEffect(() => {
        const errors = validate(card.values, schema)

        setCard((card) => ({
            ...card,
            isValid: errors ? false : true,
            errors: errors || {},
        }))
    }, [card.values])

    const handleChange = (field, value) => {
        setCard((card) => ({
            ...card,
            values: {
                ...card.values,
                [field]: value,
            },
            touched: {
                ...card.touched,
                [field]: true,
            },
        }))
    }

    const publicKey = useSelector((state) => state.app.publicKey)

    const dispatch = useDispatch()

    const submit = () => {
        const errors = validate(card.values, schema)
        if (!errors) {
            const encryptedCard = cryptoService.encryptFields(
                card.values,
                publicKey
            )
            dispatch(handler.addCard(encryptedCard))
        }
    }

    const hasError = (field) =>
        card.touched[field] && card.errors[field] ? true : false

    return (
        <SafeAreaView style={styles.root}>
            <View>
                <Input
                    placeholder="Nome no cartão"
                    inputStyle={{ fontSize: 20 }}
                    containerStyle={{ marginTop: 20, marginBottom: 20 }}
                    leftIcon={{ type: 'font-awesome', name: 'user' }}
                    value={card.values.cardHolder || ''}
                    renderErrorMessage={hasError('cardHolder')}
                    errorMessage={
                        hasError('cardHolder')
                            ? card.errors.cardHolder[0]
                            : null
                    }
                    nativeID="cardHolder"
                    name="cardHolder"
                    onChangeText={(text) => handleChange('cardHolder', text)}
                />
                <Input
                    inputStyle={{ fontSize: 20 }}
                    containerStyle={{ marginTop: 20, marginBottom: 20 }}
                    placeholder="Número do cartão"
                    leftIcon={{ type: 'font-awesome', name: 'credit-card' }}
                    value={card.values.cardNumber || ''}
                    renderErrorMessage={hasError('cardNumber')}
                    errorMessage={
                        hasError('cardNumber')
                            ? card.errors.cardNumber[0]
                            : null
                    }
                    nativeID="cardNumber"
                    name="cardNumber"
                    onChangeText={(text) => handleChange('cardNumber', text)}
                    keyboardType="number-pad"
                />
                <View
                    style={{
                        flexDirection: 'row',
                        marginBottom: 20,
                        marginTop: 20,
                    }}
                >
                    <Input
                        containerStyle={{ width: '50%' }}
                        inputStyle={{ fontSize: 20 }}
                        placeholder="MM/YY"
                        rightIcon={{
                            type: 'font-awesome',
                            name: 'info-circle',
                        }}
                        value={card.values.expireDate || ''}
                        renderErrorMessage={hasError('expireDate')}
                        errorMessage={
                            hasError('expireDate')
                                ? card.errors.expireDate[0]
                                : null
                        }
                        nativeID="expireDate"
                        name="expireDate"
                        keyboardType="numbers-and-punctuation"
                        onChangeText={(text) =>
                            handleChange('expireDate', text)
                        }
                    />
                    <Input
                        containerStyle={{ width: '50%' }}
                        inputStyle={{ fontSize: 20 }}
                        placeholder="CVV"
                        rightIcon={{
                            type: 'font-awesome',
                            name: 'info-circle',
                        }}
                        value={card.values.securityCode || ''}
                        renderErrorMessage={hasError('securityCode')}
                        errorMessage={
                            hasError('securityCode')
                                ? card.errors.securityCode[0]
                                : null
                        }
                        nativeID="securityCode"
                        name="securityCode"
                        keyboardType="number-pad"
                        onChangeText={(text) =>
                            handleChange('securityCode', text)
                        }
                    />
                </View>

                <Button
                    disabled={!card.isValid}
                    containerStyle={{ padding: 10, marginTop: 20 }}
                    buttonStyle={{ padding: 15 }}
                    titleStyle={{ fontSize: 25, padding: 20 }}
                    title="Salvar"
                    onPress={() => submit()}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    root: {
        padding: 15,
    },
})

export default Card
