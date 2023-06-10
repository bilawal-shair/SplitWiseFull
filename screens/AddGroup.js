import { ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons, Ionicons, Octicons, MaterialCommunityIcons, Entypo, FontAwesome } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { RFValue as rfv, RFPercentage as rfp } from 'react-native-responsive-fontsize';
import axios from 'axios';


const AddGroup = ({ navigation }) => {

  const [groupName, setGroupName] = useState('');
  // const [imageURL, setImageURL] = useState('');

  const [type, setType] = useState('');

  const handleAddGroupName = () => {
    axios.post('YOUR_API_ENDPOINT', { groupName })
      .then(response => {
        navigation.navigate('GroupSettle', { groupName });
      })
      .catch(error => {
        console.log(error);
      });
  };


  return (
    <SafeAreaView>
     
      <View style={styles.header}>
        <AntDesign name="close" size={24} color="black" marginLeft={20} onPress={() => navigation.goBack()} />
        <Text style={{ flex: 1, fontSize: rfp(3), textAlign: 'center' }}>Create a group</Text>
        <Text style={{ marginRight: rfv(20), fontSize: rfp(2.5), color: 'green' }} onPress={() => { navigation.navigate("GroupSettle"); { handleAddGroupName } }} >Done  </Text>
      </View>


      <View style={{ flexDirection: 'row', }}>
        <View style={{
          marginLeft: rfv(20), marginTop: rfv(40), width: wp(16), height: hp(8), backgroundColor: '#caced3',
          borderColor: 'gray', borderWidth: 1, borderRadius: 8, alignItems: 'center', justifyContent: 'center'
        }}>
          <MaterialIcons name="add-a-photo" size={24} color="black" />
        </View>
        <View style={{ width: wp(180) }}>
          
            <View style={{ width: wp(60),marginTop: rfv(50), marginLeft: rfv(15) }}>
                 <TextInput style={{ borderBottomWidth: 1, borderBottomColor: 'gray', fontSize: 15 }} 
                 placeholder="Group Name" 
                 value={groupName}
                 onChangeText={(text) => setGroupName(text)}
                 
                 />
            </View>

        </View>
      </View>
      <Text style={{ marginLeft: rfv(20), fontSize: rfp(2.5), marginBottom: rfv(20) }}>Type</Text>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity
          onPress={() => setType('Trip')}
          style={{ marginLeft: rfv(30), flexDirection: 'row', marginHorizontal: rfv(8), padding: rfv(10), borderColor: 'gray', borderWidth: 1, borderRadius: 24, backgroundColor: type === 'Trip' ? 'green' : 'white' }}>
          <SimpleLineIcons name="plane" size={22} color="black" />
          <Text style={{ fontSize: rfp(2.5) }}> Trip</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setType('Home')}
          style={{ flexDirection: 'row', padding: rfv(10), marginHorizontal: rfv(8), borderColor: 'gray', borderWidth: 1, borderRadius: 24, backgroundColor: type === 'Home' ? 'green' : 'white' }}>
          <SimpleLineIcons name="home" size={22} color="black" />
          <Text style={{ fontSize: rfp(2.5) }}> Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setType('Couple')}
          style={{ flexDirection: 'row', padding: rfv(10), marginHorizontal: rfv(8), borderColor: 'gray', borderWidth: 1, borderRadius: 24, backgroundColor: type === 'Couple' ? 'green' : 'white' }}>
          <SimpleLineIcons name="heart" size={22} color="black" />
          <Text style={{ fontSize: rfp(2.5) }}> Couple</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setType('Others')}
          style={{ flexDirection: 'row', padding: rfv(10), marginHorizontal: rfv(8), borderColor: 'gray', borderWidth: 1, borderRadius: 24, backgroundColor: type === 'Others' ? 'green' : 'white' }}>
          <AntDesign name="profile" size={22} color="black" />
          <Text style={{ fontSize: rfp(2.5) }}> Others</Text>
        </TouchableOpacity>

      </ScrollView>


    </SafeAreaView>
  )
}

export default AddGroup

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    width: '100%',
    height: 40,
    borderBottomColor: '#d3d3d3',
    borderBottomWidth: 2,
    marginTop: 20,
  }
})