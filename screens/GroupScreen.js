import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialCommunityIcons, FontAwesome, Entypo, AntDesign } from '@expo/vector-icons';
import { MenuProvider, Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import { useState } from 'react';
import AddGroup from './AddGroup';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFPercentage as rfp, RFValue as rfv} from 'react-native-responsive-fontsize';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const GroupScreen = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const handleOptionSelection = (option) => {
    setSelectedOption(option);
  };

  const renderSelectedView = () => {
    if (selectedOption === 'All Group') {
      return (
        <View>
          <Text>Selected option 1</Text>
        </View>
      );
    } else if (selectedOption === 'outStandingBalance') {
      return (
        <View>
          <Text>Selected option 2</Text>
        </View>
      );
    } else if (selectedOption === 'groupOweScreen') {
      return (
        <View>
          <Text>Selected option 3</Text>
        </View>
      );
    } else if (selectedOption === 'thatOweScreen') {
      return (
        <View>
          <Text>Selected option 3</Text>
        </View>
      );
    }
  };
  return (
    <MenuProvider>
      <SafeAreaView style={{flex:1}}>
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
            <Menu >
              <MenuTrigger>
                <MaterialCommunityIcons style={{alignSelf:'flex-end', padding: rfv(10), marginTop:rfv(-60)}} name="menu-open" size={35} color="black" />
              </MenuTrigger>
              <MenuOptions optionsContainerStyle={{ marginLeft: 150, marginTop: 30 }}>
                <MenuOption onSelect={() => handleOptionSelection('All Group')}>
                  <View style={{ flexDirection: "row", marginTop: 10, marginLeft: 15 }}>
                    <Entypo style={{ marginTop: 8 }} name="circle" size={18} color="black" />
                    <Text style={{ padding: 10 }}>All groups</Text>
                  </View>
                </MenuOption>

                <MenuOption onSelect={() => handleOptionSelection('outStandingBalance')}>
                  <View style={{ flexDirection: "row", marginLeft: 15 }}>
                    <Entypo name="circle" size={18} color="black" style={{ marginTop: 8 }} />
                    <Text style={{ padding: 10 }}>Outstanding balance</Text>
                  </View>
                </MenuOption>

                <MenuOption onSelect={() => handleOptionSelection('groupOweScreen')}>
                  <View style={{ flexDirection: "row", marginLeft: 15 }}>
                    <Entypo name="circle" size={18} color="black" style={{ marginTop: 8 }} />
                    <Text style={{ padding: 10 }}>Groups ypu owe</Text>
                  </View>
                </MenuOption>

                <MenuOption onSelect={() => handleOptionSelection('thatOweScreen')}>
                  <View style={{ flexDirection: "row", marginLeft: 15 }}>
                    <Entypo name="circle" size={18} color="black" style={{ marginTop: 8 }} />
                    <Text style={{ padding: 10 }}>Groups that owe you</Text>
                  </View>
                </MenuOption>
              </MenuOptions>
            </Menu>
        <Image 
          style={{width: wp('60%'), height: hp('28%'), alignSelf: 'center', borderRadius: 100}}
          source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJICAGv_L0qYVN1XfisY8xSlKRWrpYbNjzqA&usqp=CAU'}}
        />
        <Text style={{padding:rfv(30), fontSize: 20, textAlign: 'center'}}>Splitwise groups you create or are added to will show here.</Text>
        
        <View style={{height: 40, width: 200, alignSelf:'center', borderColor: 'green', borderWidth: 1, borderRadius: 4}} >
            <AntDesign.Button name="addusergroup" backgroundColor="white" color="green" size={20} onPress={() => navigation.navigate("Addgroup")} >
              <Text style={{ color: 'green', textAlign: 'center', fontSize: 17 }}>Start a new group </Text>
            </AntDesign.Button>
        </View>
        {renderSelectedView()}
        <View style={{ paddingVertical: rfv(50),alignSelf:'flex-end',  alignItems:'center' , marginRight:20}}>
          <Entypo.Button name="text" size={24} color="white" backgroundColor='#11C08E'  height={50} width={150} borderRadius={30} marginLeft={13} paddingVertical={ rfv(10)}>
            <Text style={{color: 'white', fontSize: 17}}>Add Expense</Text>
          </Entypo.Button>
        </View>
      </View>
      </KeyboardAwareScrollView> 
    </SafeAreaView>
      

      {/* <View style={{flex:1}}>
        <Text style={{marginTop: 20, fontSize: 20, padding: 20}}>Welcome to Splitwise!</Text>
        <Image 
          style={{width: wp('60%'), height: hp('28%'), alignSelf: 'center', borderRadius: 100}}
          source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJICAGv_L0qYVN1XfisY8xSlKRWrpYbNjzqA&usqp=CAU'}}
        />
        <Text style={{padding:rfv(30), fontSize: 20, textAlign: 'center'}}>Splitwise groups you create or are added to will show here.</Text>
        
        <View style={{height: 40, width: 200, alignSelf:'center', borderColor: 'green', borderWidth: 1, borderRadius: 4}} >
          <AntDesign.Button name="addusergroup" backgroundColor="white" color="green"  size={20} onPress={()=> navigation.navigate('Addgroup')}>
            <Text style={{color:'black', textAlign:'center', fontSize: 17}}>Start a new group </Text>
          </AntDesign.Button>
        </View>
        <View style={{ paddingVertical: rfv(50),alignSelf:'flex-end',  alignItems:'center' , marginRight:20}}>
          <Entypo.Button name="text" size={24} color="white" backgroundColor='#11C08E'  height={50} width={150} borderRadius={30} marginLeft={13} paddingVertical={ rfv(10)}>
            <Text style={{color: 'white', fontSize: 17}}>Add Expense</Text>
          </Entypo.Button>
  

        </View>
      </View> */}

     

    </MenuProvider>

  )
}

export default GroupScreen

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    width: '100%',
    height: 40,
    borderBottomColor: '#d3d3d3',
    borderBottomWidth: 2,
    marginTop: 20,
    justifyContent: 'flex-end',
  }
})
   
    
    