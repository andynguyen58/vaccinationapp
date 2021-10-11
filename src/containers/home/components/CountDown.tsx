import moment from 'moment';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../../../constants/colors';
import Strings from '../../../constants/strings';
import Digit from './Digit';

type ICountDownProps = {
  startValue: number;
};

const CountDown = (props: ICountDownProps) => {
  const {startValue} = props;
  const currentTime = moment().seconds();
  const diffTime = startValue - currentTime;
  const duration = moment.duration(diffTime * 1000, 'milliseconds');
  const days = duration.days();
  const hours = duration.hours();
  const minutes = duration.minutes();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{Strings.COUNTDOWN_TITLE}</Text>
      <View style={styles.digitContainer}>
        <Digit value={days} label={Strings.DAYS} />
        <Digit value={hours} label={Strings.HOURS} />
        <Digit value={minutes} label={Strings.MINUTES} />
      </View>
    </View>
  );
};

export default CountDown;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: Colors.japaneseViolet,
    paddingVertical: 15,
    alignItems: 'center',
    marginVertical: 14,
    borderRadius: 18,
  },
  title: {
    fontSize: 22,
    color: Colors.white,
    marginBottom: 24,
  },
  digitContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
