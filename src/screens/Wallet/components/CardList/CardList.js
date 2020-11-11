import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements'

const CardList = (props) => {
    const navigation = useNavigation()

    return (
        <View style={styles.root}>
            <Text>Cartão</Text>
            <Button
                containerStyle={{ alignItems: 'flex-start' }}
                title="Adicionar cartão"
                type="clear"
                onPress={() => navigation.navigate('Card')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        padding: 15,
    },
})

export default CardList
