// import {Image} from 'react-native-animatable';
import Images from '../assets';
import colors from '../common/colors';
import {TouchableOpacity, Image, View, Text, Pressable} from 'react-native';
import type {DimensionValue, ImageSourcePropType} from 'react-native';
import commonCSS from '../common/commonCSS';
const Avatar = ({icon}: AvatarP) => {
  return (
    <TouchableOpacity
      style={{
        padding: 5,
        borderWidth: 1,
        borderColor: colors.white,
        borderRadius: 999,
      }}>
      <Image
        source={icon}
        style={{height: 30, width: 30}}
        resizeMethod="resize"
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

const Divider = ({width}: DividerP) => {
  return <View style={{height: 1, width, backgroundColor: colors.grey}} />;
};

const CBtn = ({text, width}: {text: string; width?: DimensionValue}) => {
  return (
    <Pressable
      style={[
        {width, backgroundColor: colors.white, height: 48, borderRadius: 16},
        commonCSS.center,
      ]}>
      <Text style={{color: colors.black, fontWeight: '600', fontSize: 16}}>
        {text}
      </Text>
    </Pressable>
  );
};

const Atoms = {Avatar, Divider, CBtn};
export default Atoms;

type AvatarP = {
  icon: ImageSourcePropType;
};
type DividerP = {
  width: DimensionValue;
};
