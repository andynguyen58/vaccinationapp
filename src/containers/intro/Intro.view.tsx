import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ParsedText from 'react-native-parsed-text';
import Colors from '../../constants/colors';
import Images from '../../constants/images';
import Strings from '../../constants/strings';
import Screens from '../../navigation/Screens'

const Intro = (props) => {
  const { navigation } = props

  const _onNextPressed = (): void => {
    navigation.navigate(Screens.BOTTOM_TABS)
  }

  return (
    <View style={styles.container}>
      <View style={styles.bgIntro}>
        <Images.bgIntro />
      </View>
      <ParsedText
        style={styles.title}
        parse={[
          {
            pattern: new RegExp(Strings.INTRO_TITLE_100, 'g'),
            style: styles.title100Percent,
          },
        ]}>
        {Strings.INTRO_TITLE}
      </ParsedText>
      <Text style={styles.titleDesscription}>{Strings.INTRO_DESCRIPTION}</Text>
      <View style={styles.footer}>
        <Images.bgButton />
        <TouchableOpacity style={styles.arrowIcon} onPress={_onNextPressed}>
          <Images.icArrowRight />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Intro;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    flex: 1,
    alignItems: 'center',
  },
  bgIntro: {
    marginTop: 58,
    backgroundColor: Colors.white,
    padding: 35,
    borderTopRightRadius: 200,
    borderTopLeftRadius: 200,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
  },
  title: {
    color: Colors.japaneseViolet,
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 38,
    marginBottom: 24,
  },
  title100Percent: {
    color: Colors.deepSaffron,
  },
  titleDesscription: {
    width: '100%',
    textAlign: 'center',
    color: Colors.gray,
    paddingHorizontal: 20,
    lineHeight: 25
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  arrowIcon: {
    position: 'absolute',
    bottom: 24,
  },
});
