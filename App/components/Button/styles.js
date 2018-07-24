import { StyleSheet,Dimensions } from 'react-native';
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	btnTouch: {
		width: Dimensions.get('window').width/2,
		height: Dimensions.get('window').height/4,
		backgroundColor: 'red',
		alignItems: 'center',
		justifyContent: 'center',
	},
	btnText: {

	},
	btnIcon: {

	}

});

module.exports = styles;