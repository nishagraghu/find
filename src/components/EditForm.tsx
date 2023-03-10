import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions,ScrollView,TouchableOpacity } from 'react-native';
import React from 'react';
import { TextInput, Button, Divider, Text as Ptext, IconButton } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useStore, useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../store/store';
import { updateForm } from '../store/slices/userInfoSlice';
import { getValueFor,save } from '../store/service/secure-store-utils';


export default function EditForm() { 
 const dispatch = useAppDispatch();

  const navigation = useNavigation<any>();
  const {name ,email , address1 ,address2,city,state,pincode } = useSelector((state: RootState) => state.userInfo) || '';
  const handleNameChange = (value : string) => {
    dispatch(updateForm({field:'name', value}));
  };
  const handleEmailChange = (value : string) => {
    dispatch(updateForm({field:'email', value}));
  };
  const handleSubmit = () => {
    
    save('name',name);
    save('email',email);
    navigation.navigate('Profile')
  };
  

  return (

    <View >

      <TextInput
        mode="outlined"
        label="Name"
        placeholder="Enter your name"
        style={styles.textinput}
        contentStyle={styles.contenttext}
        value={name}
        onChangeText={handleNameChange}
        // onFocus ={() => navigation.navigate('EditAddress')}
        // editable={false} 
      
      />
     
      <TextInput
        mode="outlined"
        label="Email Address"
        placeholder="Enter your Email Address"
        style={styles.textinput}
        value={email}
        contentStyle={styles.contenttext}
        onChangeText={handleEmailChange}

      />
         <Divider bold />
      <Ptext style={styles.Addres} variant="titleMedium">Delivary Address</Ptext>
      <View style={styles.displayAddres} >
        <View style={styles.col8} >
          <Text> 
            {address1}, {address2}
          </Text>
          <Text> 
          {city},{state}-{pincode}
          </Text>
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
      <TouchableOpacity   onPress={() => handleSubmit()}> 
      <Button
        // icon="camera"
        mode="contained"
        icon={({ color, size }) => (
           <MaterialIcons name="save" size={size} color={color} />
         
        )}
        
      
        style={{
          width: '95%', justifyContent: 'center',
          marginLeft: 5,
          alignItems: 'center',
          marginTop: 10
        }}
      >
        Save 
      </Button>

      </TouchableOpacity>
    </View>

  );
}

const styles = StyleSheet.create({
  col8: {
    paddingLeft:10,
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
