import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { TouchableHighlight } from 'react-native-gesture-handler'
import clsx from 'clsx'

const InputNumber = (props) => {
    const { quantity, onAdd, onSubtract } = props

    return (
        <View style={styles.root}>
            <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                onPress={() => onSubtract()}
                disabled={quantity <= 1}
            >
                <View>
                    <FontAwesomeIcon
                        icon={['fa', 'minus-circle']}
                        style={[
                            quantity <= 1 ? styles.disabled : styles.button,
                        ]}
                        size={36}
                    />
                </View>
            </TouchableHighlight>

            <View style={styles.valueBox}>
                <Text style={styles.value}>{quantity}</Text>
            </View>
            <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                onPress={() => onAdd()}
            >
                <View>
                    <FontAwesomeIcon
                        icon={['fa', 'plus-circle']}
                        style={styles.button}
                        size={36}
                    />
                </View>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
        alignSelf: 'flex-end',
    },
    valueBox: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 25,
        marginLeft: 20,
        marginRight: 20,
    },
    value: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    button: {
        color: 'darkgreen',
    },
    disabled: {
        color: 'slategray',
    },
})

export default InputNumber
