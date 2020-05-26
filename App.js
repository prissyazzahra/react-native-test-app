import 'react-native-gesture-handler';
import * as React from 'react';

// React Navigation imports
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Container imports
import Home from './src/containers/Home/index';
import Password from './src/containers/Password/index';

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Home} />
          <Stack.Screen name="Password" component={Password}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}
