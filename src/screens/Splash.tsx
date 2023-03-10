import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from '../components/Welcome';
import MyImage from '../components/StartImage';
import StartButton from '../components/StartButton';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getValueFor } from '../store/service/secure-store-utils';
import { setSignIn } from '../store/slices/authSlice';
import { updateForm} from '../store/slices/userInfoSlice';
import { useNavigation } from '@react-navigation/native';
// replace with your own action creator
// import the function to get values from secure store

export default function Splash() {
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();
  useEffect(() => {
    async function fetchData() {
      const jwt = await getValueFor('jwt');
      const mobilenumber = await getValueFor('mobilenumber');
      const name : string = await getValueFor('name');
      const email : string = await getValueFor('email');
      const address1 : string = await getValueFor('address1');
      const address2 : string = await getValueFor('address2');
      const city : string = await getValueFor('city');
      const state : string = await getValueFor('state');
      const pincode : string = await getValueFor('pincode');

      const user = { jwt, mobilenumber }
      if (jwt != null && mobilenumber!= null) {
        dispatch(setSignIn(user));
        dispatch(setSignIn(user));
        dispatch(updateForm({field:"name",value:name}));
        dispatch(updateForm({field:"email",value:email}));
        dispatch(updateForm({field:"address1",value:address1}));
        dispatch(updateForm({field:"address2",value:address2}));
        dispatch(updateForm({field:"city",value:city}));
        dispatch(updateForm({field:"state",value:state}));
        dispatch(updateForm({field:"pincode",value:pincode}));
        
        navigation.reset({
          index: 0,
          routes: [{ name: 'MainTabScreen' }],
        });
        // navigate to home screen
      } else {
        // navigate to mobile screen
      }
    }


    fetchData();
  }, [dispatch, navigation]);



  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <MyImage />
        <Welcome />
      </View>
      <View style={styles.container2}>
        <StartButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcfcfc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1: {
    fontWeight: '24',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.6,
  },
  container2: {
    flex: 0.4,
  },
  text: {
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  welcome: {
    textAlign: 'center',
    fontWeight: '12',
    marginLeft: 30,
    textAlignVertical: 'center',
  },
});
