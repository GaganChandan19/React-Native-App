import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Homepage from './screens/Homepage';
import Country from './screens/Country';
import Weather from './screens/Weather';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Homepage"
          component={Homepage}
          options={{title: 'Homepage'}}
        />
        <Stack.Screen 
        name="Country" 
        component={Country} 
        options={{title: 'Country'}}
        />
        <Stack.Screen 
        name="Weather" 
        component={Weather} 
        options={{title: 'Weather'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack