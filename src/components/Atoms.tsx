// import {Image} from 'react-native-animatable';
import Images from '../assets';
import colors from '../common/colors';
import {TouchableOpacity, Image, View, Text, Pressable, TextInput, ActivityIndicator} from 'react-native';
import type {ColorValue, DimensionValue, ImageSourcePropType, KeyboardTypeOptions, ViewStyle} from 'react-native';
import commonCSS from '../common/commonCSS';
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
      <Image source={icon} style={{height, width}} resizeMethod="resize" resizeMode="contain" />
    </TouchableOpacity>
  );
};

const Divider = ({width, height = 1, ...props}: DividerP) => {
  return <View style={{height: height, width, backgroundColor: colors.grey, borderRadius: 99, ...props}} />;
};

const CBtn = ({
  text,
  width = '100%',
  bg = colors.white,
  textColor = colors.black,
  loading,
  onPress,
  ...props
}: CBtnP) => {
  return (
    <Pressable
      onPress={onPress}
      style={[{width, backgroundColor: bg, height: 48, borderRadius: 16, ...props}, commonCSS.center]}>
      {loading ? (
        <ActivityIndicator size={'small'} color={textColor} />
      ) : (
        <Text style={{color: textColor, fontWeight: '600', fontSize: 16}}>{text}</Text>
      )}
    </Pressable>
  );
};
const InputForm = ({
  title,
  paddingHorizontal = 20,
  errorMessage,
  state,
  handleState,
  keyboardType = 'default',
  isPassword = false,
  ...props
}: InputFormP) => {
  const isError = false;
  return (
    <View style={{paddingHorizontal, ...props}}>
      <Text
        style={{
          color: !isError ? colors.primary : colors.red,
          fontSize: 16,
          fontWeight: '500',
          marginBottom: 5,
        }}>
        {title}
      </Text>
      <TextInput
        secureTextEntry={isPassword}
        keyboardType={keyboardType}
        //@ts-ignore
        value={state!}
        onChangeText={txt => handleState(txt)}
        style={[
          {
            borderBottomWidth: 1,
            borderBottomColor: isError ? colors.red : colors.grey,
            color: '#000',
          },
          commonCSS.removeMP,
        ]}
      />
      <Text
        style={{
          fontSize: 12,
          color: colors.red,
          textAlign: 'right',
          marginTop: 4,
        }}>
        {isError && errorMessage}
      </Text>
    </View>
  );
};
const Atoms = {Avatar, Divider, CBtn, InputForm};
export default Atoms;

type AvatarP = {
  icon: ImageSourcePropType;
  isborder?: boolean;
  borderColor?: ColorValue;
  padding?: DimensionValue;
  height?: DimensionValue;
  width?: DimensionValue;
};
type DividerP = {
  width: DimensionValue;
  height?: DimensionValue;
};
type InputFormP = {
  title: string;
  paddingHorizontal?: DimensionValue;
  errorMessage: string;
  keyboardType?: KeyboardTypeOptions;
  isPassword?: boolean;
  state: unknown;
  // handleState: () => void;
  handleState: React.Dispatch<React.SetStateAction<string>>;
};
type CBtnP = {
  text: string;
  width?: DimensionValue;
  bg?: ColorValue;
  loading: boolean;
  onPress: () => any;
  textColor?: ColorValue;
};
