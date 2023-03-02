import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import OtpInput from '../components/OtpInput'
import React from 'react';

export default function Otp() {
  return (
   
    <View style={styles.container}>
      <OtpInput />
      {/* <StatusBar style="auto" /> */}
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
