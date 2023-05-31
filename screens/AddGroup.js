import { ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Input } from '@rneui/themed';
import { SimpleLineIcons } from '@expo/vector-icons';
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import { RFValue as rfv, RFPercentage as rfp } from 'react-native-responsive-fontsize';
import axios from 'axios';

const AddGroup = ({navigation}) => {

  const [type,setType]=useState();
  const [gpname, setGpname]=useState();
  
  const createGroup = async (gpname, type) => {
    try {
      const response = await axios.post('http://20.193.132.20:83/api/Group/InsertGroup', {
        groupName: gpname,
        groupType: type,
      });
      console.log(response.data); // Handle the response data as per your requirements
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <AntDesign name="close" size={24} color="black" marginLeft={20} onPress={()=>navigation.goBack()}/>
        <Text style={{flex: 1, fontSize: rfp(3), textAlign:'center'}}>Create a group</Text>
        <Text style={{marginRight: rfv(20), fontSize: rfp(2.5), color:'green'}} onPress={() => createGroup(gpname, type)}  >Done</Text>   
      </View>
      <View style={{flexDirection:'row', }}>
        <View style={{marginLeft: rfv(20), marginTop:rfv(40), width: wp(16), height:hp(8), backgroundColor:'#caced3', 
          borderColor:'gray', borderWidth: 1, borderRadius: 8, alignItems:'center', justifyContent:'center'}}>
          <MaterialIcons name="add-a-photo" size={24} color="black"/>
        </View>
        <View style={{width:wp(180)}}>
          <Text style={{ marginLeft:rfv(10),marginTop:rfv(40), fontSize: rfp(2.2)}}>Group name</Text>
          <Input style={{ borderBottomWidth:1, borderBottomColor:'green'}}/>
        </View>
      </View>
      <Text style={{marginLeft:rfv(20), fontSize:rfp(2.5), marginBottom:rfv(20)}}>Type</Text>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity
          onPress={() => setType( 'Trip' )} 
          style={{marginLeft: rfv(30), flexDirection:'row', marginHorizontal:rfv(8), padding:rfv(10), borderColor:'gray', borderWidth: 1, borderRadius:24, backgroundColor: type === 'Trip' ? 'green' : 'white'}}>
          <SimpleLineIcons name="plane" size={22} color="black" />
          <Text style={{fontSize:rfp(2.5)}}> Trip</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setType( 'Home' )}
          style={{flexDirection:'row', padding:rfv(10), marginHorizontal:rfv(8) , borderColor:'gray', borderWidth: 1, borderRadius:24, backgroundColor: type === 'Home' ? 'green' : 'white'}}>
          <SimpleLineIcons name="home" size={22} color="black" />
          <Text style={{fontSize:rfp(2.5)}}> Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setType( 'Couple' )}
          style={{flexDirection:'row', padding:rfv(10), marginHorizontal: rfv(8), borderColor:'gray', borderWidth: 1, borderRadius:24, backgroundColor: type === 'Couple' ? 'green' : 'white'}}>
          <SimpleLineIcons name="heart" size={22} color="black" />
          <Text style={{fontSize: rfp(2.5)}}> Couple</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => setType( 'Others' )}
          style={{flexDirection:'row', padding:rfv(10), marginHorizontal:rfv(8) , borderColor:'gray', borderWidth: 1, borderRadius:24, backgroundColor: type === 'Others' ? 'green' : 'white'}}>
          <AntDesign name="profile" size={22} color="black" />
          <Text style={{fontSize:rfp(2.5)}}> Others</Text>
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