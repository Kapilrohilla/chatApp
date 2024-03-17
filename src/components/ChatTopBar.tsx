import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import commonCSS from "../common/commonCSS";
import Images from "../assets";
import Atoms from "./Atoms";
import colors from "../common/colors";

export default function ChatTopBar() {
  return (
    <View
      style={[
        {
          paddingVertical: 5,
          paddingHorizontal: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        },
      ]}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity>
          <Image
            source={Images.backIcon}
            style={{ height: 40, width: 40 }}
            resizeMode="contain"
            resizeMethod="resize"
          />
        </TouchableOpacity>
        <Atoms.Avatar icon={Images.userIcon} borderColor={"transparent"} height={44} width={44} />
        <View>
          <Text style={{ color: colors.absBlack, fontWeight: "600" }}>John Abahram</Text>
          <Text style={{ color: colors.darkGrey, fontSize: 13, fontWeight: "500" }}>Active now</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <TouchableOpacity>
          <Image
            source={Images.callIcon}
            style={{ height: 24, width: 24 }}
            resizeMethod="resize"
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={Images.videoIcon}
            style={{ height: 24, width: 24 }}
            resizeMethod="resize"
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
