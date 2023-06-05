import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FontAwesome, Entypo, AntDesign, Ionicons } from '@expo/vector-icons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFPercentage as rfp, RFValue as rfv} from 'react-native-responsive-fontsize';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const FriendScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex:1}}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false} enableAutomaticScroll>
      <View style={styles.header}>
        <TouchableOpacity>
          <FontAwesome name="search" size={24} color="black" style={{marginRight: 30}}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Addgroup')}>
          <AntDesign name="addusergroup" size={24} color="black" style={{marginRight: 15}}/>
        </TouchableOpacity>
        
      </View>
      <View style={{flex:1}}>
        <Text style={{marginTop: 20, fontSize: 20, padding: 20}}>Welcome to Splitwise!</Text>
        <Image 
          style={{width: wp('60%'), height: hp('28%'), alignSelf: 'center', borderRadius: 100}}
          source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJICAGv_L0qYVN1XfisY8xSlKRWrpYbNjzqA&usqp=CAU'}}
        />
        <Text style={{padding:rfv(30), fontSize: 20, textAlign: 'center'}}>As you use Splitwise, friends and group mates will show here.</Text>
        
        <View style={{height: 40, width: 200, alignSelf:'center', borderColor: 'green', borderWidth: 1, borderRadius: 4}} >
          <Ionicons.Button name="person-add-outline" backgroundColor="white" color="green"  size={20} >
            <Text style={{color:'black', textAlign:'center', fontSize: 17}}>Add more friends </Text>
          </Ionicons.Button>
        </View>
        <View style={{ paddingVertical: rfv(50),alignSelf:'flex-end',  alignItems:'center' , marginRight:20}}>
          <Entypo.Button onPress={() => navigation.navigate('Expense')} name="text" size={24} color="white" backgroundColor='#11C08E'  height={50} width={150} borderRadius={30} marginLeft={13} paddingVertical={ rfv(10)}>
            <Text style={{color: 'white', fontSize: 17}}>Add Expense</Text>
          </Entypo.Button>
        </View>
      </View>
      </KeyboardAwareScrollView> 
    </SafeAreaView>
      
  )
}

export default FriendScreen

const styles = StyleSheet.create({
  header:{
    flexDirection:'row',
    width: '100%',
    height: 40,
    borderBottomColor: '#d3d3d3',
    borderBottomWidth: 2,  
    marginTop: 20,  
    justifyContent: 'flex-end',
  }
})