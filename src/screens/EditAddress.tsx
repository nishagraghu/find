import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import EditAddressForm from '../components/EditAddressForm';

export default function EditAddress() {
 
  
  return (
   
    <View style={styles.container}>
      <EditAddressForm />
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
