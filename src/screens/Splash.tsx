import {View, Text, Image, StatusBar, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import Images from '../assets';
import commonCSS from '../common/commonCSS';
import colors from '../common/colors';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {MMKV} from 'react-native-mmkv';
import {addLoginToken} from '../redux/slices/token';

export default function Splash() {
  // @ts-ignore
  const storage = new MMKV();
  const [token, setToken] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const token = storage.getString('token');
    // const token = useSelector(state => state.token);
    if (token) {
      setToken(true);
      dispatch(addLoginToken(token));
    }
    setTimeout(() => {
      const reset = CommonActions.reset({
        index: 0,
        routes: [{name: token ? 'root' : 'beforeRoot'}],
      });
      nav.dispatch(reset);
    }, 1000);
  });
  const nav = useNavigation();
  useEffect(() => {}, []);
  return (
    <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
      <StatusBar animated={true} translucent={true} backgroundColor={colors.white} barStyle={'dark-content'} />
      <View style={[{flex: 1}, commonCSS.center]}>
        <Image source={Images.logo} style={{height: 154, width: 154}} resizeMethod="resize" resizeMode="contain" />
      </View>
    </SafeAreaView>
  );
}
