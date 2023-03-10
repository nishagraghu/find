import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import Start from '../screens/Start';
import Mobil from '../screens/Mobil';
import Home from '../screens/Home';
import Profile from '../screens/Profile'
import { HeaderButtons } from '../components/HeaderButtons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen name="favarat" component={Home}
      options={{
        tabBarLabel: 'Favarat',
        // headerRight: () => <HeaderButtons />,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="heart" color={color} size={size} />
        ),
      }}

    />
    <Tab.Screen name="Profile" component={Profile}

      options={{

        headerRight: () => <HeaderButtons />,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

