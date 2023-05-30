// import React, { Component } from 'react';
import { MenuProvider, Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, AntDesign, Entypo, FontAwesome, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import DashboardScreen from './DashboardScreen';
import React from 'react';

// import { AntDesign } from '@expo/vector-icons';
{/* <MenuTrigger text="Open menu" /> */ }

const AllGroupScreen = ({navigation}) => {

  const [selectedOption, setSalectedOption] = useState(null);

  const handleOptionSelection = (Option) => {
    setSalectedOption(Option)
  };

  const renderSelectedView = () => {
    if (selectedOption === 'All Group') {
      return (
        navigation.navigate("AllGroupScreen")    
      );
    } else if (selectedOption === 'outStandingBalance') {
      return (
        navigation.navigate("outStandingBalanceScreen")
      );
    } else if (selectedOption === 'groupOweScreen') {
      return (
        navigation.navigate("GroupOweScreen")
      );
    }else if (selectedOption === 'thatOweScreen') {
      return (
        navigation.navigate("ThatOweScreen")
      );
    }  
  };

  return (
    <MenuProvider>
      <View style={styles.header}>
        <TouchableOpacity>
          <FontAwesome name="search" size={24} color="black" style={{ marginRight: 30 }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Addgroup")}>
          <AntDesign name="addusergroup" size={24} color="black" style={{ marginRight: 15 }} />
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1 }}>
        <Menu >
          <MenuTrigger>
            <MaterialCommunityIcons style={{ padding: 10, marginLeft: 300, marginTop: 10 }} name="menu-open" size={35} color="black" />
          </MenuTrigger>
          <MenuOptions optionsContainerStyle={{ marginLeft: 130, marginTop: 70 }}>

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

        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: "row", marginTop: 5 }}>
            <View style={{ marginTop: 2 }}>
              <Text style={{ fontSize: 18, marginLeft: 50, marginTop: -50 }}>you are all settled up</Text>
            </View>
          </View>

          <View style={{ flexDirection: "row", marginTop: 100 }}>
            <Image
              style={{ height: 70, width: 70, alignSelf: 'center', marginLeft: 30, borderRadius: 20 }}
              source={{ uri: 'data:image/jpeg;base64,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' }}
            />

            <View style={{ marginTop: 20, marginLeft: 9 }}> 
              <Text> Non-group expenses no expenses</Text>
            </View>
            
          </View>

          <View style={{ marginTop: 20, marginLeft:40 }}>
            <Text> Hiding groups that have been settled up</Text>
            <Text style = {{marginLeft: 60}}> Over one month.</Text>
          </View>

          <View style={{ height: 40, width: 200, alignSelf: 'center', borderColor: 'green', borderWidth: 1, borderRadius: 6, marginTop: 20 }} >
            <AntDesign.Button name="addusergroup" backgroundColor="white" color="green" size={20} >
              <Text style={{ color: 'green', textAlign: 'center', fontSize: 17 }}>Show 2  settled up groups </Text>
            </AntDesign.Button>
          </View>

          <View style={{ alignSelf: 'flex-end', paddingVertical: 120, alignItems: 'center', marginRight: 20, marginTop: 100 }}>
            <Entypo.Button name="text" size={24} color="white" backgroundColor='#11C08E' height={50} width={150} borderRadius={30} marginLeft={13}>
              <Text style={{ color: 'white', fontSize: 17 }}>Add Expense</Text>
            </Entypo.Button>
          </View>
        </View>       
      </View>

    {renderSelectedView()}
  </MenuProvider>
  )
}

export default AllGroupScreen

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    width: '100%',
    height: 40,
    borderBottomColor: '#d3d3d3',
    borderBottomWidth: 2,
    marginTop: 50,
    justifyContent: 'flex-end',
  }
})



