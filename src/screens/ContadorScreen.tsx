import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Fab } from '../components/Fab';

export const ContadorScreen = () => {

    const [contador, setContador] = useState(10);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Contador: {contador}
            </Text>

            <Fab
                title="+1"
                onPress={ () => setContador(contador + 1) }
            />

            <Fab
                title="-1"
                position='bl'
                onPress={ () => setContador(contador - 1) }
            />

            {/* <TouchableOpacity
                style={ styles.fabLocationBL }
                onPress={() => setContador(contador - 1)}
            >
                <View style={styles.fab}>
                    <Text style={styles.fabText}>
                        -1
                    </Text>
                </View>
            </TouchableOpacity> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    title: {
        fontSize: 35,
        color: 'black',
        textAlign: 'center',
        top: -10
    },

})




//Fuentes
// https://reactnative.dev/docs/view
// https://reactnative.dev/docs/touchableopacity
// https://reactnative.dev/docs/stylesheet
// https://reactnative.dev/docs/components-and-apis