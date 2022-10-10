import React, {Component, useEffect} from 'react';
import {StyleSheet, View, Text, Alert} from 'react-native';
import {responsiveScreenFontSize} from 'react-native-responsive-dimensions';

// components
import {
  AppText,
  AppWrapper,
  AppIcon,
  AppButton,
  Carousel,
  SectionTitle,
  List,
} from '../components';

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

const TRENDING = [
  {
    _id: '632fbcabb2f3035f65c1dce2',
    name: 'Fantacy',
    isDeleted: true,
    createdAt: '2022-09-25T02:27:55.091Z',
    updatedAt: '2022-09-25T02:30:09.304Z',
    __v: 0,
    books: [
      {
        _id: '633174954e0170d5a117d755',
        title: 'Sample',
        authors: ['633171faf4b50ba3b3492c22'],
        genere: '632fbcabb2f3035f65c1dce2',
        language: 'hindi',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
        __v: 0,
        isTrending: true,
        imageUrl:
          'http://192.168.1.2:5000/uploads/2022-10-05T07-18-31.286Zhobbit.png',
        updatedAt: '2022-10-05T07:18:31.301Z',
      },
    ],
  },
  {
    _id: '63427bc0cfb22b040e8c4bf3',
    name: 'Fantacy',
    isDeleted: true,
    createdAt: '2022-09-25T02:27:55.091Z',
    updatedAt: '2022-09-25T02:30:09.304Z',
    __v: 0,
    books: [
      {
        _id: '633174954e0170d5a117d755',
        title: 'Sample',
        authors: ['633171faf4b50ba3b3492c22'],
        genere: '63427bc0cfb22b040e8c4bf3',
        language: 'hindi',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
        __v: 0,
        isTrending: true,
        imageUrl:
          'http://192.168.1.2:5000/uploads/2022-10-05T07-18-31.286Zhobbit.png',
        updatedAt: '2022-10-05T07:18:31.301Z',
      },
    ],
  },
  {
    _id: '633d56be8ec9149f45183294',
    name: 'Adventure',
    isDeleted: true,
    createdAt: '2022-09-25T02:27:55.091Z',
    updatedAt: '2022-09-25T02:30:09.304Z',
    __v: 0,
    books: [
      {
        _id: '633d56b38ec9149f45183293',
        title: 'Hobbit',
        authors: ['633171faf4b50ba3b3492c22'],
        genere: '633d56be8ec9149f45183294',
        language: 'hindi',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
        __v: 0,
        isTrending: true,
        imageUrl:
          'http://192.168.1.2:5000/uploads/2022-10-05T07-13-40.986Zhobbit.png',
        updatedAt: '2022-10-05T07:13:41.013Z',
      },
      {
        _id: '633d56ef8ec9149f45183295',
        title: 'Hobbit 2',
        authors: ['633171faf4b50ba3b3492c22'],
        genere: '633d56be8ec9149f45183294',
        language: 'hindi',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
        __v: 0,
        isTrending: true,
        imageUrl:
          'http://192.168.1.2:5000/uploads/2022-10-05T07-13-40.986Zhobbit.png',
        updatedAt: '2022-10-05T07:13:41.013Z',
      },
    ],
  },
];

const Screen = () => {
  return (
    <AppWrapper isScroll={true} showWelcome={true}>
      <MediumText style={styles.title}>Find your favorite books</MediumText>

      <Carousel data={DATA} />

      <SectionTitle title="Trending Books" />

      <List data={TRENDING} horizontal={false} nestedscrollenabled={true}/>
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
