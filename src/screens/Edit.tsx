import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions,ScrollView,TouchableOpacity } from 'react-native';
import React from 'react';
import { TextInput, Button, Divider, Text as Ptext, IconButton } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
export default function Edit() {
  const navigation = useNavigation<any>();
  return (

    <ScrollView style={styles.container}>
<TouchableOpacity onPress={() => navigation.navigate('EditAddress')}> 
      <TextInput
        mode="outlined"
        label="Name"
        placeholder="Enter your name"
        style={styles.textinput}
        contentStyle={styles.contenttext}
        onFocus ={() => navigation.navigate('EditAddress')}
        editable={false} 
        // onPress={() => navigation.navigate('EditAddress')}
      />
       </TouchableOpacity>
      <TextInput
        mode="outlined"
        label="Email Address"
        placeholder="Enter your Email Address"
        style={styles.textinput}
        contentStyle={styles.contenttext}
      />
         <Divider bold />
      <Ptext style={styles.Addres} variant="titleMedium">Delivary Address</Ptext>
      <View style={styles.displayAddres} >
        <View style={styles.col8} >
          

        </View>
        <View style={styles.col4} >
          <IconButton
            icon={({ color, size }) => (
              <MaterialIcons name="edit" size={size} color={color} />
            )}
            size={20}
            onPress={() => navigation.navigate('EditAddress')}
            // onPress={() => console.log('Pressed')}
          />
        </View>
      </View>

      <Divider bold />
      <TextInput
        mode="outlined"
        label="Phone Number"
        placeholder="Enter your Email Address"
        style={styles.textinput}
        contentStyle={styles.contenttext}
      />
   
      <Button
        // icon="camera"
        mode="contained"
        icon={({ color, size }) => (
           <MaterialIcons name="save" size={size} color={color} />
          // <ActivityIndicator animating={true} color={MD2Colors.red800} />
        )}
         onPress={() => console.log('Pressed')}
      
        style={{
          width: '95%', justifyContent: 'center',
          marginLeft: 5,
          alignItems: 'center',
          marginTop: 10
        }}
      >
        Save 
      </Button>


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
