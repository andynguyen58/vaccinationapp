import moment from 'moment';
import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Colors from '../../constants/colors';
import DateTime from '../../constants/datetime';
import CountDown from './components/CountDown';
import Header from './components/Header';
import NearestPlace from './components/NearestPlace';
import Search from './components/Search';
import Symtons from './components/Symtons';

const mockDate = '2021/11/10 12:09:00';

const Home = () => {
  const [searchValue, setSearchValue] = useState<string>('');

  return (
    <ScrollView contentContainerStyle={styles.container} scrollEnabled={true}>
      <Header isHaveNewNotification={true} />
      <Search value={searchValue} onChangeText={setSearchValue} />
      <CountDown startValue={moment(mockDate, DateTime.general).unix()} />
      <NearestPlace />
      <Symtons />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingBottom: 30,
  },
});
