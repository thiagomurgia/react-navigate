import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from '../pages/HomeScreen'
import ContinueScreen from '../pages/ContinueScreen'
import RememberScreen from '../pages/RememberScreen';
import RegisterScreen from '../pages/RegisterScreen';

const MainStack = createStackNavigator();

export default () =>{
    return (
        <MainStack.Navigator>
            
            <MainStack.Screen
                name="Home"
                component={HomeScreen}
                options={{headerShown: false}} />
            
            <MainStack.Screen
                name="ContinueScreen"
                component={ContinueScreen}
                />
            
            <MainStack.Screen
                name="RememberScreen"
                component={RememberScreen}
                />

            <MainStack.Screen
                name="Register"
                component={RegisterScreen}/>
        
        </MainStack.Navigator>
    )
}