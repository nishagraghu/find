import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Button, Text, View } from 'react-native';
import React, { useState }  from 'react';

export default function Home() {


  return (
   
    <View style={styles.container}>
      <Text>Home </Text>
    

     
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
