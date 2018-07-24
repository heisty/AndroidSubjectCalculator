import React from 'react';
import { DrawerLayoutAndroid,View,Text } from 'react-native';
import MainNavi from './config/routes';

class index extends React.Component{

	render(){
		 var navigationView = 
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
    </View>
		return(
		  <DrawerLayoutAndroid
          drawerWidth={300}
          drawerPosition={DrawerLayoutAndroid.positions.Left}
          renderNavigationView={() => navigationView}>
          <MainNavi />
         </DrawerLayoutAndroid>
			);
	}
}










import React, { Component } from 'react';
import { View,Text,StyleSheet,Dimensions,Image,TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		
		backgroundColor: '#FFFFFF',
	},
	name: {
		fontSize: 15,
		fontWeight: '100',
		color: '#FFFFFF',
		fontFamily: 'Arial',
	},
	names: {
		flex: 3,
		width: Dimensions.get('window').width,
		height: 120,
		backgroundColor: '#004435',
		alignItems: 'center',
		justifyContent: 'center',

	},
	image: {
		width: Dimensions.get('window').width/2,
		height: Dimensions.get('window').width/2,
	},
	logo: {
		flex: 5,
		alignItems: 'center',
		justifyContent: 'center',
	},
	start: {
		flex: 1,
		backgroundColor: '#00BB8D',
		alignItems: 'center',
		justifyContent: 'center',
		flexGrow: 1,
	},
	startkar: {
		fontSize: 20,
		color: '#FFFFFF',
	}
});

class CalculatorWelcome extends Component{
	
traverseUniverse=()=>{
	this.props.navigation.navigate('App');
}
	render(){
		return(
			<View style={styles.container}>
				<View style={styles.logo}>
					<Image style={styles.image} source={require('./images/logo.png')}/>
				</View>
				<View style={styles.names}>
					<Text style={styles.name}>John Paul Garcia</Text>
					<Text style={styles.name}>Jayric Buella</Text>
					<Text style={styles.name}>Joshua Pampag</Text>
					<Text style={styles.name}>Donnes Burcer</Text>
				</View>
				
					<TouchableOpacity onPress={this.traverseUniverse} style={styles.start}>
						<Text style={styles.startkar}>START KARUKURETOR</Text>
					</TouchableOpacity>
				
			</View>
			);
	}
}
CalculatorWelcome.propTypes = {
	navigation: PropTypes.object,
}
module.exports = CalculatorWelcome;