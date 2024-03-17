import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Onboarding from '../../screens/Onboarding';
import Login from '../../screens/auth/Login';
import Signup from '../../screens/auth/Signup';
import Home from '../../screens/Home';
import Chat from '../../screens/Chat';
import {TransitionPresets, createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
export default function AfterLogin() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          ...TransitionPresets.ScaleFromCenterAndroid,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
      />
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{
          headerShown: false,
          ...TransitionPresets.ScaleFromCenterAndroid,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
      />
    </Stack.Navigator>
  );
}
