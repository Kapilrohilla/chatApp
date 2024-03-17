import {View, Text, Image, ImageSourcePropType, TouchableOpacity} from 'react-native';
import React from 'react';
import Images from '../assets';
import colors from '../common/colors';
import commonCSS from '../common/commonCSS';
import {useNavigation} from '@react-navigation/native';

export default function ChatListContent({title, desc, image, lastTime, noOfUnread = 1}: ChatListContentP) {
  const nav = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        // @ts-ignore
        nav.navigate('Chat');
      }}
      style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15, marginVertical: 6}}>
      <View style={{flexDirection: 'row', gap: 10}}>
        <Image source={image} style={{height: 52, width: 52}} />
        <View>
          <Text style={{color: colors.absBlack, fontSize: 18, fontWeight: '600'}}>{title}</Text>
          <Text style={{color: colors.darkGrey, fontSize: 12}}>{desc}</Text>
        </View>
      </View>
      <View style={{gap: 4}}>
        <Text style={{color: colors.darkGrey, fontSize: 12}}>{lastTime}</Text>
        {noOfUnread ? (
          <View
            style={[
              {backgroundColor: colors.red, height: 22, width: 22, borderRadius: 99, alignSelf: 'flex-end'},
              commonCSS.center,
            ]}>
            <Text style={{color: colors.white}}>{noOfUnread.toString()}</Text>
          </View>
        ) : null}
      </View>
    </TouchableOpacity>
  );
}

type ChatListContentP = {
  title: string;
  desc: string;
  image: ImageSourcePropType;
  lastTime: string;
  noOfUnread: number;
};
