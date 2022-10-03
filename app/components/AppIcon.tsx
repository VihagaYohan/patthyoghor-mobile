import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Material_Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontawesome_Icon from 'react-native-vector-icons/FontAwesome';

// constants
import {colors} from '../utils';

// models
import {Icon} from '../models';

export const MaterialIcon = ({
  name,
  color = colors.primaryPurple,
  size = 25,
  onPress,
}: Icon) => {
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <Material_Icon name={name} size={size} color={color} />
    </TouchableOpacity>
  );
};

export const FontAwesomeIcon = ({
  name,
  color = colors.primaryPurple,
  size = 25,
  onPress,
}: Icon) => {
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <Fontawesome_Icon name={name} size={size} color={color} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default {
  MaterialIcon,
  FontAwesomeIcon,
};
