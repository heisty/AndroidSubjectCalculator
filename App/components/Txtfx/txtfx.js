import React from 'react';
import { Text } from 'react-native';
import styles from './styles';

const txtfx = ({children,fontFamily,fontWeight,color}) => <Text style={[styles.text,{fontFamily,fontWeight,color}]}>{children}</Text>;
module.exports = txtfx;