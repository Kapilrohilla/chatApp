import {View, Text, SafeAreaView, StatusBar, ScrollView, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import colors from '../common/colors';
import Atoms from '../components/Atoms';
import Images from '../assets';
import ChatListContent from '../components/ChatListContent';
import services from '../common/services';
import {useDispatch, useSelector} from 'react-redux';
import apis from '../common/apis';
import {MMKV} from 'react-native-mmkv';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {addUserDetails} from '../redux/slices/userData';

export default function Home() {
  //@ts-ignore
  const token = useSelector(state => state.token);
  const [loading, setLoading] = useState(false);
  // @ts-ignore
  const userData = useSelector(state => state.userData);
  // console.log(userData);
  const storage = new MMKV();
  const nav = useNavigation();
  const [chatData, setChatData] = useState([]);
  const dispath = useDispatch();
  useEffect(() => {
    async function getInitialData() {
      setLoading(true);
      const url = apis.initialChatData;
      const myDataUrl = apis.myDetails;
      try {
        const myDetails = await services.getDataWithToken(myDataUrl, token);
        // console.log(myDetails);
        if (!myDetails?.error) {
          dispath(addUserDetails(myDetails.results));
          // dispath(myDetails.results);
        }
        const data = await services.getDataWithToken(url, token);
        if (data?.error) return Alert.alert(data.message);
        console.log(data);

        setChatData(data.results);
      } catch (err) {
        console.log('ERRoR');
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    getInitialData();
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: colors.absBlack, paddingTop: 10}}>
        <StatusBar backgroundColor={colors.absBlack} barStyle={'light-content'} />
        {/* Topbar */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 20,
            marginBottom: 20,
          }}>
          <Atoms.Avatar
            height={20}
            width={20}
            isborder={true}
            borderColor={colors.white}
            padding={10}
            icon={Images.searchIcon}
          />
          <Text style={{color: colors.white, fontSize: 18, fontWeight: '600'}}>Home</Text>
          <Atoms.Avatar
            height={40}
            width={40}
            icon={Images.userIcon}
            // @ts-ignore
            onPress={() => {
              storage.delete('token');
              const reset = CommonActions.reset({
                index: 0,
                routes: [{name: 'beforeRoot'}],
              });
              nav.dispatch(reset);
            }}
          />
        </View>
        <View
          style={{
            backgroundColor: colors.white,
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            paddingTop: 20,
            flex: 1,
          }}>
          <Atoms.Divider
            width={50}
            height={3}
            // @ts-ignore
            marginBottom={10}
            alignSelf="center"
          />
          <ScrollView>
            {chatData.map((cardContent, index) => {
              let otherUserName = '';
              // @ts-ignore
              if (cardContent.sender.id !== userData.id) {
                // @ts-ignore
                otherUserName = cardContent.sender.id;
              } else {
                // @ts-ignore
                otherUserName = cardContent.receiver.name;
              }

              return (
                <ChatListContent
                  noOfUnread={5}
                  // @ts-ignore
                  desc={cardContent.title}
                  // title="Alex Linderson"
                  title={otherUserName}
                  image={Images.userIcon}
                  lastTime="2 min ago."
                  key={index}
                />
              );
            })}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}
