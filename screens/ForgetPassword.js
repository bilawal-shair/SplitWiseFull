import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFPercentage as rfp, RFValue as rfv} from 'react-native-responsive-fontsize';
import { Button } from '@rneui/themed';
const ForgetPassword = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize:rfp(3),fontWeight:'bold', marginTop: rfv(40)}}>Reset your password</Text>
      <Text style={{fontSize:rfp(2.6), textAlign:'center'}} > Enter your email address or phone number and we'll send you a link to reset your password.</Text>
      <View style={{flex: 1}}>
            <Text style={{alignSelf:"center", fontSize:rfp(2.8), marginTop:rfv(20)}}>Your email address</Text>
            <TextInput
            style={{borderWidth:1, width:250, height:40, borderColor:"lightgray", borderRadius:3}}
            />
            <Button
            raised
             buttonStyle={{
                backgroundColor: '#11C08E',
            }}
            containerStyle={{
                width: wp(40),
                alignSelf:'center',
                marginTop:rfv(50),
                borderRadius: 4,
            }}
            titleStyle={{
                fontSize: rfp(2.5)
            }}
            title="Reset password"
            />
      </View>
    </SafeAreaView>
  )
}

export default ForgetPassword

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'white',
        paddingHorizontal: 30,
    },
})