import React from 'react';
import { StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View, Platform } from 'react-native';


interface Props {
    title: string;
    position?: 'br' | 'bl';
    onPress: () => void;

}

export const Fab = ({ title, onPress, position = 'br' }: Props) => {

    // const ios = () => {
    //     return (
    //         <TouchableOpacity
                //onPress={onPress}
                //activeOpacity={ 0.8 }
                //style={[
    //             styles.fabLocation,
    //             (position === 'bl') ? styles.left : styles.right
    //         ]}
    //         >
    //             <View style={styles.fab}>
    //                 <Text style={styles.fabText}>{title}</Text>
    //             </View>
    //         </TouchableOpacity>
    //     )
    // }

    // const android = () => {
    //     return (
    //         <View style={[
    //             styles.fabLocation,
    //             (position === 'bl') ? styles.left : styles.right
    //         ]}>
    //             <TouchableNativeFeedback
    //                 onPress={onPress}
    //                 background={TouchableNativeFeedback.Ripple('#009012', false, 30)}
    //             >
    //                 <View style={styles.fab}>
    //                     <Text style={styles.fabText}>{title}</Text>
    //                 </View>
    //             </TouchableNativeFeedback>
    //         </View>
    //     )
    // }


    return (

        //return ( Platform.OS === 'ios() : android() );

        <View style={[
            styles.fabLocation,
            (position === 'bl') ? styles.left : styles.right
        ]}>
            <TouchableNativeFeedback
                onPress={onPress}
                background={TouchableNativeFeedback.Ripple('#009012', false, 30)}
            >
                <View style={styles.fab}>
                    <Text style={styles.fabText}>{title}</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    fabLocation: {
        position: 'absolute',
        bottom: 25,
    },
    right: {
        right: 25
    },
    left: {
        left: 25
    },
    fab: {
        backgroundColor: '#2966bf',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 8,
    },
    fabText: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
});




//Fuentes
// https://ethercreative.github.io/react-native-shadow-generator/
// https://reactnative.dev/docs/touchablenativefeedback#useforeground
// https://reactnative.dev/docs/touchablenativefeedback#background