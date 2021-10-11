import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import Colors from '../../../constants/colors';
import Images from '../../../constants/images';
import Strings from '../../../constants/strings';

type ISearchProps = {
  value: string;
  onChangeText: (text: string) => void;
};

const Search = (props: ISearchProps) => {
  const {value, onChangeText} = props;
  return (
    <View style={styles.container}>
      <Images.icMagnifyingGlass />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.searchText}
        placeholder={Strings.SEARCH_PLACEHOLDER}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 24,
    borderRadius: 12,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 14
  },
  searchText: {
    fontSize: 20,
    fontWeight: '400',
    color: Colors.placeholder,
    marginLeft: 28
  },
});
