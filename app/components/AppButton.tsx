import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

// components
import {AppText} from '../components';

// models
import {Button} from '../models';

// constants
import {constants, colors} from '../utils';

const {RegularText} = AppText;

const AppButton = ({name, isLoading=false, onPress=()=>{return}}: Button) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress()}>
      {isLoading && (
        <ActivityIndicator size="small" color={colors.primaryWhite} />
      )}
      <RegularText style={styles.labelStyle}>{name}</RegularText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: constants.buttonHeight,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primaryPurple,
    borderRadius:constants.buttonRadius
  },
  labelStyle: {
    color: colors.primaryWhite,
  },
});

export default AppButton;
