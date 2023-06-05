import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { RFPercentage as rfp, RFValue as rfv } from 'react-native-responsive-fontsize';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { Input } from '@rneui/themed';
const ExpenseScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1}}>
        <View style={{flex:1}}>
            <View style={styles.header}>
                <Ionicons name="arrow-back" size={24} color="black" marginLeft={20}  onPress={()=>navigation.goBack()}/>
                <Text style={{flex: 1, fontSize: rfp(3), marginLeft: rfv(20)}}>Add expense</Text>
                <AntDesign name="check" size={24} color="black" marginRight= {rfv(20)}  /> 
            </View>
            <View style={styles.header}>
                <Text style={{fontSize:rfp(2.5), marginStart:rfv(20)}}>With<Text style={{fontWeight:'bold'}}> you </Text>and: </Text>
                <TextInput  style={{fontSize:rfp(2.5), marginTop: rfv(-15)}} placeholderTextColor='black' placeholder='Enter names, emails, or phones#'></TextInput>
            </View>
        </View>
        <View style={{flex:1, padding: rfv(80)}}>
            <Input placeholder='Enter a description' placeholderTextColor='black'></Input>
            <Input placeholder='0.00' placeholderTextColor='black'></Input>
        </View>
        
      
    </SafeAreaView>
  )
}

export default ExpenseScreen

const styles = StyleSheet.create({
    header:{
      flexDirection:'row',
      width: '100%',
      height: 40,
      borderBottomColor: '#d3d3d3',
      borderBottomWidth: 1,  
      marginTop: 20,  
    }
  })