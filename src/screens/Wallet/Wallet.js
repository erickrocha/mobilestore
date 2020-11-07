import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Divider, Icon } from 'react-native-elements'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'

const Wallet = (props) => {
    const navigation = useNavigation()
    const availables = useSelector((state) => state.app.payments)

    return (
        <View style={styles.root}>
            <View style={styles.header}>
                <Icon
                    name="close"
                    reverse
                    color="green"
                    onPress={() => navigation.goBack()}
                    containerStyle={{ marginRight: 25 }}
                />
                <Text
                    style={{
                        alignSelf: 'center',
                        fontSize: 25,
                        fontWeight: 'bold',
                    }}
                >
                    Minhas formas de Pagamento
                </Text>
            </View>
            <Divider />
            {availables.map((payment) => (
                <View key={payment.method}>
                    <Text>{payment.label}</Text>
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        padding: 15,
    },
    header: {
        marginTop: 15,
        flexDirection: 'row',
        marginBottom: 10,
    },
})

export default Wallet
