import { View, Text } from "react-native";
import React from "react";
import colors from "../common/colors";
import { widthPercentageToDP } from "react-native-responsive-screen";

export default function SenderText() {
  return (
    // <View style={{ width: "100%", alignSelf: "flex-end" }}>
    //   <Text
    //     style={{
    //       color: colors.black,
    //       backgroundColor: colors.purplishWhite,
    //       padding: 6,
    //       borderRadius: 5,
    //       marginVertical: 7,
    //     }}
    //   >
    //     {"Have a great working week"}
    //   </Text>
    // </View>
    <View style={{ width: "100%", alignItems: "flex-start" }}>
      <Text
        style={{
          backgroundColor: colors.purplishWhite,
          color: colors.black,
          padding: 7,
          //   borderRadius: 4,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 8,
          borderBottomLeftRadius: 8,
          borderBottomRightRadius: 8,
          marginVertical: 7,
          maxWidth: widthPercentageToDP("80%"),
        }}
      >
        {"Have a great working week. 123 1234s 2f fdf aa faf da fad fafadfadf"}
      </Text>
    </View>
  );
}
