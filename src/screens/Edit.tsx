import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions,ScrollView,TouchableOpacity } from 'react-native';
import React from 'react';
import { TextInput, Button, Divider, Text as Ptext, IconButton } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import EditForm from '../components/EditForm';


export default function Edit() {
  const navigation = useNavigation<any>();
  

  return (

    <ScrollView style={styles.container}>

     <EditForm />

    </ScrollView>

  );
}

const styles = StyleSheet.create({
  col8: {
    flex: 0.75
  },
  col4: {
    flex: 0.25,
  },
  displayAddres: {
    flex: 0.3,
    flexDirection: 'row',
  },
  Addres: {
    marginHorizontal:20,
    marginVertical:10,
    // marginLeft: 10,
    fontWeight:'bold'
  },
  contenttext: {

  },
  textinput: {
    width: '90%',
    // alignItems:'center',
    marginLeft: 10,
    // marginTop:10,
    //  marginHorizontal:50,
    marginVertical: 10

  },
  formcontainer: {

    alignItems: 'center'
  },
  container: {
    flex: 1,
    paddingTop: '5%',
    backgroundColor: 'white'

  },
});
