import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Details from '../Details';
import Details2 from '../Details2';

export default function TopBar() {

    const TopTab = createMaterialTopTabNavigator();

    return (
        <TopTab.Navigator>
            <TopTab.Screen name='Detail1' component={Details}/>
            <TopTab.Screen name='Detail2' component={Details2}/>
        </TopTab.Navigator>
    )
}