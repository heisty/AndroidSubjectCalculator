import React from 'react';
import { View,Dimensions } from 'react-native';
import styles from './styles.js';
import PropTypes from 'prop-types';

const Card = ({children,width,flex,backgroundColor}) => {
	//container controlling all , mother of all
	    let stylex = styles.card;
	  
		return(
             <View style={[stylex,{width,flex,backgroundColor}]}>{children}</View>
			);	
}

Card.propTypes = {
	children: PropTypes.any,
}

module.exports = Card;