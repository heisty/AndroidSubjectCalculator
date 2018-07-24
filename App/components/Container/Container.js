import React from 'react';
import { View } from 'react-native';
import styles from './styles.js';
import PropTypes from 'prop-types';

const Container = ({children}) => {
	//container controlling all , mother of all
		return(
             <View style={styles.container}>{children}</View>
			);
	
}

Container.propTypes = {
	children: PropTypes.any,
}

module.exports = Container;