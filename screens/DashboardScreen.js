import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import GroupScreen from './GroupScreen';
import FriendScreen from './FriendScreen';
import ActivityScreen from './ActivityScreen';
import AccountsScreen from './AccountsScreen';
import { Colors } from 'react-native/Libraries/NewAppScreen';



const Tab = createBottomTabNavigator();

const DashboardScreen = () => {
    return (
            <Tab.Navigator screenOptions={{
              headerShown: false, 
              tabBarStyle:{height:50}, 
              tabBarActiveTintColor:'#11C08E',
              tabBarInactiveTintColor:Colors.primary2}}>
                <Tab.Screen 
                    name='Groups' 
                    component={GroupScreen}
                    options={{ 
                        tabBarIcon: ({ color, size }) => (
                          <MaterialIcons name="group" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen 
                    name='Friends'
                    component={FriendScreen} 
                    options={{ 
                        tabBarIcon: ({ color, size }) => (
                          <Ionicons name="person" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen 
                    name='Activity'
                    component={ActivityScreen} 
                    options={{ 
                        tabBarIcon: ({ color, size }) => (
                          <MaterialIcons name="local-activity" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen 
                    name='Account'
                    component={AccountsScreen} 
                    options={{
                        headerShown: true, 
                        tabBarIcon: ({ color, size }) => (
                          <MaterialIcons name="account-circle" color={color} size={size} />
                        ),
                    }}
                />
               
            </Tab.Navigator>
      
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    text: {
        fontSize:20,
    },
});

export default DashboardScreen;






// import { StyleSheet} from 'react-native'
// import React from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { MaterialIcons, Ionicons } from '@expo/vector-icons';
// import GroupScreen from './GroupScreen';
// import FriendScreen from './FriendScreen';
// import ActivityScreen from './ActivityScreen';
// import AccountsScreen from './AccountsScreen';

// const Tab = createBottomTabNavigator();

// const DashboardScreen = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <Tab.Navigator initialRouteName='Groups'>
//         <Tab.Screen name="Groups" component={GroupScreen}
//           options={{
//             tabBarLabel: 'Groups',
//             tabBarIcon: ({ color, size }) => (
//               <MaterialIcons name="groups" size={24} color="#11C08E" />
//             ),
//           }}
//         />
//         <Tab.Screen name="Friends" component={FriendScreen}
//           options={{
//             tabBarLabel: 'Friends',
//             tabBarIcon: ({ color, size }) => (
//               <Ionicons name="person" size={24} color="gray" />
//             ),
//           }}
//         />
//         <Tab.Screen name="Activity" component={ActivityScreen} 
//           options={{
//             tabBarLabel: 'Activity',
//             tabBarIcon: ({ color, size }) => (
//               <MaterialIcons name="local-activity" size={24} color="gray" />
//             ),
//           }}
//         />
//         <Tab.Screen name="Account" component={AccountsScreen} 
//           options={{
//             tabBarLabel: 'Account',
//             tabBarIcon: ({ color, size }) => (
//               <MaterialIcons name="account-circle" size={24} color="gray" />
//             ),
//           }}
//         /> 
//       </Tab.Navigator>
      
//     </SafeAreaView>
      
//   )
// }

// export default DashboardScreen

// const styles = StyleSheet.create({
//   container:{
//     position: 'absolute',
//     width: '100%',
//     bottom: 0,   
//   }, 
// })