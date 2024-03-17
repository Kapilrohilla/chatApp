// import { SafeAreaView, StatusBar } from "react-native";
import React, {useState} from 'react';
// import colors from "./src/common/colors";
// import Onboarding from "./src/screens/Onboarding";
// import Splash from "./src/screens/Splash";
// import Login from "./src/screens/auth/Login";
// import Signup from "./src/screens/auth/Signup";
// import Chat from "./src/screens/Chat";
import Home from './src/screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './src/screens/Splash';
import BeforeLogin from './src/components/navigators/BeforeLogin';
import AfterLogin from './src/components/navigators/AfterLogin';

const Stack = createNativeStackNavigator();

export default function App() {
  // const [token, setToken] = useState(false);
  const token = true;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="splash"
          component={Splash}
          options={{headerShown: false, animationTypeForReplace: 'push'}}
        />
        {token ? (
          <Stack.Screen name="root" component={AfterLogin} options={{headerShown: false}} />
        ) : (
          <Stack.Screen name="beforeRoot" component={BeforeLogin} options={{headerShown: false}} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
