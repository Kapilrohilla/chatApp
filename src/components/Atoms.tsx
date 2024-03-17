// import {Image} from 'react-native-animatable';
import Images from "../assets";
import colors from "../common/colors";
import { TouchableOpacity, Image, View, Text, Pressable, TextInput } from "react-native";
import type { ColorValue, DimensionValue, ImageSourcePropType, ViewStyle } from "react-native";
import commonCSS from "../common/commonCSS";
const Avatar = ({
  icon,
  borderColor = colors.black,
  padding = 5,
  isborder = false,
  height = 30,
  width = 30,
}: AvatarP) => {
  const containerCSS: ViewStyle = {
    borderRadius: 999,
  };
  if (isborder) {
    containerCSS.padding = padding;
    containerCSS.borderWidth = 1;
    containerCSS.borderColor = borderColor;
  }
  return (
    <TouchableOpacity style={containerCSS}>
      <Image source={icon} style={{ height, width }} resizeMethod="resize" resizeMode="contain" />
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
  isborder?: boolean;
  borderColor?: ColorValue;
  padding?: DimensionValue;
  height: DimensionValue;
  width: DimensionValue;
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
