import 'react-native-gesture-handler';
import React, { useLayoutEffect } from 'react';
import {TouchableOpacity, Text, View, StyleSheet,  Button} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';


import { createStackNavigator } from '@react-navigation/stack';

import { 
  HeaderStyleInterpolators, 
  TransitionPresets, 
  CardStyleInterpolators 
} from '@react-navigation/stack';



const Stack = createStackNavigator();


const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#621FF7',
          },
          headerTintColor: '#fff',
          headerTitleStyle :{
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
            name="home" 
            component={Home} 
            options={{ 
              title: 'Home',
            }}
        />
        <Stack.Screen 
            name="wishlist" 
            component={Wishlist} 
            options={{ 
              title: 'Wishlist',
              cardShadowEnabled: true,
              cardOverlayEnabled: true,
              cardStyle: {
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20, 
              },
              // presentation: 'transparentModal',
              presentation: 'modal',

              // it will turn on/off transition of the screen
              // animationEnabled: false
              animationTypeForReplace: 'push',
              // gestureVelocityImpact: 0.9,
              // gestureEnabled: false,
              headerShown: true
            }}
        />
        <Stack.Screen 
            name="account" 
            component={Account} 
            options={{
              title: 'Profile',
              headerRight: () => (
                <Button
                  onPress={() => alert('This is a button!')}
                  title="setting"
                  color="#000"
                />
              ),
              cardStyleInterpolator: forFade
            }}
        />
        <Stack.Screen 
            name="orders" 
            component={Orders} 
            options={{ 
              title: 'Bucket',
              headerMode: 'float', // or 'screen'
              headerBackTitleVisible: true,
              headerBackTitle: 'back', // only work after headerBackTitleVisible
              headerBackTitleStyle: {
                fontWeight: 700,
                color: 'wheat',
                borderWidth: 2,
                borderColor: 'orange',
                paddingHorizontal: 6
              },

              // animation
              
              // headerStyleInterpolator: HeaderStyleInterpolators.forStatic,
              // ...TransitionPresets.SlideFromRightIOS,
              // cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid
              // gestureDirection: 'vertical'
            }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
