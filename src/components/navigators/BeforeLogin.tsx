import { View, Text } from "react-native";
import React from "react";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Onboarding from "../../screens/Onboarding";
import Login from "../../screens/auth/Login";
import Signup from "../../screens/auth/Signup";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";

const Stack = createStackNavigator();
export default function BeforeLogin() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{
          headerShown: false,
          ...TransitionPresets.BottomSheetAndroid,
          gestureEnabled: true,
          gestureDirection: "horizontal",
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          ...TransitionPresets.ScaleFromCenterAndroid,
          gestureEnabled: true,
          gestureDirection: "horizontal",
        }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          headerShown: false,
          ...TransitionPresets.ScaleFromCenterAndroid,
          gestureEnabled: true,
          gestureDirection: "horizontal",
        }}
      />
    </Stack.Navigator>
  );
}
