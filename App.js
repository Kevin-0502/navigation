import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import colors from './src/data/colors';
import Home from './src/components/Home';
import Details from './src/components/Details';
import Login from './src/components/Login';
import MaterialTab from './src/components/navigation/MaterialTab';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function App() {
  
  const Stack=createNativeStackNavigator()

  return (

      <NavigationContainer>
        <Stack.Navigator
        initialRouteName="Login"
        >
          <Stack.Screen name="Login" component={Login} options={{headerStyle:styles.header}}/>
          <Stack.Screen name="TabBarM" component={MaterialTab} options={{headerStyle:styles.header}}/>
        </Stack.Navigator>
      </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    backgroundColor: colors.SecondaryColor
  }
});
