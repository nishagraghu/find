import React from 'react';

import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import Start from '../screens/Start';
import Mobil from '../screens/Mobil';
import Edit from '../screens/Edit';
import Otp from '../screens/Otp';
import EditAddress from '../screens/EditAddress';
import Help from '../screens/Help';
import Enquery from '../screens/Enquery';
import LegalInformation from '../screens/LegalInformation'; 
import Filter from '../screens/Filter'; 
import Products from '../screens/Products'; 


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
      <RootStack.Screen name={'EditScreen'} component={Edit} options={{headerShown: true ,  title: 'My Profile'}} />
      <RootStack.Screen name={'HelpScreen'} component={Help} options={{headerShown: true ,  title: 'Help & Support'}} />
      <RootStack.Screen name={'EditAddress'} component={EditAddress} options={{headerShown: true ,  title: 'Edit Address'}} />
      <RootStack.Screen name={'LegalInformation'} component={LegalInformation} options={{headerShown: true ,  title: 'Legal Information'}} />
      <RootStack.Screen name={'filter'} component={Filter} options={{headerShown: true ,  title: ''}} />
      <RootStack.Screen name={'products'} component={Products} options={{headerShown: true ,  title: ''}} />
         
    </RootStack.Navigator>
  );
  
  export default RootStackScreen;

