import React from 'react';
import { Dimensions, StyleSheet, Text, View, useWindowDimensions } from 'react-native';

//const { width, height } = Dimensions.get('window');

export const DimensionesScreen = () => {

    const { width, height } = useWindowDimensions();

    return (
        <View>
            <View style={styles.container}>
                <View style={{
                    ...styles.cajaMorada,
                    width: width * 0.6
                    }} />
                <View style={styles.cajaNaranja} />
            </View>
            <Text style={{
                ...styles.title,
                color: 'black'
            }}
            >
                W: {width}, H: {height}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 200,
        backgroundColor: 'red'
    },
    cajaMorada: {
        backgroundColor: '#62309d',
        //width: '50%',
        height: '50%',
    },
    cajaNaranja: {
        backgroundColor: '#e2513a'
    },
    title: {
        fontSize: 30,
        textAlign: 'center'
    }
});


// Fuentes
// https://reactnative.dev/docs/dimensions