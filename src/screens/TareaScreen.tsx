import React from 'react'
import { StyleSheet, View } from 'react-native'

export const TareaScreen = () => {
    return (
        <View style={ styles.container }>
            <View style={ styles.cajaMorada }></View>
            <View style={ styles.cajaNaranja }></View>
            <View style={ styles.cajaAzul }></View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    cajaMorada: {
        //flex: 2,
        width: 100,
        height: 100,
        borderRadius: 10,
        borderColor: 'white',
        backgroundColor: '#b80090',
        //alignSelf: 'flex-end'
        //top: 100,
    },
    cajaNaranja: {
        //flex: 2,
        width: 100,
        height: 100,
        //flex: 1,
        borderRadius: 10,
        borderColor: 'white',
        backgroundColor: '#e8591c',
        //alignSelf: 'center'
        //left: 100,
        top: 50
    },
    cajaAzul: {
        //flex: 4,
        width: 100,
        height: 100,
        borderRadius: 10,
        borderColor: 'white',
        backgroundColor: '#1b66ff',
        //alignSelf: 'flex-start'
    }
});