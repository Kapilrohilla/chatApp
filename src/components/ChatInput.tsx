import { View, Text, KeyboardAvoidingView, TextInput, Image, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
import colors from "../common/colors";
import commonCSS from "../common/commonCSS";
import Images from "../assets";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

export default function ChatInput() {
  return (
    <KeyboardAvoidingView
      style={{
        width: wp("100%"),
        flexDirection: "row",
        paddingHorizontal: 10,
        alignItems: "center",
        gap: 10,
        position: "absolute",
        // bottom: 10,
        bottom: 0,
        paddingTop: 10,
        paddingBottom: 15,
        backgroundColor: colors.white,
      }}
    >
      <TouchableOpacity>
        <Image source={Images.clipIcon} style={{ height: 24, width: 24 }} resizeMethod="resize" resizeMode="contain" />
      </TouchableOpacity>
      <TextInput
        style={[
          commonCSS.removeMP,
          {
            width: wp("70%"),
            fontSize: 14,
            backgroundColor: colors.purplishWhite,
            borderRadius: 10,
            paddingHorizontal: 10,
            height: 40,
            color: colors.black,
            fontWeight: "500",
          },
        ]}
        placeholder="Write your message.."
        placeholderTextColor={colors.darkGrey}
        autoCorrect={true}
        autoCapitalize="sentences"
        multiline={true}
      />
      <TouchableOpacity style={[{ backgroundColor: colors.primary, padding: 6, borderRadius: 50 }, commonCSS.center]}>
        <Image source={Images.sendIcon} style={{ height: 24, width: 24 }} resizeMethod="resize" resizeMode="contain" />
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
