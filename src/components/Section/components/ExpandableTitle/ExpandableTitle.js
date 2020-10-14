import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { TouchableHighlight } from 'react-native-gesture-handler'

const ExpandableTitle = (props) => {
    const { icon, title, size, expanded, setExpanded } = props

    const IconState = expanded ? (
        <FontAwesomeIcon
            icon={['fa', 'angle-right']}
            style={styles.expanded}
            size={24}
        />
    ) : (
        <FontAwesomeIcon
            icon={['fa', 'angle-down']}
            style={styles.expanded}
            size={24}
        />
    )
    return (
        <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => setExpanded(!expanded)}
        >
            <View style={styles.root}>
                <View style={styles.titleBox}>
                    <FontAwesomeIcon
                        icon={['fa', icon]}
                        style={styles.icon}
                        size={size}
                    />
                    <Text style={styles.title}>{title}</Text>
                </View>
                {IconState}
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    root: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: 'rgba(0, 0, 0, 0.103)',
        borderBottomWidth: 5,
        borderStyle: 'solid',
    },
    titleBox: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    title: {
        fontSize: 19,
        fontWeight: 'bold',
        marginLeft: 10,
        alignSelf: 'center',
    },
    icon: {
        color: 'peru',
    },
    expanded: {
        alignSelf: 'center',
        color: 'silver',
    },
})

export default ExpandableTitle
