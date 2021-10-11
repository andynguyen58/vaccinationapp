import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../../../constants/colors';
import Images from '../../../constants/images';
import Strings from '../../../constants/strings';

const NearestPlace = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titleDes}>{Strings.NEAREST_DES}</Text>
        <Text style={styles.title}>{Strings.NEAREST_TITLE}</Text>
      </View>
      <View style={styles.map}>
        <Images.bgMap />
        <Images.icHospitalMarker style={styles.marker} />
      </View>
    </View>
  );
};

export default NearestPlace;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 146,
    borderWidth: 7,
    borderColor: Colors.white,
    paddingLeft: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  titleDes: {
    fontSize: 20,
    color: Colors.gray,
  },
  title: {
    fontSize: 20,
    color: Colors.japaneseViolet,
  },
  marker: {
    position: 'absolute',
  },
  map: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
