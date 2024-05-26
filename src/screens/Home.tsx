import {View, Text, SafeAreaView, StatusBar, ScrollView, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import colors from '../common/colors';
import Atoms from '../components/Atoms';
import Images from '../assets';
import ChatListContent from '../components/ChatListContent';
import services from '../common/services';
import {useSelector} from 'react-redux';
import apis from '../common/apis';

export default function Home() {
  //@ts-ignore
  const token = useSelector(state => state.token);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function getInitialData() {
      setLoading(true);
      const url = apis.initialChatData;
      try {
        console.log(token);
        const data = await services.getDataWithToken(url, token);
        if (data?.error) return Alert.alert(data.message);
        const result = data?.results;
        console.log(result);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    getInitialData();
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: colors.absBlack, paddingTop: 40}}>
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
          <Atoms.Avatar height={40} width={40} icon={Images.userIcon} />
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
            {[1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 11, , 1, 1, 1, 1].map((cardContent, index) => (
              <ChatListContent
                noOfUnread={5}
                desc="How are you today?"
                title="Alex Linderson"
                image={Images.userIcon}
                lastTime="2 min ago."
                key={index}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}
