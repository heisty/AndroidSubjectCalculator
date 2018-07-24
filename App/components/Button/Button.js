import React from 'react';
import styles from './styles';
import { TouchableOpacity,View,Image,Text } from 'react-native';
const Button = ({children,btnText,backgroundColor,btnImage}) => {
	let btnLink = './images/home.png';

	return(
		<View style={styles.container}>
			<TouchableOpacity style={[styles.btnTouch,{backgroundColor}]}>
				<Image source={require(btnLink)}/>
				<Text style={styles.btnText}>{btnText}</Text>
			</TouchableOpacity>
		</View>
		);

	//TODO SEPARATE ICONS!!!
}
module.exports = Button;