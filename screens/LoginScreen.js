import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { Button, Icon, Input } from '@rneui/themed';
import axios from 'axios';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ForgetPassword from './ForgetPassword';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage as rfp, RFValue as rfv } from 'react-native-responsive-fontsize';

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const [hidePass, setHidePass] = useState(false);
   
    const handleLogin = () => {
        // Call the login function
        login(email, password);
      };

      const login = async (email, password) => {
        try {
          const response = await axios.post('http://20.193.132.20:83/api/User/Login', { email, password });
          // Process the response and handle success
          if(response.data === true){
           navigation.navigate('Dashboard')
          console.log(response.data);}
          else{
            alert("Invalid email or password")
          }
          }catch (error) {
          // Handle error
          console.log('Login failed');
          console.log(error);
        }
      };
    

  return (
    <SafeAreaView style={styles.container}>
    <KeyboardAwareScrollView showsVerticalScrollIndicator={false} enableAutomaticScroll>
      {/* <StatusBar barStyle = "dark"/> */}
        <TouchableOpacity  onPress={() =>navigation.navigate("Main")}>
            <AntDesign 
                name="arrowleft" size={24} color="black" 
            />
        </TouchableOpacity>
       <Text style={{fontSize:rfp(4), paddingTop:rfv(40)}}>Welcome back to Splitwise!</Text>
       
        <View style={{paddingTop:rfv(30)}}>
            <Text style={{fontSize: rfp(2.2), marginLeft:rfv(8)}}>Email address</Text>
            <Input
                autofocus
                type="email"
                value={email}
                onChangeText ={(text) => setEmail(text)}
            />
        
            <Text style={{fontSize: rfp(2.2), marginLeft:rfv(4)}}> Password</Text>
            <View style={{flexDirection:"row", }}>
                <Input
                autofocus
                type='password'
                value={password}
                secureTextEntry={hidePass}
                onChangeText ={(text) => setpassword(text)}
                />
                <TouchableOpacity> 
                    <Ionicons  
                        name={hidePass ? 'eye-off' : 'eye'}
                        size={24} 
                        color="black" 
                        style={{
                            position: 'absolute',
                            right: 20,
                        }} 
                        onPress={() => setHidePass(!hidePass)} 
                    />
                </TouchableOpacity>
                
                
            </View>
        </View>
       
        <View>
            <Button
                containerStyle={styles.Button}
                title="Log in"
                color="#11C08E"
                onPress={handleLogin}
            />
        </View>
        <View>
         <Text style={{textAlign:"center", fontSize:16, padding:25}} onPress={() => navigation.navigate('Reset Password')}> Forgot your password? </Text>
        </View>
    </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
      flex: 1,
      //flexDirection:'column',
      backgroundColor: "white",
      padding:25,
      },
      Button:{
        alignSelf: "center",
        width:120,
        paddingTop:25, 
      }
})
      
  

  
 