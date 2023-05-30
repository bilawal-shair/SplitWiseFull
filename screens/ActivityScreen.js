import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Entypo } from '@expo/vector-icons';
import { RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import axios from 'axios';

const ActivityScreen = () => {
 const data =[
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh5A905tVq60ZoKc9huOnMI7nPrbpGNBwEWw&usqp=CAU",
    id:"1",
    text: "You deleted the group rn team",
    date: "Apr 11, 11:50pm"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh5A905tVq60ZoKc9huOnMI7nPrbpGNBwEWw&usqp=CAU",
    id:"2",
    text: "You deleted the group rn team",
    date: "Apr 11, 11:50pm"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh5A905tVq60ZoKc9huOnMI7nPrbpGNBwEWw&usqp=CAU",
    id:"3",
    text: "You deleted the group rn team",
    date: "Apr 11, 11:50pm"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh5A905tVq60ZoKc9huOnMI7nPrbpGNBwEWw&usqp=CAU",
    id:"4",
    text: "You deleted the group rn team",
    date: "Apr 11, 11:50pm"
  },
  { 
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh5A905tVq60ZoKc9huOnMI7nPrbpGNBwEWw&usqp=CAU",
     id:"5",
    text: "You deleted the group rn team",
    date: "Apr 11, 11:50pm"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh5A905tVq60ZoKc9huOnMI7nPrbpGNBwEWw&usqp=CAU",
    id:"6",
    text: "You deleted the group rn team",
    date: "Apr 11, 11:50pm"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh5A905tVq60ZoKc9huOnMI7nPrbpGNBwEWw&usqp=CAU",
    id:"7",
    text: "You deleted the group rn team",
    date: "Apr 11, 11:50pm"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh5A905tVq60ZoKc9huOnMI7nPrbpGNBwEWw&usqp=CAU",
    id:"8",
    text: "You deleted the group rn team",
    date: "Apr 11, 11:50pm"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh5A905tVq60ZoKc9huOnMI7nPrbpGNBwEWw&usqp=CAU",
    id:"9",
    text: "You deleted the group rn team",
    date: "Apr 11, 11:50pm"
  },
 ];
  
  return (

    <SafeAreaView style={styles.container}>
      <Text style={{fontSize:RFPercentage(4), marginLeft: RFValue(10), marginBottom: RFValue(5)}}>Activity</Text>
      {/* <Text style={{marginTop: RFValue(200), textAlign: 'center', fontSize: RFPercentage(3), padding: RFValue(20)}}>There is no activity in your account yet. Try adding an expense!</Text> */}

      {/* <View style={{ flex:1, alignSelf:'flex-end',paddingVertical: RFValue(80),  alignItems:'center' , marginRight:RFValue(20)}}>
          <Entypo.Button name="text" size={24} color="white" backgroundColor='#11C08E'  height={50} width={150} borderRadius={30} marginLeft={RFValue(13)}>
            <Text style={{color: 'white', fontSize: 17}}>Add Expense</Text>
          </Entypo.Button>
      </View> */}

      <FlatList 
      showsVerticalScrollIndicator={false}
      //style={{alignSelf:"center"}}
      data={data} 
      keyExtractor={(item) => item.id}
      renderItem={({ item }) =>(
      <TouchableOpacity style={{padding:RFValue(10)}}> 
      <View style={{flexDirection:"row"}}>
      <Image 
       style={{width:50, height:50, borderRadius:10}}
       source={{uri:item.image}}/>
       <View style={{marginLeft:20}}>
      <Text style={styles.text}>{item.text}</Text>
       <Text style={styles.text2}>{item.date}</Text>
      </View>
      </View>
     </TouchableOpacity>
)}
      />
     </SafeAreaView>

  )
}

export default ActivityScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:20,
    //alignItems:'center',
    //justifyContent:'center'
  },
  text:{
  fontSize:18,
  fontWeight:"bold"
 },
  text2:{
  fontSize:14,
  marginTop:8,
 },

})