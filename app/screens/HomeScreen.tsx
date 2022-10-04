import React, {Component, useEffect} from 'react';
import {StyleSheet, View, Text, Alert} from 'react-native';
import {responsiveScreenFontSize} from 'react-native-responsive-dimensions';

// components
import {AppText, AppWrapper, AppIcon, AppButton, Carousel} from '../components';

// constants
import {colors} from '../utils';

const {BoldText, RegularText, MediumText} = AppText;
const {MaterialIcon} = AppIcon;

const DATA = [
  {
    id: '1',
    url: '../assets/images/image_1.png',
  },
  {
    id: '1',
    url: '../assets/images/image_2.png',
  },
  {id: '1', url: '../assets/images/image_3.png'},
];

const Screen = () => {
  return (
    <AppWrapper isScroll={true} showWelcome={true}>
      <MediumText style={styles.title}>Find your favorite books</MediumText>

      <Carousel data={DATA} />
    </AppWrapper>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: responsiveScreenFontSize(3),
    color: colors.primaryBlack,
  },
});

export default Screen;
