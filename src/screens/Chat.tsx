import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import React from "react";
import colors from "../common/colors";
import commonCSS from "../common/commonCSS";
import Images from "../assets";
import ChatTopBar from "../components/ChatTopBar";
import ChatInput from "../components/ChatInput";
import SenderText from "../components/SenderText";
import UserText from "../components/UserText";

export default function Chat() {
  return (
    <SafeAreaView style={{ backgroundColor: colors.white, flex: 1 }}>
      <StatusBar animated={true} backgroundColor={colors.white} barStyle={"dark-content"} />
      <ChatTopBar />
      <ScrollView indicatorStyle="black" style={{ paddingHorizontal: 10 }}>
        {[1, 2, 3, 4, 5, 5, 6, 6, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 5, 5, 6, 6, 3, 3, 3, 3, 3, 3, 3, 3].map(() => {
          return (
            <>
              <SenderText />
              <UserText />
              <UserText />
            </>
          );
        })}
      </ScrollView>
      <ChatInput />
    </SafeAreaView>
  );
}
