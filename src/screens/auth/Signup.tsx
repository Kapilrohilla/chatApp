import {View, Text, TouchableOpacity, Dimensions, Image, ScrollView, StatusBar, Alert} from 'react-native';
import React, {useState} from 'react';
import colors from '../../common/colors';
import Atoms from '../../components/Atoms';
import Images from '../../assets';
import services from '../../common/services';
import apis from '../../common/apis';
import {useDispatch} from 'react-redux';
import {addLoginToken} from '../../redux/slices/token';

export default function Signup({navigation}: any) {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [cnfrmPassword, setCnfrmPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  // const dispatch = useDispatch();
  async function handleSignup() {
    if (password !== cnfrmPassword) {
      Alert.alert("passwords doesn't match");
    }
    setLoading(true);
    const rawData = JSON.stringify({name, password, email});
    try {
      const res = await services.postDataWithoutToken(rawData, apis.signup);
      console.log(res);
      if (res.error) {
        if (res.message === 'User already exists') {
          Alert.alert(res.message);
          return navigation.navigate('Login');
        } else return Alert.alert(res.message);
      }
      if (res.code === 200) {
        return navigation('login');
      }
    } catch (err: any) {
      console.log(err.message);
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

      <Text
        style={{
          marginTop: 40,
          color: colors.absBlack,
          fontSize: 18,
          textAlign: 'center',
          fontWeight: '700',
        }}>
        {'Sign up with Email'}
      </Text>
      <Text
        style={{
          marginTop: 20,
          marginBottom: 40,
          textAlign: 'center',
          color: colors.black,
        }}>
        {'Get chatting with friends and family today by\nsigning up for our chat app!'}
      </Text>
      <ScrollView>
        <Atoms.InputForm title={'Your name'} errorMessage={'Invalid name'} state={name} handleState={setName} />
        <Atoms.InputForm
          title={'Your email'}
          errorMessage={'Invalid email address'}
          state={email}
          handleState={setEmail}
        />
        <Atoms.InputForm
          title={'Password'}
          errorMessage={'Invalid password'}
          state={password}
          handleState={setPassword}
        />
        <Atoms.InputForm
          title={'Confirm Password'}
          errorMessage={'Password mismatched'}
          state={cnfrmPassword}
          handleState={setCnfrmPassword}
        />
      </ScrollView>
      <Atoms.CBtn
        text="Create an account"
        width={Dimensions.get('screen').width - 20}
        bg={colors.primary}
        textColor={'#fff'}
        loading={loading}
        onPress={handleSignup}
        //   @ts-ignore
        marginHorizontal={10}
        marginBottom={20}
        marginTop={40}
      />
    </View>
  );
}
