import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Lista from './src/views/Lista';
import Contato from './src/views/Contato';
const Stack = createStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Contatos" component={Lista} />
				<Stack.Screen name="Detalhes" component={Contato} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
