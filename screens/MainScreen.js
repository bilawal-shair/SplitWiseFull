import { StyleSheet, Image, Text, View, TouchableOpacity, Linking } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button } from '@rneui/themed'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFPercentage as rfp, RFValue as rfv} from 'react-native-responsive-fontsize';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import AsyncStorage from '@react-native-async-storage/async-storage';''
import { ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import { setUser } from '../UserSlices/UserReducer';

WebBrowser.maybeCompleteAuthSession();


const MainScreen = ({navigation}) => {
  const dispatch = useDispatch();  
  const [token, setToken] = useState("");
  const [userInfo, setUserInfo] = useState(null);
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: "755078804989-59kd0m5j75oa8im906opnejn99sf69qg.apps.googleusercontent.com",
    // androidClientId: "1016676274959-tgd3qvisqdv4l0m62d47dq233un9tmfa.apps.googleusercontent.com",
  }); 
  

  useEffect(() => {
    if (response?.type === "success") {
      setToken(response.authentication.accessToken);
      getUserInfo();
    }
  }, [response, token]);

  const getUserInfo = async () => {
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
        );
        const user = await response.json();
        const userName = user.name;
        const userEmail = user.email;
        
        const userInfo = {
            name: userName,
            email: userEmail,
           
          };
          setUserInfo(userInfo);
          dispatch(setUser(userInfo));
          console.log(userInfo);
        } catch (error) {
          // Add your own error handler here
        }
  
    }
  return (
    
    <ScrollView style={{flex:1, flexGrow:1,backgroundColor:'white'}} contentContainerStyle={{height:hp('100%')}}>
        <View style={{paddingVertical:80}}>
            <Image 
            style={{width: wp('50%'), height: hp('20%'),alignSelf:'center' }}
            resizeMode='contain'
            source={{
                uri: "https://d1myhw8pp24x4f.cloudfront.net/software_logo/1551873717_splitwise-logo_mid.png"
            }}
            />
            {/* rfp(7): 7% of the screen's height */}
            <Text style={{fontSize: rfp(6), textAlign:'center'}}>Splitwise</Text>  
        </View>
           
        <View style={{justifyContent:'center', flex:1, alignItems:'center'}} >
        {/* rfv(20): 20% of the screen's width */}
            <View style={{ marginBottom:  rfv(20), }}>
                <Button 
                    containerStyle={{
                        width: wp(80),
                    }}
                    buttonStyle={{
                        backgroundColor: '#11C08E',
                        borderRadius: 3,
                        borderBottomWidth: 2,
                        borderRadius: 6,
                        borderBottomColor:'#9DA29B',
                    }}
                    title='Sign Up'
                    onPress={() => navigation.navigate('Signup') }
                />
            </View>

            <View style={{ marginBottom: rfv(20)}}>
                <Button 
                    containerStyle={{
                        width: wp(80),
                    }}
                    buttonStyle={{
                        backgroundColor: 'white',
                        borderBottomWidth: 2,
                        borderRadius: 6,
                        borderBottomColor:'#9DA29B',
                        borderColor:'#D8D9D5',
                        borderWidth:0.8,
                    }}
                    titleStyle={{ color: 'black', marginHorizontal: 20 }}
                    title='Log in'
                    onPress={() => navigation.navigate('Login') }
                />
            </View>

            <View style={{ marginBottom: rfv(20)}}>
            {userInfo === null?(
                <TouchableOpacity 
                // onSuccess={responseGoogle}
                // onFailure={responseGoogle}
                    onPress={() => {
                        promptAsync();
                    }} 
                    style={{flexDirection: 'row',  borderColor:'#D8D9D5',
                        borderWidth:0.8,borderBottomWidth :2,  borderBottomColor: '#9DA29B', borderRadius:6, width:wp(80), justifyContent:"center",height:42, padding:10}}>
                    <Image
                        style={{width:25, height:25 }}
                        source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCW82MIe3_DxiUjQUFlKNJrZuDng8sQ1Y_aQ&usqp=CAU"}}
                    />
                    <Text style={{fontSize: rfp(2)}}>  Sign in with Google</Text>
                    
                </TouchableOpacity>) : (navigation.navigate("Dashboard"))}
            </View>

            <View style={{alignSelf:'center',flexDirection: 'row', position: 'absolute', bottom:30}}>
                <TouchableOpacity>
                    <Text style={styles.footer} onPress={() => Linking.openURL('https://www.splitwise.com/terms')} >Terms</Text>
                </TouchableOpacity>
                <Text> | </Text>
                <TouchableOpacity>
                    <Text style={styles.footer} onPress={() => Linking.openURL('https://www.splitwise.com/privacy')}>Privacy Policy</Text>
                </TouchableOpacity>
                <Text> | </Text>
                <TouchableOpacity>
                    <Text style={styles.footer} onPress={() => Linking.openURL('https://www.splitwise.com/contact')}>Contact us</Text>
                </TouchableOpacity>
            </View>
        </View>
    </ScrollView>
    
  )
}

export default MainScreen

const styles = StyleSheet.create({
    footer:{ 
        textDecorationLine: 'underline',
    },
})