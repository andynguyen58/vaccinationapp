import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Colors from '../constants/colors';
import Images from '../constants/images';
import Screens from './Screens';

const TabBar = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({name: route.name, merge: true});
          }
        };

        let Icon;
        switch (route.name) {
          case Screens.HOME:
            Icon = Images.icCategory;
            break;
          case Screens.CHART:
            Icon = Images.icChart;
            break;
          case Screens.CALENDAR:
            Icon = Images.icCalendar;
            break;
          case Screens.PROFILE:
            Icon = Images.icProfile;
            break;
          default:
            Icon = Images.icCategory;
            break;
        }

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={{flex: 1, alignItems: 'center'}}>
            <Icon />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 90,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TabBar;
