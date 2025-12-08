import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/Login';
// Importe outras telas aqui


const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ headerShown: false }}
                />
                { /* Adicione outras telas aqui */ }
                </ Stack.Navigation>
                </NavigationContainer>

    );
};

export default Navigation;
