import { NavigationContainer } from '@react-navigation/native';
import type { Node } from 'react';
import React from 'react';
import RootStack from './src/navigation';


const App: () => Node = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

export default App;
