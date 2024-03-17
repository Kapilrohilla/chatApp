// import {Image} from 'react-native-animatable';
import Images from "../assets";
import colors from "../common/colors";
import { TouchableOpacity, Image, View, Text, Pressable, TextInput } from "react-native";
import type { ColorValue, DimensionValue, ImageSourcePropType } from "react-native";
import commonCSS from "../common/commonCSS";
const Avatar = ({ icon, borderColor, padding = 5 }: AvatarP) => {
  return (
    <TouchableOpacity
      style={{
        padding: padding,
        borderWidth: 1,
        borderColor: borderColor,
        borderRadius: 999,
      }}
    >
      <Image source={icon} style={{ height: 30, width: 30 }} resizeMethod="resize" resizeMode="contain" />
    </TouchableOpacity>
  );
};

const Divider = ({ width }: DividerP) => {
  return <View style={{ height: 1, width, backgroundColor: colors.grey }} />;
};

const CBtn = ({
  text,
  width,
  bg = colors.white,
  textColor = colors.black,
  ...props
}: {
  text: string;
  width?: DimensionValue;
  bg: ColorValue;
  textColor?: ColorValue;
}) => {
  return (
    <Pressable style={[{ width, backgroundColor: bg, height: 48, borderRadius: 16, ...props }, commonCSS.center]}>
      <Text style={{ color: textColor, fontWeight: "600", fontSize: 16 }}>{text}</Text>
    </Pressable>
  );
};
const InputForm = ({ title, paddingHorizontal = 20, errorMessage, isPassword = false, ...props }: InputFormP) => {
  const isError = false;
  return (
    <View style={{ paddingHorizontal, ...props }}>
      <Text
        style={{
          color: !isError ? colors.primary : colors.red,
          fontSize: 16,
          fontWeight: "500",
          marginBottom: 5,
        }}
      >
        {title}
      </Text>
      <TextInput
        secureTextEntry={isPassword}
        style={[
          {
            borderBottomWidth: 1,
            borderBottomColor: isError ? colors.red : colors.grey,
          },
          commonCSS.removeMP,
        ]}
      />
      <Text
        style={{
          fontSize: 12,
          color: colors.red,
          textAlign: "right",
          marginTop: 4,
        }}
      >
        {isError && errorMessage}
      </Text>
    </View>
  );
};
const Atoms = { Avatar, Divider, CBtn, InputForm };
export default Atoms;

type AvatarP = {
  icon: ImageSourcePropType;
  borderColor: ColorValue;
  padding?: DimensionValue;
};
type DividerP = {
  width: DimensionValue;
};
type InputFormP = {
  title: string;
  paddingHorizontal?: DimensionValue;
  errorMessage: string;
  isPassword?: boolean;
};
