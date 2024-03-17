import { SafeAreaView, StatusBar } from "react-native";
import React from "react";
import colors from "./src/common/colors";
import Onboarding from "./src/screens/Onboarding";
import Splash from "./src/screens/Splash";
import Login from "./src/screens/auth/Login";
import Signup from "./src/screens/auth/Signup";

export default function App() {
  // return <Splash />;
  // return <Onboarding />;
  // return <Login />;
  return <Signup />;
}
