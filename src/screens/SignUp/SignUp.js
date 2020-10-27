import { text } from '@fortawesome/fontawesome-svg-core'
import React, { useEffect, useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Button, Icon, Input, SocialIcon } from 'react-native-elements'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import validate from 'validate.js'
import * as handler from '../../redux/customer/index'
import { useDispatch, useSelector } from 'react-redux'

const schema = {
    name: {
        presence: { allowEmpty: false, message: 'Nome é obrigatório' },
    },
    socialSecurity: {
        presence: { allowEmpty: false, message: 'CPF é obrigatório' },
    },
    email: {
        presence: { allowEmpty: false, message: 'E-mail é obrigatório' },
    },
    password: {
        presence: { allowEmpty: false, message: 'Senha é obrigatório' },
    },
    confirm: {
        presence: { allowEmpty: false, message: 'Confirm a senha' },
        equality: {
            attribute: 'password',
            message: 'Senha e confirmação não são iguais',
        },
    },
}

const SignUp = (props) => {
    const [secure, setSecure] = useState(true)

    const [customer, setCustomer] = useState({
        isValid: false,
        values: {},
        touched: {},
        errors: {},
    })

    useEffect(() => {
        const errors = validate(customer.values, schema)

        setCustomer((person) => ({
            ...person,
            isValid: errors ? false : true,
            errors: errors || {},
        }))
    }, [customer.values])

    const handleChange = (field, value) => {
        setCustomer((person) => ({
            ...person,
            values: {
                ...person.values,
                [field]: value,
            },
            touched: {
                ...person.touched,
                [field]: true,
            },
        }))
    }

    const dispatch = useDispatch()
    const saved = useSelector((state) => state.customer.saved)

    const submit = () => {
        const errors = validate(customer.values, schema)
        if (!errors) {
            dispatch(handler.save(customer.values))
        }
    }

    const hasError = (field) =>
        customer.touched[field] && customer.errors[field] ? true : false

    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.form}>
                <Input
                    value={customer.values.name || ''}
                    renderErrorMessage={hasError('name')}
                    errorMessage={
                        hasError('name') ? customer.errors.name[0] : null
                    }
                    placeholder="Nome"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={(text) => handleChange('name', text)}
                />
                <Input
                    value={customer.values.socialSecurity || ''}
                    renderErrorMessage={hasError('socialSecurity')}
                    errorMessage={
                        hasError('socialSecurity')
                            ? customer.errors.socialSecurity[0]
                            : null
                    }
                    placeholder="CPF"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={(text) =>
                        handleChange('socialSecurity', text)
                    }
                />
                <Input
                    value={customer.values.email || ''}
                    renderErrorMessage={hasError('email')}
                    errorMessage={
                        hasError('email') ? customer.errors.email[0] : null
                    }
                    placeholder="Email"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={(text) => handleChange('email', text)}
                />
                <Input
                    rightIcon={
                        <FontAwesomeIcon
                            icon={['fa', 'eye']}
                            onPress={() => setSecure(!secure)}
                            size={36}
                        />
                    }
                    secureTextEntry={secure}
                    value={customer.values.password || ''}
                    renderErrorMessage={hasError('password')}
                    errorMessage={
                        hasError('password')
                            ? customer.errors.password[0]
                            : null
                    }
                    placeholder="Password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={(text) => handleChange('password', text)}
                />
                <Input
                    rightIcon={
                        <FontAwesomeIcon
                            icon={['fa', 'eye']}
                            onPress={() => setSecure(!secure)}
                            size={36}
                        />
                    }
                    secureTextEntry={secure}
                    value={customer.values.confirm || ''}
                    renderErrorMessage={hasError('confirm')}
                    errorMessage={
                        hasError('confirm') ? customer.errors.confirm[0] : null
                    }
                    placeholder="Confimar"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={(text) => handleChange('confirm', text)}
                />
                <Button
                    disabled={!customer.isValid}
                    titleStyle={{ fontSize: 25 }}
                    buttonStyle={{ padding: 20 }}
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
        flex: 1,
        flexGrow: 1,
        justifyContent: 'center',
    },
    form: {
        flexGrow: 1,
        justifyContent: 'center',
    },
})

export default SignUp
