import React, {Component} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  View,
  ScrollView,
} from 'react-native';

// utils
import {constants} from '../utils';

const {screenWidth, screenHeight} = constants;

interface Wrapper {
  children: any;
  isScroll?: boolean;
}

const AppWrapper = ({children, isScroll = false}: Wrapper) => {
  return (
    <SafeAreaView style={styles.parentContainer}>
      {isScroll == true ? (
        <ScrollView style={styles.childContainer}>{children}</ScrollView>
      ) : (
        <View style={styles.childContainer}>{children}</View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    width: screenWidth,
    height: screenHeight,
  },
  childContainer:{
    paddingHorizontal:constants.innerGap
  }
});

export default AppWrapper;
