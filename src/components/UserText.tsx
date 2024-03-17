import { View, Text } from "react-native";
import React from "react";
import colors from "../common/colors";
import { widthPercentageToDP } from "react-native-responsive-screen";

export default function UserText() {
  return (
    <View style={{ width: "100%", alignItems: "flex-end" }}>
      <Text
        style={{
          backgroundColor: colors.primary,
          color: colors.white,
          padding: 7,
          borderTopLeftRadius: 8,
          borderTopRightRadius: 0,
          borderBottomLeftRadius: 8,
          borderBottomRightRadius: 8,
          marginVertical: 7,
          maxWidth: widthPercentageToDP("80%"),
        }}
      >
        {"Have a great working week lorem 13 1234 12 12 23 "}
      </Text>
    </View>
  );
}
