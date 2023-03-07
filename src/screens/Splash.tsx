import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from '../components/Welcome';
import MyImage from '../components/StartImage';
import StartButton from '../components/StartButton';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getValueFor } from '../store/service/secure-store-utils';
import {setSignIn} from '../store/slices/authSlice';
import { useNavigation } from '@react-navigation/native';
 // replace with your own action creator
// import the function to get values from secure store

export default function Splash() {
  const dispatch = useDispatch();
  const navigation = useNavigation <any>();
  useEffect(() => {
    async function fetchData() {
        const user = await getValueFor('jwt');
     
        if (user) {
          dispatch(setSignIn(user));
          
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
  }, [dispatch,navigation]);



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
