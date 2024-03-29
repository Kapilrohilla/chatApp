import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import colors from "../../common/colors";
import Atoms from "../../components/Atoms";
import Images from "../../assets";

export default function Signup({ navigation }: any) {
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <StatusBar backgroundColor={colors.white} barStyle={"dark-content"} />
      <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: 20 }}>
        <Image
          source={Images.backIcon}
          style={{ height: 40, marginTop: 10 }}
          resizeMethod="resize"
          resizeMode="contain"
        />
      </TouchableOpacity>

      <Text
        style={{
          marginTop: 40,
          color: colors.absBlack,
          fontSize: 18,
          textAlign: "center",
          fontWeight: "700",
        }}
      >
        {"Sign up with Email"}
      </Text>
      <Text
        style={{
          marginTop: 20,
          marginBottom: 40,
          textAlign: "center",
          color: colors.black,
        }}
      >
        {"Get chatting with friends and family today by\nsigning up for our chat app!"}
      </Text>
      <ScrollView>
        <Atoms.InputForm title={"Your name"} errorMessage={"Invalid name"} />
        <Atoms.InputForm title={"Your email"} errorMessage={"Invalid email address"} />
        <Atoms.InputForm title={"Password"} errorMessage={"Invalid password"} />
        <Atoms.InputForm title={"Confirm Password"} errorMessage={"Password mismatched"} />
        {/* <Atoms.InputForm title={"Password"} errorMessage={"Invalid password"} />
        <Atoms.InputForm title={"Confirm Password"} errorMessage={"Password mismatched"} /> */}
      </ScrollView>
      <Atoms.CBtn
        text="Create an account"
        width={Dimensions.get("screen").width - 20}
        bg={colors.primary}
        textColor={"#fff"}
        onPress={() => navigation.navigate("afterRoot")}
        //   @ts-ignore
        marginHorizontal={10}
        marginBottom={20}
        marginTop={40}
      />
    </View>
  );
}
