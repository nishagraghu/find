import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions,ScrollView,TouchableOpacity,KeyboardAvoidingView  } from 'react-native';
import React from 'react';
import { TextInput, Button, Divider, Text as Ptext, IconButton } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useStore, useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../store/store';
import { updateForm } from '../store/slices/userInfoSlice';
import { getValueFor,save } from '../store/service/secure-store-utils';
import { ToggleButton } from 'react-native-paper';


export default function EditAddressForm() { 
 const dispatch = useAppDispatch();

  const navigation = useNavigation<any>();


  const {address1 ,address2,city,state,pincode} = useSelector((state: RootState) => state.userInfo) || '';
  
  const handleAddres1Change = (value : string) => {
    dispatch(updateForm({field:'address1', value}));
  };
  const handleAddres2Change = (value : string) => {
    dispatch(updateForm({field:'address2', value}));
  };
  const handleCytyChange = (value : string) => {
    dispatch(updateForm({field:'city', value}));
  };
  const handleStateChange = (value : string) => {
    dispatch(updateForm({field:'state', value}));
  };
  const handlePincodeChange = (value : string) => {
    dispatch(updateForm({field:'pincode', value}));
  };
  const handleSubmit = () => {
    
    save('address1',address1);
    save('address2',address2);
    save('city',city);
    save('state',state);
    save('pincode',pincode);
    navigation.navigate('Profile')
  };
  

  return (

    <ScrollView >
   <KeyboardAvoidingView > 
      <TextInput
        mode="outlined"
        label="Address"
        placeholder="Enter your Address"
        style={styles.textinput}
        contentStyle={styles.contenttext}
        value={address1}
        onChangeText={handleAddres1Change}
        // onFocus ={() => navigation.navigate('EditAddress')}
        // editable={false} 
      
      />
     
      <TextInput
        mode="outlined"
        label="Address"
        placeholder="Enter your  Address"
        style={styles.textinput}
        value={address2}
        contentStyle={styles.contenttext}
        onChangeText={handleAddres2Change}

      />
      
      
     
      <TextInput
        mode="outlined"
        label="City"
        placeholder="Enter your Email Address"
        style={styles.textinput}
        value={city}
        contentStyle={styles.contenttext}
        onChangeText={handleCytyChange}

      />
      <TextInput
        mode="outlined"
        label="State"
        placeholder="Enter your Email Address"
        style={styles.textinput}
        value={state}
        contentStyle={styles.contenttext}
        onChangeText={handleStateChange}

      />
      <TextInput
        mode="outlined"
        label="Pincode"
        placeholder="Enter your Email Address"
        style={styles.textinput}
        value={pincode}
        keyboardType="numeric"
        contentStyle={styles.contenttext}
        onChangeText={handlePincodeChange}

      />
      <TouchableOpacity  onPress={() => handleSubmit()} >
      <Button
        // icon="camera"
        mode="contained"
        icon={({ color, size }) => (
           <MaterialIcons name="save" size={size} color={color} />
         
        )}
          onPress={() => handleSubmit()}
      
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
      </KeyboardAvoidingView>

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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  
//   textinput: {
//     flex: 1,
//     marginHorizontal: 5,
//   },
//   contenttext: {
//     height: 50,
//   },
});
