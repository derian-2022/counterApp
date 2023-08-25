import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const PositionScreen = () => {
    return (
        <View style={styles.container}>

            <View style={styles.cajaMorada} />
            <View style={styles.cajaNaranja} />

            </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1b66ff'
    },
    cajaMorada: {
        width: 100,
        height: 100,
        backgroundColor: '#492e83',
        borderWidth: 10,
        borderColor: 'white',
    },
    cajaNaranja: {
        width: 100,
        height: 100,
        backgroundColor: 'darkorange',
        borderWidth: 10,
        borderColor: 'white',
    }
});



//Fuente
// https://reactnative.dev/docs/flexbox