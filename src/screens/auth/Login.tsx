import {View, Text, StatusBar, Image, TouchableOpacity, Dimensions, ScrollView, Alert} from 'react-native';
import React, {useState} from 'react';
import colors from '../../common/colors';
import Images from '../../assets';
import Atoms from '../../components/Atoms';
import commonCSS from '../../common/commonCSS';
import services from '../../common/services';
import {useSelector} from 'react-redux';
import apis from '../../common/apis';
import {addLoginToken} from '../../redux/slices/token';
import {MMKV} from 'react-native-mmkv';

export default function Login({navigation}: any) {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const mmkv = new MMKV();
  async function handleLogin() {
    const data = JSON.stringify({email, password});
    setLoading(true);
    try {
      const res = await services.postDataWithoutToken(data, apis.login);
      console.log(res);
      if (res.error) {
        return Alert.alert(res.message);
      } else {
        // console.log(res.results.token);
        const tok = res.results.tokenType + ' ' + res.results.token;
        mmkv.set('token', tok);
        addLoginToken(tok);
        navigation.navigate('root');
      }
    } catch (err) {
      console.log('error occurred: ' + err);
    } finally {
      setLoading(false);
    }
  }
  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <TouchableOpacity onPress={() => navigation.goBack()} style={{marginTop: 20}}>
        <Image
          source={Images.backIcon}
          style={{height: 40, marginTop: 10}}
          resizeMethod="resize"
          resizeMode="contain"
        />
      </TouchableOpacity>
      <ScrollView>
        <Text
          style={{
            marginTop: 40,
            color: colors.absBlack,
            fontSize: 18,
            textAlign: 'center',
            fontWeight: '700',
          }}>
          {'Log in to Chatbox'}
        </Text>
        <Text
          style={{
            marginTop: 20,
            marginBottom: 20,
            textAlign: 'center',
            color: colors.black,
          }}>
          {'Welcome back! Sign in using your social\naccount or email to continue us'}
        </Text>
        <View
          style={[
            commonCSS.center,
            {
              marginTop: 20,
              width: Dimensions.get('window').width,
              flexDirection: 'row',
              height: 50,
              gap: 20,
            },
          ]}>
          <Atoms.Avatar icon={Images.fbIcon} borderColor={colors.absBlack} padding={8} />
          <Atoms.Avatar icon={Images.googleIcon} borderColor={colors.absBlack} padding={8} />
        </View>
        <View style={[{flexDirection: 'row', gap: 10, marginVertical: 20}, commonCSS.center]}>
          <Atoms.Divider width={Dimensions.get('window').width / 2 - 40} />
          <Text style={{width: 20, color: colors.absBlack}}>OR</Text>
          <Atoms.Divider width={Dimensions.get('window').width / 2 - 40} />
        </View>
        <Atoms.InputForm
          title={'Your email'}
          errorMessage={'Invalid email address'}
          keyboardType="email-address"
          state={email}
          handleState={setEmail}
        />
        <Atoms.InputForm
          title={'Password'}
          errorMessage={'Invalid password'}
          state={password}
          handleState={setPassword}
        />
      </ScrollView>
      <View style={{marginTop: 40}}>
        <Atoms.CBtn
          text="Log in"
          width={Dimensions.get('screen').width - 20}
          bg={colors.primary}
          onPress={handleLogin}
          loading={loading}
          textColor={'#fff'}
          //   @ts-ignore
          marginHorizontal={10}
          marginBottom={10}
        />
        <TouchableOpacity style={{marginBottom: 20}}>
          <Text style={{color: colors.primary, fontWeight: '700', textAlign: 'center'}}>Forgot Passowrd?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
