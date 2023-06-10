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
import ForgetPassword from './screens/ForgetPassword';
import { Provider } from 'react-redux';
import store from './store';
import GroupSettle from './screens/GroupSettle';
import AddExpense from './component/AddExpense';

const Stack = createNativeStackNavigator();

export default function App() {
  const [ showSplashScreen, setshowSplashScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
          setshowSplashScreen(false);
    }, 1000); 
  },[]);
  return (
    <Provider store={store}>
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator screenOptions={{headerShown: false}}  initialRouteName='Dashboard'>
        {showSplashScreen ? (<Stack.Screen name='Splash' component={SplashScreen} />) : null}
        <Stack.Screen name="AddExpense" component={AddExpense} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Addgroup" component={AddGroup} />
        <Stack.Screen name="GroupSettle" component={GroupSettle} />
        <Stack.Screen name="Reset Password" component={ForgetPassword} options={{headerShown: true}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({});


