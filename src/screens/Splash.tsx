import {View, Text, Image, StatusBar, SafeAreaView} from 'react-native';
import React from 'react';
import Images from '../assets';
import commonCSS from '../common/commonCSS';
import colors from '../common/colors';

export default function Splash() {
  return (
    <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
      <StatusBar
        animated={true}
        translucent={true}
        backgroundColor={colors.white}
        barStyle={'dark-content'}
      />
      <View style={[{flex: 1}, commonCSS.center]}>
        <Image
          source={Images.logo}
          style={{height: 154, width: 154}}
          resizeMethod="resize"
          resizeMode="contain"
        />
      </View>
    </SafeAreaView>
  );
}
