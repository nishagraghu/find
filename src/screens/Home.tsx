import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, ScrollView, Text, View } from 'react-native';
import React, { useState } from 'react';
import Search from '../components/Search';
import FlashMessage from "react-native-flash-message";
import { Button as PButton } from 'react-native-paper';
import { showMessage, hideMessage } from "react-native-flash-message";
import { RootState } from '../store/store';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';


export default function Home() {
  const filterInfo = useSelector((state: RootState) => state.filterInfo);
  const navigation = useNavigation<any>();

  const search = () => {
    if(filterInfo.selectedvariant.id>0){
      navigation.navigate('products')

    }else if(filterInfo.selectedModel.id>0){
      navigation.navigate('products')
      
    }else{
      showMessage({
        message: "please fill required fields ",
        type: "danger",
      });
    }
    
  }

  return (

    <ScrollView style={styles.container}>
      {/* <Text>Home </Text> */}
      <FlashMessage position="top" />
      <Search lable='Manufacturer' />
      <Search lable='Model' />
      <Search lable='Year Range' />
      <Search lable='Variant' />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <PButton
          onPress={search}
          mode="contained"
          buttonColor="#4267B2"
          style={{
            minWidth: '92%'
          }}

        >
          Search
        </PButton>
      </View>
      {/* <Button
        onPress={() => {
         
          showMessage({
            message: "error",
            type: "danger",
          });
        }}
        title="Request Details"
        color="#841584"
      /> */}




      {/* <StatusBar style="auto" /> */}
    </ScrollView>

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
