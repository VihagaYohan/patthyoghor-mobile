import React, {Component, useEffect} from 'react';
import {StyleSheet, View, Text, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

// components
import {AppText, AppWrapper, AppIcon,AppButton} from '../components';

const {MaterialIcon} = AppIcon

const Screen = () => {
  return (
    <AppWrapper isScroll={true}>
        <AppButton
        name="Sign In"
        isLoading={false}
        onPress={()=>Alert.alert('hello')}
      />
    </AppWrapper>
  );
};

const styles = StyleSheet.create({});

export default Screen;
