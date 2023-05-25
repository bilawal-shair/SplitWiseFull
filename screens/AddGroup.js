import { ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Input } from '@rneui/themed';
import { SimpleLineIcons } from '@expo/vector-icons';

const AddGroup = ({navigation}) => {
  const [type,setType]=useState();
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <AntDesign name="close" size={24} color="black" marginLeft={20} onPress={()=>navigation.goBack()}/>
        <Text style={{flex: 1, fontSize: 20, textAlign:'center'}}>Create a group</Text>
        <Text style={{marginRight: 20, fontSize: 18, color:'green'}} onPress={()=> navigation.navigate("AllGroupScreen")}  >Done</Text>   
      </View>
      <View style={{flexDirection:'row', }}>
        <View style={{marginLeft: 20, marginTop:40, width: 60, height: 60, backgroundColor:'#caced3', 
          borderColor:'gray', borderWidth: 1, borderRadius: 8, alignItems:'center', justifyContent:'center'}}>
          <MaterialIcons name="add-a-photo" size={24} color="black"/>
        </View>
        <View style={{width:280}}>
          <Text style={{ marginLeft:10,marginTop:40, fontSize: 15}}>Group name</Text>
          <Input style={{ borderBottomWidth:1, borderBottomColor:'green'}}/>
        </View>
      </View>
      <Text style={{marginLeft:20, fontSize:18, marginBottom:20}}>Type</Text>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity
          onPress={() => setType( 'Trip' )} 
          style={{marginLeft: 40, flexDirection:'row', marginHorizontal: 8, padding:10, borderColor:'gray', borderWidth: 1, borderRadius:24, backgroundColor: type === 'Trip' ? 'green' : 'white'}}>
          <SimpleLineIcons name="plane" size={22} color="black" />
          <Text style={{fontSize:18}}> Trip</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setType( 'Home' )}
          style={{flexDirection:'row', padding:10, marginHorizontal: 8, borderColor:'gray', borderWidth: 1, borderRadius:24, backgroundColor: type === 'Home' ? 'green' : 'white'}}>
          <SimpleLineIcons name="home" size={22} color="black" />
          <Text style={{fontSize:18}}> Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setType( 'Couple' )}
          style={{flexDirection:'row', padding:10, marginHorizontal: 8, borderColor:'gray', borderWidth: 1, borderRadius:24, backgroundColor: type === 'Couple' ? 'green' : 'white'}}>
          <SimpleLineIcons name="heart" size={22} color="black" />
          <Text style={{fontSize:18}}> Couple</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => setType( 'Others' )}
          style={{flexDirection:'row', padding:10, marginHorizontal: 8, borderColor:'gray', borderWidth: 1, borderRadius:24, backgroundColor: type === 'Others' ? 'green' : 'white'}}>
          <AntDesign name="profile" size={22} color="black" />
          <Text style={{fontSize:18}}> Others</Text>
        </TouchableOpacity> 
       
      </ScrollView>
    </SafeAreaView>
  )
}

export default AddGroup

const styles = StyleSheet.create({
  header:{
    flexDirection:'row',
    width: '100%',
    height: 40,
    borderBottomColor: '#d3d3d3',
    borderBottomWidth: 2,  
    marginTop: 20,  
  }
})