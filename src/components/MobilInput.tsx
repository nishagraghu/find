import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native-paper';
import { RootState,useAppDispatch } from '../store/store';
import {sendOtp} from '../store/service/UserService';
const MobilInput : React.FC = () => {
  const [value, setValue] = useState('');
  const[errorFlag,setFlag] =useState(false);
  const [countryCode, setCountryCode] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [valid, setValid] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef<PhoneInput>(null);
  const navigation = useNavigation <any>();
  const dispatch   = useAppDispatch();
  const { formattedNumber  } = phoneInput.current?.getNumberAfterPossiblyEliminatingZero() || {};
  
  const submitPhone  = () =>{
     if(value.length!=10){
        
      setFlag(true)
      return;
     }
    
     dispatch(sendOtp('+91'+value));
    
     setFlag(false)

    // const checkValid = phoneInput.current?.isValidNumber(value);
    // setShowMessage(true);
    // setValid(checkValid ? checkValid : false);
    // setCountryCode(phoneInput.current?.getCountryCode() || '');
    
    navigation.navigate('Otp', { phoneNumber: '+91'+value } )
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <SafeAreaView style={styles.wrapper}  >
          
          <PhoneInput 
            ref={phoneInput}
            defaultValue={value}
            defaultCode="IN"
            layout="first"
            onChangeText={(text) => {
              setValue(text);
            
            }}
            onChangeFormattedText={(text) => {
              
               setFormattedValue(text);
              
              //  setCountryCode(phoneInput.current?.getCountryCode() || '');
            }}
            countryPickerProps={{withAlphaFilter:true}}
            disabled={disabled}
            withDarkTheme
            withShadow
            autoFocus
          />
          {errorFlag &&<Text  testID="error-msg"  variant="labelLarge" style={styles.erorText} >please enter valid phone number</Text>}
          <TouchableOpacity
            style={styles.button}
            onPress={() => submitPhone()}>
            <Text   style={styles.buttonText}>SEND</Text>
          </TouchableOpacity>
          
        </SafeAreaView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  erorText:{
    color:'red',
    marginVertical:10
    
  },
  container: {
    flex: 1,
    marginBottom: '10%',
    paddingBottom:'10%',
    backgroundColor: Colors.lighter,
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  buttonText:{
    color: 'white',
    fontSize: 14,
  },
  redColor: {
    backgroundColor: '#F57777'
  },
  message: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 20,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});

export default MobilInput;