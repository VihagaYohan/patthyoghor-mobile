import React, {Component, useEffect} from 'react';
import {
  StyleSheet,
  FlatList,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
} from 'react-native';

// constants
import {fonts, colors, appStyles,constants} from '../utils';

// models
import {List as ListModal} from '../models';

// componetns
import {AppText, SectionTitle} from '../components';

const {BoldText, RegularText, MediumText} = AppText;
const {screenWidth,screenHeight} = constants

const List = ({data, ...otherProps}: ListModal) => {
  // console.log(data);
  return (
    <FlatList
      data={data}
      renderItem={({item, index}) => {
        console.log(item.books);
        let booksList = item.books;
        return (
          <View
            style={{
              width: '100%',
            }}>
            <SectionTitle title={item.name} />

            <FlatList
              data={booksList}
              horizontal
              renderItem={({item, index}) => {
                console.log(item);
                return (
                  <View
                    style={{
                      width: (screenWidth-(constants.innerGap*2))/2,
                      borderWidth: 1,
                      overflow:'hidden',
                      marginRight:constants.gap
                    }}>
                        <Image
                        style={{
                            width:'100%',
                            height:undefined,
                            aspectRatio:186/290,
                            borderRadius:constants.buttonRadius*2
                        }} source={{uri:item.imageUrl}}/>

                        <RegularText>{item.title}</RegularText>
                        <RegularText>{item.title}</RegularText>
                  </View>
                );
              }}
            />
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default List;
