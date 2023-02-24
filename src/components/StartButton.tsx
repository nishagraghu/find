import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { getStarted } from '../utils/constants';
import { useNavigation } from '@react-navigation/native';
const StartButton : React.FC  = () => {
  const navigation = useNavigation <any>();

  const handleStartPress = () => {
    navigation.navigate('Mobil')
    
  };

  return (
    <View style={styles.container}>
      
      <TouchableOpacity testID="start-button" style={styles.button} onPress={handleStartPress}>
        
        <Text style={styles.buttonText}>{getStarted} </Text>
      </TouchableOpacity>
    </View>
  ); 
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#1778F2',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    width:200,

    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    
  },
});

export default StartButton;
