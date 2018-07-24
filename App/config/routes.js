import CalculatorWelcome from '../screens/CalculatorWelcome';
import App from '../screens/App';
import { createStackNavigator } from 'react-navigation';

export default createStackNavigator({
	Home: {
		screen: CalculatorWelcome,		
	},
	App: {
		screen: App,
		navigationOptions: {
			header: ()=> null
		}
	}
});