import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Colors from '../../../constants/colors';
import Images from '../../../constants/images';

type IHeaderProps = {
  isHaveNewNotification: boolean;
};

const Header = (props: IHeaderProps) => {
  const {isHaveNewNotification} = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Images.icHamburger />
      </TouchableOpacity>
      <TouchableOpacity style={styles.bellContainer}>
        <Images.icBell />
        {isHaveNewNotification && <View style={styles.circle} />}
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    marginTop: 65,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bellContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  circle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    borderColor: Colors.white,
    borderWidth: 2 ,
    backgroundColor: Colors.deepSaffron,
    position: 'absolute',
    top: 13,
    right: 13
  },
});
