import { Alert, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context' 
import { Linking } from 'react-native'
import { Button, Input } from '@rneui/themed';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFPercentage as rfp, RFValue as rfv} from 'react-native-responsive-fontsize';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const SignupScreen = ({navigation}) => {
    
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mobileNumber, setMobileNumber] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [hidePass, setHidePass] = useState(false);
    const [error, setError] = useState({field: '', message:''});

const signup = async (firstname,lastname ,email, password, confirmpassword, mobileNumber) => {
    try {
      const response = await axios.post('http://45.115.86.126:83/api/User/Register', { firstname, lastname, email, password, mobileNumber, confirmpassword });
      console.log(response)
      console.log(firstname, lastname, email, password, mobileNumber, confirmpassword);

      if(response.data ===  null){
             alert("invalid request")
      }else{
        navigation.navigate("Dashboard")
      }
    } catch (error) {
      console.error('Signup failed');
      console.error(error);
    }
  };

    const handleSignup = () => {

        let loginError = {field:'', message:''};
         let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
         let check = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
        
         if (firstname === ''&& lastname === ''&& email ==='' && password ==='' && confirmpassword ==='' && mobileNumber === ''){
            loginError.field = 'name';
            loginError.message = 'Email is required!';
            Alert.alert('OOPS!', 'Please enter the fields')
            setError(loginError);
         }
         else if (firstname === ''){
            loginError.field = 'firstname';
            loginError.message = 'Email is required!';
            Alert.alert('OOPS!', 'first Name is required!')
            setError(loginError);
         }
         else if (lastname === ''){
            loginError.field = 'lastname';
            loginError.message = 'Email is required!';
            Alert.alert('OOPS!', 'last Name is required!')
            setError(loginError);
         }
         else if (email === ''){
            loginError.field = 'email';
            Alert.alert('OOPS!','email is required!')
            setError(loginError);
         }
         else if (reg.test(email) === false){
            Alert.alert('OOPS!',"Enter valid email");
         }
         else if (mobileNumber === ''){
            loginError.field = 'mobilenumber';
            Alert.alert('OOPS!',' Number is required!')
            setError(loginError);
         }
         else if (password === ''){
            loginError.field = 'password';
            Alert.alert('OOPS!','password is required!')
            setError(loginError);
         }
         else if (password.match(check) === false) {
            Alert.alert('OOPS!',"Your password is strong.");
         }
         else if (confirmpassword === ''){
            loginError.field = 'password';
            Alert.alert('OOPS!','Please confirm your password')
            setError(loginError);
         }
         else if (confirmpassword !== password){
            loginError.field = 'pass';
            Alert.alert('OOPS!','Please enter same password!')
            setError(loginError);
         }
         else
         { 
          signup(firstname, lastname, email, password, mobileNumber, confirmpassword);
         } 
    };
       
    return (

<SafeAreaView 
  style={styles.container} >
    <KeyboardAwareScrollView
      showsVerticalScrollIndicator={false}
      enableAutomaticScroll
    >
    <>
    <View style={{flexDirection:"row"}}>
        <Image
        style={{width:60, height:60}}
        source={{
                uri:"https://d1myhw8pp24x4f.cloudfront.net/software_logo/1551873717_splitwise-logo_mid.png"
                }}
        />
        <Text style={{fontSize:20, marginTop:20, padding: 10}}>Splitwise</Text>
        </View>
        <View style={{paddingTop:15}}>
        <Input
            placeholder='First Name'
            autofocus
            type="text"
            value={firstname}
            onChangeText ={(text) => setFirstName(text)}      
        />
        <Input
            placeholder='Last Name'
            autofocus
            type="text"
            value={lastname}
            onChangeText ={(text) => setLastName(text)}      
        />
        <Input
            placeholder='Email address'
            type="text"
            value={email}
            onChangeText ={(email) =>setEmail(email)}
        />
         <Input
            keyboardType="phone-pad"
            placeholder="Enter mobile number"
            value={mobileNumber}
            onChangeText={(mobileNumber) => setMobileNumber(mobileNumber)}
            maxLength={11} 
        />
        <View style={{flexDirection:"row", }}>
        <Input
            placeholder='Password'
            type="text"
            value={password}
            secureTextEntry={hidePass}
            onChangeText ={(password) => setPassword(password)}
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
        <View style={{flexDirection:"row", }}>
        <Input
            placeholder='Confirm password'
            type="text"
            value={confirmpassword}
            secureTextEntry={hidePass}
            onChangeText ={(password) => setConfirmPassword(password)}
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
        <View style={{flexDirection:"row", justifyContent:"space-evenly"}}>
        <Button
            raised
            buttonStyle={{
            backgroundColor: 'white',
                         }}
            onPress={() =>navigation.navigate("Main")}
            containerStyle={styles.Button}
            title="Back"
            type='solid'
            titleStyle={{
                color: '#60615B',   
                        }}
         />
        <Button
            buttonStyle={{
            backgroundColor: '#11C08E',
                         }}
            containerStyle={styles.Button}
            title="Done"
            type='solid'
            onPress={handleSignup}
        />
        </View>
        <View>
        <TouchableOpacity>
        <Text onPress={() => Linking.openURL('https://www.splitwise.com/terms')} style={{textAlign:"center", padding:25, textDecorationLine: 'underline', marginTop: 20, fontSize: 18, color:'#60615B'}}>By signing up, you accept the Splitwise Terms of Service.</Text>
        </TouchableOpacity>
        </View>
        </>
        </KeyboardAwareScrollView>           
        </SafeAreaView>
    );
  }
export default SignupScreen
const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection:'column',
        padding:25,
        backgroundColor: "white",
    },
    Button:{
        width:120,    
           },
    error:{
        fontSize:15,
        color:"red",
          }
})