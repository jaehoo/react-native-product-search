// import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './components/Home';
import Producto from './components/Producto';


const Stack = createNativeStackNavigator();

export default function App() {

  return (

    <NavigationContainer>
      <Stack.Navigator options={{ headerShown: true }}>
        <Stack.Screen name="Home"
          component={Home}
        />
        <Stack.Screen name="Producto"
          component={Producto}
          options={{ title: 'Detalle Producto' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
