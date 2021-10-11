import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import Colors from '../../../constants/colors';
import Strings from '../../../constants/strings';

const mockData = [
  {
    id: 0,
    title: 'Fever',
    image: require('../../../../assets/img_sympton_fever.png'),
  },
  {
    id: 1,
    title: 'Coughing',
    image: require('../../../../assets/img_sympton_fever.png'),
  },
  {
    id: 2,
    title: 'Sore Throat',
    image: require('../../../../assets/img_sympton_fever.png'),
  },
  {
    id: 3,
    title: 'Fever',
    image: require('../../../../assets/img_sympton_fever.png'),
  },
  {
    id: 4,
    title: 'Fever',
    image: require('../../../../assets/img_sympton_fever.png'),
  },
  {
    id: 5,
    title: 'Fever',
    image: require('../../../../assets/img_sympton_fever.png'),
  },
];

const Symtons = () => {
  const _renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.symptonTitle}>{item.title}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{Strings.SYMPTONS}</Text>
      <FlatList
        data={mockData}
        keyExtractor={item => item.id.toString()}
        renderItem={_renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

export default Symtons;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  image: {
    width: 110,
    height: 110,
  },
  symptonTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.black,
  },
  itemContainer: {
    borderRadius: 20,
    borderColor: Colors.white,
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 11,
    width: 127,
  },
  separator: {
    width: 16,
  },
  title: {
    fontSize: 22,
    color: Colors.black,
    marginTop: 42,
    marginBottom: 20,
  },
});
