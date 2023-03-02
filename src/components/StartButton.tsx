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
    marginTop: 20,
    height: 50,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1778F2',
    shadowColor: 'rgba(0,0,0,0.4)',
    shadowOffset: {
      width: 1,
      height: 5,
    },
    
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  buttonText: {
    width:200,

    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    
  },
});

export default StartButton;
