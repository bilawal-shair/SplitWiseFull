import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './screens/MainScreen';
import SplashScreen from './screens/SplashScreen';
import { useEffect, useState } from 'react';
import SignupScreen from './screens/SignupScreen';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import AddGroup from './screens/AddGroup';
import AllGroupScreen from './screens/AllGroupScreen';
import OutStandingBalanceScreen from './screens/OutstandingBalanceScreen';
import GroupOweScreen from './screens/GroupOweScreen';
import ForgetPassword from './screens/ForgetPassword';
import ThatOweScreen from './screens/ThatOweScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [ showSplashScreen, setshowSplashScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
          setshowSplashScreen(false);
    }, 1000); 
  },[]);

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName='Dashboard' screenOptions={{headerShown: false}}>
        {showSplashScreen ? (<Stack.Screen name='Splash' component={SplashScreen} />) : null}
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Addgroup" component={AddGroup} />



        <Stack.Screen name="AllGroupScreen" component={AllGroupScreen}/>
        <Stack.Screen name="outStandingBalanceScreen" component={OutStandingBalanceScreen}/>
        <Stack.Screen name="GroupOweScreen" component={GroupOweScreen}/>
        <Stack.Screen name="ThatOweScreen" component={ThatOweScreen}/>
        <Stack.Screen name="Reset Password" component={ForgetPassword} options={{headerShown: true}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});


