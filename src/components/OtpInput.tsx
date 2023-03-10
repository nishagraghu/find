import * as React from 'react';
import { TextInput, Text } from 'react-native-paper';
import { useRoute } from '@react-navigation/native';
import phonNumberFormat from '../utils/phonNumberFormat';
import OneMinuteTimer from '../components/OneMinuteTimer';
import { useNavigation } from '@react-navigation/native';
import { useStore, useSelector } from 'react-redux';
import {
  TouchableOpacity,
  StyleSheet,
  View
} from 'react-native';
import { RootState,useAppDispatch } from '../store/store';
import {sendOtp,vatifyOtp} from '../store/service/UserService';


type RootStackParamList = {
  OtpInput: {
    phoneNumber: string;
  };
};

type OtpInputProps = {};


const OtpInput: React.FC<OtpInputProps> = () => {
  const dispatch = useAppDispatch();
  const [text, setText] = React.useState<string>("");
  const [remainingSeconds, setRemainingSeconds] = React.useState<number>(60);
  const [restart, setrestart] = React.useState<boolean>(false);
  const [error, seterror] = React.useState<boolean>(false);
  const navigation = useNavigation<any>();
  
  
  const {jwt} = useSelector((state :RootState ) => state.userAuth) || '' ;
  const handleResendOtp = () => {
    setrestart(true)
    seterror(false)
    // setRemainingSeconds(60);
  }
  React.useEffect(() => {
   
    if (jwt) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'MainTabScreen' }],
      });
      // navigation.navigate('MainTabScreen')
    }
  }, [jwt, navigation]);
  const { phoneNumber } = useRoute().params as { phoneNumber: string };
  const submitPhone = () => {
    
    if (text.length == 0) {
      seterror(true)
    } else {
      seterror(false)
     
       dispatch(vatifyOtp({mobilenumber:phoneNumber,otp:text}));
     
    }

  }
  return (
    <>
      <Text variant="headlineMedium" style={styles.bold}>Verification Code</Text>
      <Text variant="labelLarge" style={styles.blured}>Please enter the verification code sent to</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>

        <Text variant="labelLarge">to</Text>
        <Text variant="labelLarge" style={styles.bold} > {phonNumberFormat(phoneNumber)}</Text>


        <TouchableOpacity onPress={() => navigation.navigate('Mobil')}>
          <Text style={styles.editLink}>Edit</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        // label="otp"
        mode="outlined"
        value={text}
        autoFocus
        keyboardType="numeric"
        onChangeText={text => setText(text)}
        style={{ minWidth: 329 }}
      />
      <View style={styles.timer}>
        <OneMinuteTimer seconds={remainingSeconds} restart={restart} setrestart={setrestart} />
       
      </View>
      {error&&<Text style={styles.error} >PLEASE ENTER OTP</Text>}
      <TouchableOpacity
        style={styles.button}
        onPress={() => submitPhone()}
      >

        <Text style={styles.buttonText}>VERIFY  {jwt}</Text>
      </TouchableOpacity>

      {/* <Text variant="labelLarge" style={styles.resendlinkText}>Having Problem ?
       
        
      </Text>
      <Text variant="labelLarge"   style={styles.resendlink} > Resend code</Text> */}

      <View style={{ flexDirection: 'row', marginVertical: 10 }}>
        <Text variant="labelLarge" style={styles.resendlinkText}>Having Problem?</Text>
        <TouchableOpacity style={styles.resendlink} onPress={handleResendOtp}   >
          <Text variant="labelLarge" >Resend code</Text>
        </TouchableOpacity>
      </View>




    </>
  );
};

const styles = StyleSheet.create({
  error:{
  color: 'red',
 
  },
  editLink: {
    marginLeft: 10,
    // marginTop: 80,

    color: 'blue',
  },
  resendlink: {
    color: 'blue',
    marginLeft: 10,

  },
  timer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end'

  },
  resendlinkText: {
    color: 'gray',
    //  marginVertical: 10
  },
  blured: {
    color: 'gray',
  },
  bold: {

    fontWeight: 'bold'
  },
  erorText: {
    color: 'red',
    marginVertical: 10
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
  },
  button: {
    marginTop: 20,
    height: 50,
    width: 340,
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
});

export default OtpInput;
