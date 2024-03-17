import {View, Text, Image, StatusBar, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import Images from '../assets';
import commonCSS from '../common/commonCSS';
import colors from '../common/colors';
import {CommonActions, useNavigation} from '@react-navigation/native';

export default function Splash() {
  const token = true;
  const nav = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      // @ts-ignore
      const reset = CommonActions.reset({
        index: 0,
        routes: [{name: token ? 'root' : 'beforeRoot'}],
      });
      nav.dispatch(reset);
      // nav.navigate('beforeRoot');
    }, 1000);
  }, []);
  return (
    <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
      <StatusBar animated={true} translucent={true} backgroundColor={colors.white} barStyle={'dark-content'} />
      <View style={[{flex: 1}, commonCSS.center]}>
        <Image source={Images.logo} style={{height: 154, width: 154}} resizeMethod="resize" resizeMode="contain" />
      </View>
    </SafeAreaView>
  );
}
