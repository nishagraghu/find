import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Text } from 'react-native-paper';
import MobilInput from '../components/MobilInput';

export default function Mobil() {
    return (
        <View style={styles.container} >
            <View style={styles.container1}>
                <Text style={styles.text} variant="headlineLarge">Welcom to App</Text>
                <Text style={styles.text} variant="titleSmall">Conform your Account by Enterning</Text>
                <Text style={styles.text} variant="titleSmall">your mobile number below</Text>


            </View>
            <View style={styles.container2}>
                <MobilInput />
            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    msg: {
        marginTop: 20,

    },
    container: {
        flex: 1,

    },
    text: {
        color: 'white',
    },
    container2: {
        flex: 0.5,
       
        // color: 'white',
        // alignItems: 'center',
        // justifyContent: 'center',
        // backgroundColor: '#1778F2'

    },
    container1: {
        flex: 0.5,
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1778F2'

    },
    title: {
        marginTop: 80,
        marginLeft: 12

    },
    alignCenter: {
        // marginTop: 80,
        textAlign: 'center',
        justifyContent: 'center'
    },

});
