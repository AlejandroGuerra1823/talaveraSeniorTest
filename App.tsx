/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {ContainerStackNavigator} from './src/navigation/ContainerStackNavigation';
import {ContextProvider} from './src/context/ActionsContext';

function App(): React.JSX.Element {
  return (
    <ContextProvider>
      <NavigationContainer>
        <ContainerStackNavigator />
      </NavigationContainer>
    </ContextProvider>
  );
}

export default App;
