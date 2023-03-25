
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TextInput } from 'react-native-paper';
export default function LegalInformation() {
 
  
  return (
   
    <View style={styles.container}>
      <TextInput
      mode="outlined"
      label="Outlined input"
      placeholder="Type something"
     
    />
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
