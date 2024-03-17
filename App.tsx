import {SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import colors from './src/common/colors';
import Onboarding from './src/screens/Onboarding';
import Splash from './src/screens/Splash';

export default function App() {
  // return <Splash />;
  return <Onboarding />;
}
