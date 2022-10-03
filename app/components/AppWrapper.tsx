import React, {Component} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  View,
  ScrollView,
} from 'react-native';

// components
import {Avatar, AppText,AppIcon} from '../components';

// utils
import {constants, colors} from '../utils';

const {screenWidth, screenHeight} = constants;
const {BoldText} = AppText;
const {FontAwesomeIcon} = AppIcon

interface Wrapper {
  children: any;
  isScroll?: boolean;
  showHeader?: boolean;
  showWelcome?: boolean;
}

const AppWrapper = ({
  children,
  isScroll = false,
  showHeader = false,
  showWelcome = false,
}: Wrapper) => {
  return (
    <SafeAreaView style={styles.parentContainer}>
      {isScroll == true ? (
        <React.Fragment>
          {showWelcome == true && (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: constants.gap,
                paddingHorizontal: constants.innerGap,
              }}>
              <BoldText
                style={{
                  color: colors.primaryGray,
                }}>
                Hi, John Doe
              </BoldText>

                <View style={{flexDirection:'row'}}>
                  <FontAwesomeIcon name="shopping-cart" color={colors.primaryGray} size={30}
                  style={{
                    marginRight:10
                  }}/>
                  <Avatar />
                </View>
              
            </View>
          )}

          <ScrollView style={styles.childContainer}>{children}</ScrollView>
        </React.Fragment>
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
  childContainer: {
    paddingHorizontal: constants.innerGap,
  },
});

export default AppWrapper;
