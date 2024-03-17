import { View, Text, SafeAreaView, StatusBar, ScrollView } from "react-native";
import React from "react";
import colors from "../common/colors";
import Atoms from "../components/Atoms";
import Images from "../assets";
import ChatListContent from "../components/ChatListContent";

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.absBlack }}>
      <StatusBar backgroundColor={colors.absBlack} barStyle={"light-content"} />
      {/* Topbar */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 20,
          marginBottom: 20,
        }}
      >
        <Atoms.Avatar
          height={20}
          width={20}
          isborder={true}
          borderColor={colors.white}
          padding={10}
          icon={Images.searchIcon}
        />
        <Text style={{ color: colors.white, fontSize: 18, fontWeight: "600" }}>Home</Text>
        <Atoms.Avatar height={40} width={40} icon={Images.userIcon} />
      </View>
      <View
        style={{
          backgroundColor: colors.white,
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          paddingTop: 20,
          flex: 1,
        }}
      >
        <Atoms.Divider
          width={50}
          height={3}
          // @ts-ignore
          marginBottom={10}
          alignSelf="center"
        />
        <ScrollView>
          {[1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 11, , 1, 1, 1, 1].map((cardContent) => (
            <ChatListContent
              noOfUnread={5}
              desc="How are you today?"
              title="Alex Linderson"
              image={Images.userIcon}
              lastTime="2 min ago."
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
