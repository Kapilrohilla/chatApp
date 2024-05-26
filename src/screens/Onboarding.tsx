import {View, Text, SafeAreaView, StatusBar, ImageBackground, Image, Dimensions, TouchableOpacity} from 'react-native';
import React from 'react';
import colors from '../common/colors';
import Images from '../assets';
import commonCSS from '../common/commonCSS';
import Atoms from '../components/Atoms';
import {useNavigation} from '@react-navigation/native';

export default function Onboarding() {
  const nav = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: colors.absBlack}}>
      <StatusBar animated={true} backgroundColor={colors.absBlack} translucent={true} barStyle={'light-content'} />
      <ImageBackground style={{flex: 1, paddingVertical: 50, paddingHorizontal: 20}} source={Images.ellipseBg}>
        <Image
          source={Images.logoLight}
          style={{
            height: 19.2,
            width: Dimensions.get('screen').width - 40,
          }}
          resizeMode="contain"
        />
        <Text style={{fontSize: 68, color: colors.white, marginTop: 30}}>{'Connect \nfriends\neasily &\nquicky'}</Text>
        <Text style={{color: colors.white, fontSize: 16, marginTop: 20}}>
          Our chat app is the perfect way to stay connected with friends and family.
        </Text>
        <View
          style={[
            commonCSS.center,
            {
              marginTop: 50,
              width: Dimensions.get('window').width - 40,
              flexDirection: 'row',
              height: 50,
              gap: 20,
            },
          ]}>
          <Atoms.Avatar icon={Images.fbIcon} borderColor={colors.absBlack} />
          <Atoms.Avatar icon={Images.googleIcon} borderColor={colors.absBlack} />
        </View>
        <View style={[{flexDirection: 'row', gap: 10, marginVertical: 20}, commonCSS.center]}>
          <Atoms.Divider width={Dimensions.get('window').width / 2 - 40} />
          <Text style={{width: 20}}>OR</Text>
          <Atoms.Divider width={Dimensions.get('window').width / 2 - 40} />
        </View>
        <Atoms.CBtn
          loading={false}
          text="Sign up with mail"
          onPress={() => {
            // @ts-ignore
            nav.navigate('Signup');
          }}
        />
        <TouchableOpacity
          onPress={() => {
            //@ts-ignore
            nav.navigate('Login');
          }}>
          <Text
            style={{
              color: colors.white,
              textAlign: 'center',
              marginVertical: 50,
            }}>
            Existing account? <Text style={{fontWeight: '700'}}>Log in</Text>
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}
