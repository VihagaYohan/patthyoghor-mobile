/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import React, {type PropsWithChildren,useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  LogBox
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './app/screens/HomeScreen';

// navigators
import {BottomNavigator} from './app/navigators';

const App = () => {

  useEffect(()=>{
    LogBox.ignoreLogs(['VirtualizedLists should never be nested'])
  },[])
  
  return (
    <NavigationContainer>
      <BottomNavigator />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
