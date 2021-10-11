import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../containers/home';
import Intro from '../containers/intro';
import Screens from './Screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabBar from './TabBar';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <TabBar {...props} />}
      initialRouteName={Screens.HOME}>
      <Tab.Screen name={Screens.HOME} component={Home} />
      <Tab.Screen name={Screens.CHART} component={Home} />
      <Tab.Screen name={Screens.CALENDAR} component={Home} />
      <Tab.Screen name={Screens.PROFILE} component={Home} />
    </Tab.Navigator>
  );
};

const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={Screens.INTRO} component={Intro} />
      <Stack.Screen name={Screens.BOTTOM_TABS} component={BottomTabs} />
    </Stack.Navigator>
  );
};

export default RootStack;
