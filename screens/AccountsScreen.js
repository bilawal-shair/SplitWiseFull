import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { heightPercentageToDP as hp, widthPercentageToDP, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { RFPercentage as rfp, RFValue as rfv } from 'react-native-responsive-fontsize';

const AccountsScreen = ({navigation}) => {
  const user = useSelector((state)=> state.user.user);
  const [image, setImage] = useState(null);
  if (user) {
    // User information is available in the Redux store
    console.log('User information:', user);
  } else {
    // User information is not available in the Redux store
    console.log('User information is not available');
  }
  

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <ScrollView style={{backgroundColor:'white'}}
      //  showsverticlelIndicator={false}
      showsVerticalScrollIndicator={false}
    >
    <View style={{backgroundColor:"lightgrey", height:70, width:70, marginTop:30, marginLeft:20, borderRadius:40, flexDirection:"row"}}>

      <View style={{width:widthPercentageToDP(20)}}>

        {image && <Image source={{ uri: image }} style={{ width: 70, height: 70, borderRadius:40 }} />}
        <AntDesign onPress={pickImage} style={{position: 'absolute', top: 50, left: 50}} name="camera" size={24} color="black" />
      </View>

      <View style={{width:500}}>
        <Text style={{marginTop:10, marginLeft:30}}>{user.name}</Text>
        <Text style={{marginTop:10, marginLeft:30}}>{user.email}</Text>
      </View>

    </View> 

    <View style={{height:hp(0.1), backgroundColor:"lightgray", marginTop:rfv(10)}}></View>

      <View style={{flexDirection:"row", marginTop:rfv(20)}}>
        <FontAwesome  style={{marginLeft:rfv(25)}}name="qrcode" size={35} color="black" />
        <Text  style={{marginLeft:rfv(25), marginTop:rfv(5), fontSize:rfp(2.5)}}>Scan code</Text>
      </View>
  
      <View style={{flexDirection:"row", marginTop:rfv(35)}}>
        <FontAwesome  style={{marginLeft:rfv(25)}} name="diamond" size={20} color="black" />
        <Text  style={{marginLeft:rfv(25),  fontSize:rfp(2.5)}}>Splitwise Pro</Text>
      </View>

      <Text style={{marginTop:rfv(30), marginLeft:rfv(10), fontSize:rfp(2.2)}}>Preferences</Text>
  
      <View style={{flexDirection:"row", marginTop:rfv(35), width:wp(100)}}>
        <MaterialIcons  style={{marginLeft:25}}  name="email" size={24} color="black"  />
        <Text  style={{marginLeft:rfv(25),  fontSize:rfp(2.5)}}>Email settings</Text>
      </View>

      <View style={{flexDirection:"row", marginTop:rfv(35), width:wp(100)}}>
        <FontAwesome  style={{marginLeft:rfv(25)}}  name="bell-o" size={24} color="black" />
        <Text  style={{marginLeft:rfv(25),  fontSize:rfp(2.5)}}>Device and push notification settings</Text>
      </View>

      <View style={{flexDirection:"row", marginTop:rfv(35), width:wp(100)}}>
        <Entypo  style={{marginLeft:rfv(25)}}  Entypo name="lock" size={24} color="black" />
        <Text  style={{marginLeft:rfv(25),  fontSize:rfp(2.5)}}>Passcode</Text>
      </View>

      <Text style={{marginTop:rfv(30), marginLeft:rfv(10), fontSize:rfp(2.2)}}>Feedback</Text>

      <View style={{flexDirection:"row", marginTop:rfv(35), width:wp(100)}}>
        <FontAwesome  style={{marginLeft:rfv(25)}}  name="star" size={24} color="black" />
        <Text  style={{marginLeft:rfv(25),  fontSize:rfp(2.5)}}>Rate Splitwise</Text>
      </View>

      <View style={{flexDirection:"row", marginTop:rfv(35), width:wp(100)}}>
        <MaterialIcons style={{marginLeft:rfv(25)}} name="contact-support" size={24} color="black" />
        <Text  style={{marginLeft:rfv(25),  fontSize:rfp(2.5)}}>Contact Splitwise support</Text>
      </View>

      <View style={{height:hp(0.1), backgroundColor:"lightgray", marginTop:rfv(30)}}></View>

      <TouchableOpacity style={{flexDirection:"row", marginTop:rfv(35), width:wp(100)}} onPress={()=>navigation.navigate('Main')}>
        <MaterialCommunityIcons style={{marginLeft:rfv(25)}} name="logout" size={24} color="black"  />
        <Text  style={{marginLeft:rfv(25),  fontSize:rfp(2.5)}} >Logout</Text>
      </TouchableOpacity>

      <View style={{alignItems:"center", marginTop:rfv(20)}}>
        <View style={{flexDirection:'row'}}>
          <Text style={{fontSize:rfp(2)}}>Made with  </Text>
            
            <Image style={{width:wp(5), height: hp(2)}}
            src="https://www.clipartmax.com/png/small/364-3645111_sparkle-png-free-download-stars-emoji-png.png" 
            alt="Sparkle Png Free Download - Stars Emoji Png @clipartmax.com"
            /> 
          <Text style={{fontSize:rfp(2)}}>  in Providence, RI, USA</Text>
        </View>
        
        <Text style={{fontSize:rfp(2)}}>Copyright {'\u00A9'} 2023 Splitwise, Inc.</Text>
        <Text style={{fontSize:rfp(2)}}>P.S. Bunnies!</Text>
        <Text style={{marginTop:rfv(10), fontSize:rfp(2)}}>Privacy Policy</Text>
        <Text style={{marginTop:rfv(10), marginBottom: rfv(10), fontSize:rfp(2)}}>v23.4.1/694</Text>
        {/* <View style={{marginTop:80}}></View> */}
        <View>
          <Image
          style={{width: wp(217), height:hp(14)}}
          source={{
          uri:"data:image/jpeg;base64,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"
          }}/>
        </View>
      </View>
    </ScrollView>
  )
}

export default AccountsScreen

const styles = StyleSheet.create({})