import React from 'react';

import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import Start from '../screens/Start';
import Mobil from '../screens/Mobil';
import Login from '../screens/Login';
import Otp from '../screens/Otp';
import Splash from '../screens/Splash';
import MainTabScreen from  '../router/MainTabScreen'

const RootStack = createNativeStackNavigator();


const RootStackScreen = () => (
    <RootStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'Splash'}>
      <RootStack.Screen name={'Start'} component={Start} />
      <RootStack.Screen name={'Splash'} component={Splash} />
      <RootStack.Screen name={'Mobil'} component={Mobil} />
      <RootStack.Screen name={'Otp'} component={Otp}   options={{headerShown: true ,  title: ''}} />
      <RootStack.Screen name={'MainTabScreen'} component={MainTabScreen} />
    </RootStack.Navigator>
  );
  
  export default RootStackScreen;

