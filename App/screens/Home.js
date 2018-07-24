import React, { Component } from 'react';
import { Dimensions,View } from 'react-native';
import Container from '../components/Container';
import Card from '../components/Card';
import Txtfx from '../components/Txtfx';
import Button from '../components/Button';

class Home extends Component{
	
	render(){
		return(
              <Container>
              	<Card width={Dimensions.get('window').width} flex={2} backgroundColor="#C0004B">
                   <View style={{alignItems: 'flex-start',justifyContent: 'center',marginLeft: '5%',flexGrow: 1}}><Txtfx fontFamily="Roboto" fontWeight="600" color="white">JNL SALON</Txtfx></View>
              	</Card>

              	<Card width={Dimensions.get('window').width} flex={1} backgroundColor="#FFFFFF">
              		<Txtfx color="black">NOTIFICATIONS DITO</Txtfx>
              	</Card>
              	<Card width={Dimensions.get('window').width} flex={6} backgroundColor="#FF2B97">
              			<Txtfx color="black">Mga Promo at Features dito pwede swipe</Txtfx>
              	</Card>
              	<Card width={Dimensions.get('window').width} flex={1} backgroundColor="#FFFFFF">
              		<Txtfx color="black">DITO NAMAN EWAN HAHA</Txtfx>
              	</Card>
              	<Card width={Dimensions.get('window').width} flex={10} backgroundColor="#EFE9EF">
              	<View style={{flex:1,flexDirection: 'row'}}>
                   <Button btnText="Salon Services" btnImage="home" backgroundColor="gray"/><Button btnText="Home Service" backgroundColor="red"/>
                 </View>
                 <View style={{flex:1,flexDirection: 'row'}}>
                   <Button btnText="Crew" backgroundColor="orange"/><Button btnText="Feedback" backgroundColor="violet"/>
                 </View>
              	
              	</Card>
              </Container>
			);
	}
}

module.exports = Home;