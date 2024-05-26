import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../../screens/Splash';
import AfterLogin from './AfterLogin';
import BeforeLogin from './BeforeLogin';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();
export default function Root() {
  // @ts-ignore
  const token = useSelector(state => state.token);
  // const token = true;
  // console.log(token);
  return (
    <Stack.Navigator>
      <Stack.Screen name="splash" component={Splash} options={{headerShown: false, animationTypeForReplace: 'push'}} />
      {/* {token ? ( */}
      <Stack.Screen name="root" component={AfterLogin} options={{headerShown: false}} />
      {/* // ) : ( */}
      <Stack.Screen name="beforeRoot" component={BeforeLogin} options={{headerShown: false}} />
      {/* // )} */}
    </Stack.Navigator>
  );
}
