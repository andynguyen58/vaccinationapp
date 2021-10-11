import React from 'react';
import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import Colors from '../../../constants/colors';

type IDigitProps = {
  value: number;
  style?: ViewStyle;
  label: string;
};

const Digit = (props: IDigitProps) => {  
  const {value, style, label} = props;
  const firstDigit = Math.round(value / 10);
  const secondDigit = value % 10;

  return (
    <View style={styles.container}>
      <View style={[styles.number, style]}>
        <View style={styles.wrapper}>
          <View style={styles.line}></View>
          <Text style={styles.text}>{`${firstDigit}`}</Text>
        </View>
        <View style={styles.wrapper}>
          <View style={styles.line}></View>
          <Text style={styles.text}>{`${secondDigit}`}</Text>
        </View>
      </View>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

export default Digit;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  number: {
    flexDirection: 'row',
    marginHorizontal: 9,
    marginBottom: 5,
  },
  wrapper: {
    backgroundColor: Colors.white01,
    borderRadius: 6,
    width: 35,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 3,
  },
  text: {
    color: Colors.white,
    fontSize: 24,
  },
  line: {
    height: 2,
    width: '100%',
    backgroundColor: Colors.japaneseViolet,
    position: 'absolute',
  },
  label: {
    fontSize: 14,
    color: Colors.white,
  },
});
