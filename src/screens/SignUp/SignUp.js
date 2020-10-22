import { text } from '@fortawesome/fontawesome-svg-core'
import React, { useEffect, useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Button, Icon, Input, SocialIcon } from 'react-native-elements'
import { updateObject } from '../../library/utility'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import validate from 'validate'

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

    const [person, setPerson] = useState({
        isValid: false,
        values: {},
        touched: {},
        errors: {},
    })

    useEffect(() => {
        const errors = validate(person.values, schema)

        setPerson((person) => ({
            ...person,
            isValid: errors ? false : true,
            errors: errors || {},
        }))
    }, [person.values])

    const handleChange = (event) => {
        event.persist()

        setPerson((person) => ({
            ...person,
            values: {
                ...person.values,
                [event.target.name]:
                    event.target.type === 'checkbox'
                        ? event.target.checked
                        : event.target.value,
            },
            touched: {
                ...person.touched,
                [event.target.name]: true,
            },
        }))
    }

    const submit = () => {
        const errors = validate(formState.values, schema)
        if (!errors) {
            alert('até que funfa')
        }
    }

    const hasError = (field) =>
        person.touched[field] && person.errors[field] ? true : false

    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.form}>
                <Input
                    value={person.values.name || ''}
                    renderErrorMessage={hasError('name')}
                    errorMessage={
                        hasError('name') ? person.errors.name[0] : null
                    }
                    placeholder="Nome"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={handleChange}
                />
                <Input
                    value={person.values.socialSecurity || ''}
                    renderErrorMessage={hasError('socialSecurity')}
                    errorMessage={
                        hasError('socialSecurity')
                            ? person.errors.socialSecurity[0]
                            : null
                    }
                    placeholder="CPF"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={handleChange}
                />
                <Input
                    value={person.values.email || ''}
                    renderErrorMessage={hasError('email')}
                    errorMessage={
                        hasError('email') ? person.errors.email[0] : null
                    }
                    placeholder="Email"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={handleChange}
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
                    value={person.values.password || ''}
                    renderErrorMessage={hasError('password')}
                    errorMessage={
                        hasError('password') ? person.errors.password[0] : null
                    }
                    placeholder="Password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={handleChange}
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
                    value={person.values.confirm || ''}
                    renderErrorMessage={hasError('confirm')}
                    errorMessage={
                        hasError('confirm') ? person.errors.confirm[0] : null
                    }
                    placeholder="Confimar"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={(text) =>
                        setPerson(updateObject(person, { confirm: text }))
                    }
                />
                <Button
                    disabled={!person.isValid}
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
