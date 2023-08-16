import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Home2 from '../Home2'
import Home from '../Home'
import TopBar from './TopBar'

export default function MaterialTab() {

    const TabM=createMaterialBottomTabNavigator()

    return (
        <TabM.Navigator
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: '#694fad' }}
        >
            <TabM.Screen name='Home' component={Home2}/>
            <TabM.Screen name='Detail' component={TopBar}/>
            <TabM.Screen name='Movies' component={Home}/>
        </TabM.Navigator>
    )
}