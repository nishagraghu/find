import React from 'react';
import { View,  StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { welcomeText, getStartedText, startButtonText } from '../utils/constants';
const Welcome: React.FC = () => {
    return (
        <View style={styles.welcome}>
            <Text variant="titleLarge" style={styles.text}>{welcomeText}</Text>
            <Text variant="titleLarge"  style={styles.text}>{getStartedText}</Text>
            <Text variant="titleLarge" style={styles.text}>{startButtonText}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: '#fcfcfc',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container1: {

        flex: 0.6,

    },
    container2: {
        flex: 0.4,

    },
    text: {

        textAlign: 'center',
        textAlignVertical: 'center',
    },
    welcome: {
        width:500,
        textAlign: 'center',
        // fontWeight: 24,
        marginLeft: 30,
        textAlignVertical: 'center',

    }
});

export default Welcome;