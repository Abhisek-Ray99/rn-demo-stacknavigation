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


const Home = ({navigation}) => {

    useLayoutEffect(() => {
      navigation.setOptions({
          headerLeft: () => (
              <View
                  style={{
                      marginLeft: 10
                  }}
              >
                  <TouchableOpacity
                      style={styles.rightbutton}
                      onPress={() => navigation.navigate('wishlist')}
                  >
                      <Text style={styles.rightTitle}>wishlist</Text>
                  </TouchableOpacity>
              </View>
          )
      });
  }, [navigation])


  return(
    <View
      style={styles.container}
    >
      <TouchableOpacity 
        style={styles.touchbutton}
        onPress={() => navigation.navigate('orders')}
      >
        <Text style={styles.cTitle}>Go to Order Section</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={[styles.touchbutton, {backgroundColor: '#000', borderColor: ''}]}
        onPress={() => navigation.navigate('account')}
      >
        <Text style={[styles.cTitle, {color: '#fff'}]}>Go to Account</Text>
      </TouchableOpacity>
    </View>
  )
}

const Orders = ({navigation}) => {
  return (
    <View
    style={styles.container}
    >
      <TouchableOpacity 
          style={styles.touchbutton}
          onPress={() => navigation.navigate('account')}
      >
        <Text style={styles.cTitle}>Go to Account</Text>
      </TouchableOpacity>
    </View>
  )
}


const Wishlist = ({navigation}) => {
  return(
    <View>
      <TouchableOpacity 
        onPress={() => navigation.navigate('back to HomeScreen')}
      >
        <Text>Go to Profile</Text>
      </TouchableOpacity>
    </View>
  )
}

const Account = ({navigation}) => {
  return(
    <View
      style={[styles.container, {}]}
    >
      <TouchableOpacity>
        <Text style={{textAlign: 'center'}}>This is Account Section</Text>
      </TouchableOpacity>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  )
}

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


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  touchbutton: {
    backgroundColor: '#F5E9DB',
    padding: 10,
    borderRadius: 14,
    alignItems: 'center',
    padding: 10,
    borderWidth: 2,
    borderColor: 'orange',
    marginVertical: 10
  },
  cTitle: {
    textAlign: 'center',
    color: '#FFA764',
    fontSize: 20,
    fontWeight: 'bold',
  },
  rightbutton: {
    backgroundColor: '#B9FFDF',
    padding: 6,
    borderRadius: 7,
  },
  rightTitle: {
      textAlign: 'center',
      color: '#00D300',
      fontSize: 20,
      fontWeight: 'bold',
  },
  
})

