import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { MaterialCommunityIcons, FontAwesome, Entypo, AntDesign } from '@expo/vector-icons';
import { MenuProvider, Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';



import { useState } from 'react';
import AddGroup from './AddGroup';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage as rfp, RFValue as rfv } from 'react-native-responsive-fontsize';



import { FontAwesome, Entypo, AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import AddGroup from './AddGroup';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFPercentage as rfp, RFValue as rfv} from 'react-native-responsive-fontsize';
// import { useSelector } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

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

     <View style={styles.header}>
const GroupScreen = ({ navigation }) => {
  // const user = useSelector((state)=> state.user.user);
  // if (user) {
  //   // User information is available in the Redux store
  //   console.log('User information:', user);
  // } else {
  //   // User information is not available in the Redux store
  //   console.log('User information is not available');
  // }

  return (
    <SafeAreaView style={{flex:1}}>
    <KeyboardAwareScrollView showsVerticalScrollIndicator={false} enableAutomaticScroll>
      <View style={styles.header}>

        <TouchableOpacity>
          <FontAwesome name="search" size={24} color="black" style={{ marginRight: 30 }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Addgroup")}>
          <AntDesign name="addusergroup" size={24} color="black" style={{ marginRight: 15 }} />
        </TouchableOpacity>
      </View>

      <View style={{  marginTop: 40 }}>

        <Text style={{ fontSize: 18, marginLeft: 25 }}>Welcome to Splitwise,Bilawal!</Text>

      </View>


      <View style={{ flex: 1 }}>
        <Menu >

          <MenuTrigger>
            <MaterialCommunityIcons style={{ padding: 10, marginLeft: 300, marginTop: -35, height: 50 }} name="menu-open" size={35} color="black" />
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
      </View>

      <Image
        style={{ height: 150, width: 150, alignSelf: 'center', borderRadius: 100, marginTop: 40, marginLeft: -10 }}
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJICAGv_L0qYVN1XfisY8xSlKRWrpYbNjzqA&usqp=CAU' }}
      />

      <Text style={{ padding: 30, fontSize: 20, textAlign: 'center' }}>Splitwise groups you create or are added to will show here.</Text>

      <View style={{ height: 40, width: 200, alignSelf: 'center', borderColor: 'green', borderWidth: 1, borderRadius: 6 }} >
        <AntDesign.Button name="addusergroup" backgroundColor="white" color="green" size={20} onPress={() => navigation.navigate("Addgroup")} >
          <Text style={{ color: 'green', textAlign: 'center', fontSize: 17 }}>Start a new group </Text>
        </AntDesign.Button>
      </View>

      {renderSelectedView()}
      <View style={{ alignSelf: 'flex-end', paddingVertical: 120, alignItems: 'center', marginRight: 20, marginTop: 10 }}>
        <Entypo.Button name="text" size={24} color="white" backgroundColor='#11C08E' height={50} width={150} borderRadius={30} marginLeft={13}>
          <Text style={{ color: 'white', fontSize: 17 }}>Add Expense</Text>
        </Entypo.Button>
      </View>
    

    
    </MenuProvider>

      <View style={{flex:1}}>
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
          {/* <Popup /> */}
        </View>
      </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>

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
    marginTop: 40,
    justifyContent: 'flex-end',
  }
})