// import React, { Component } from 'react';
import { MenuProvider, Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { MaterialCommunityIcons, AntDesign, Entypo, FontAwesome, MaterialIcons, Ionicons, Icon } from '@expo/vector-icons';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
const AllGroupScreen = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [filled, setFilled] = useState(false);
  const handleOptionSelection = (option) => {
    setSelectedOption(option);
  };
  const handlePress = () => {
    setFilled(!filled);
  };
import DashboardScreen from './DashboardScreen';
import React from 'react';

// import { AntDesign } from '@expo/vector-icons';
{/* <MenuTrigger text="Open menu" /> */ }

const AllGroupScreen = ({navigation}) => {
  const dummyData = [
    { id: '1', name: 'no expenses', image: require('../assets/th.jpeg') },


    // Add more dummy items as needed
  ];


  const renderListItem = ({ item }) => (
    <View style={{ flexDirection: "row" }}>
      <Image source={item.image} style={{ width: 100, height: 100, marginTop: 100, borderRadius: 20 }} />
      <Text style={{ marginTop: 140, marginLeft: 20 }}>{item.name}</Text>
    </View>
  );

  const renderSelectedView = () => {
    if (selectedOption === 'All Group') {


      return (
        <View>
        </View>
      );
    } else if (selectedOption === 'outStandingBalance') {
      return (
        <View>
          <Text style={{ marginLeft: 80 }}>you are all settled up!</Text>



          <Image
            style={{ width: 60, height: 60, marginTop: 50, marginLeft: 100 }}
            source={{
              uri: "https://d1myhw8pp24x4f.cloudfront.net/software_logo/1551873717_splitwise-logo_mid.png"
            }}
          />



          <View style={{ marginLeft: 80, marginTop: 40 }}>
            <Text>No one to see here</Text>
            <Text style={{ marginTop: 50 }}>Clear filter</Text>
          </View>





          <View style={{ height: 40, width: 200, alignSelf: 'center', borderColor: 'green', borderWidth: 1, borderRadius: 6, marginTop: 100 }} >
            <AntDesign.Button name="addusergroup" backgroundColor="white" color="green" size={20} >
              <Text style={{ color: 'green', textAlign: 'center', fontSize: 17 }}>Start a new group </Text>
            </AntDesign.Button>
          </View>


          <View style={{ alignSelf: 'flex-end', paddingVertical: 120, alignItems: 'center', marginRight: 20, marginTop: -30 }}>
            <Entypo.Button name="text" size={24} color="white" backgroundColor='#11C08E' height={50} width={150} borderRadius={30} marginLeft={13}>
              <Text style={{ color: 'white', fontSize: 17 }}>Add Expense</Text>
            </Entypo.Button>
          </View>
        </View>
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
        <View>
          <Text style={{ marginLeft: 80 }}> groups you owe </Text>



          <Image
            style={{ width: 60, height: 60, marginTop: 50, marginLeft: 100 }}
            source={{
              uri: "https://d1myhw8pp24x4f.cloudfront.net/software_logo/1551873717_splitwise-logo_mid.png"
            }}
          />



          <View style={{ marginLeft: 80, marginTop: 40 }}>
            <Text>No one to see here</Text>
            <Text style={{ marginTop: 50 }}>Clear filter</Text>
          </View>





          <View style={{ height: 40, width: 200, alignSelf: 'center', borderColor: 'green', borderWidth: 1, borderRadius: 6, marginTop: 100 }} >
            <AntDesign.Button name="addusergroup" backgroundColor="white" color="green" size={20} >
              <Text style={{ color: 'green', textAlign: 'center', fontSize: 17 }}>Start a new group </Text>
            </AntDesign.Button>
          </View>


          <View style={{ alignSelf: 'flex-end', paddingVertical: 120, alignItems: 'center', marginRight: 20, marginTop: -30 }}>
            <Entypo.Button name="text" size={24} color="white" backgroundColor='#11C08E' height={50} width={150} borderRadius={30} marginLeft={13}>
              <Text style={{ color: 'white', fontSize: 17 }}>Add Expense</Text>
            </Entypo.Button>
          </View>
        </View>
      );
    } else if (selectedOption === 'thatOweScreen') {
      return (
        <View>
          <Text style={{ marginLeft: 80 }}>No groups owe you</Text>



          <Image
            style={{ width: 60, height: 60, marginTop: 50, marginLeft: 100 }}
            source={{
              uri: "https://d1myhw8pp24x4f.cloudfront.net/software_logo/1551873717_splitwise-logo_mid.png"
            }}
          />



          <View style={{ marginLeft: 80, marginTop: 40 }}>
            <Text>No one to see here</Text>
            <Text style={{ marginTop: 50 }}>Clear filter</Text>
          </View>





          <View style={{ height: 40, width: 200, alignSelf: 'center', borderColor: 'green', borderWidth: 1, borderRadius: 6, marginTop: 100 }} >
            <AntDesign.Button name="addusergroup" backgroundColor="white" color="green" size={20} >
              <Text style={{ color: 'green', textAlign: 'center', fontSize: 17 }}>Start a new group </Text>
            </AntDesign.Button>
          </View>


          <View style={{ alignSelf: 'flex-end', paddingVertical: 120, alignItems: 'center', marginRight: 20, marginTop: -30 }}>
            <Entypo.Button name="text" size={24} color="white" backgroundColor='#11C08E' height={50} width={150} borderRadius={30} marginLeft={13}>
              <Text style={{ color: 'white', fontSize: 17 }}>Add Expense</Text>
            </Entypo.Button>
          </View>
        </View>
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

      <View style={{ flex: 1, backgroundColor: "white" }}>
        <Menu>

          <MenuTrigger>
            <View style={{ backgroundColor: "white" }}>

              <MaterialCommunityIcons style={{ padding: 10, marginLeft: 300, marginTop: 10, height: 50 }} name="menu-open" size={35} color="black" />

            </View>

          </MenuTrigger>



          <MenuOptions optionsContainerStyle={{ marginLeft: 150, marginTop: 60 }}>

            <MenuOption onSelect={() => handleOptionSelection('All Group')} >


              
                <View style={{ flexDirection: "row", marginLeft: 15 }}>
                   <TouchableOpacity onPress={handlePress}>

                   { filled ? (
                    <FontAwesome name="dot-circle-o" size={26} color="green" style={{ marginTop: 8 }} />
                  ) : (
                    <FontAwesome name="circle-o" size={24} color="black" style={{ marginTop: 8 }} />
                  )}


                   </TouchableOpacity>
                 
                  <Text style={{ padding: 10 }}>All group</Text>

                </View>
              </MenuOption>

            <MenuOption onSelect={() => handleOptionSelection('outStandingBalance')} >

                <View style={{ flexDirection: "row", marginLeft: 15 }}>

                  {filled ? (
                    <FontAwesome name="dot-circle-o" size={26} color="green" style={{ marginTop: 8 }} />
                  ) : (
                    <FontAwesome name="circle-o" size={24} color="black" style={{ marginTop: 8 }} />
                  )}
                  <Text style={{ padding: 10 }}>Outstanding balance</Text>

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

                {filled ? (
                  <FontAwesome name="dot-circle-o" size={26} color="green" style={{ marginTop: 8 }} />
                ) : (
                  <FontAwesome name="circle-o" size={24} color="black" style={{ marginTop: 8 }} />
                )}
                <Text style={{ padding: 10 }}>Groups you owe</Text>
                <Entypo name="circle" size={18} color="black" style={{ marginTop: 8 }} />
                <Text style={{ padding: 10 }}>Groups ypu owe</Text>
              </View>
            </MenuOption>

            <MenuOption onSelect={() => handleOptionSelection('thatOweScreen')}>
              <View style={{ flexDirection: "row", marginLeft: 15 }}>

                {filled ? (
                  <FontAwesome name="dot-circle-o" size={26} color="green" style={{ marginTop: 8 }} />
                ) : (
                  <FontAwesome name="circle-o" size={24} color="black" style={{ marginTop: 8 }} />
                )}
                <Entypo name="circle" size={18} color="black" style={{ marginTop: 8 }} />
                <Text style={{ padding: 10 }}>Groups that owe you</Text>
              </View>
            </MenuOption>

          </MenuOptions>
        </Menu>

        {renderSelectedView()}
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: "row", marginTop: 5 }}>
            <View style={{ marginTop: 2 }}>
              <Text style={{ fontSize: 18, marginLeft: 50, marginTop: -50 }}>you are all settled up</Text>
            </View>
          </View>

        <View style={{ marginLeft: 30 }}>
          <Text style={{ marginLeft: 10 }}>You are all settled up!</Text>


          <FlatList
            data={dummyData}
            keyExtractor={(item) => item.id}
            renderItem={renderListItem}
          />

            <View style={{ marginTop: 20, marginLeft: 9 }}> 
              <Text> Non-group expenses no expenses</Text>
            </View>
            
          </View>

          <View style={{ marginTop: 20, marginLeft:40 }}>
            <Text> Hiding groups that have been settled up</Text>
            <Text style = {{marginLeft: 60}}> Over one month.</Text>
          </View>


          <View style={{ height: 40, width: 200, alignSelf: 'center', borderColor: 'green', borderWidth: 1, borderRadius: 6, marginTop: 60 }} >
            <AntDesign.Button name="addusergroup" backgroundColor="white" color="green" size={20} onPress={() => navigation.navigate("Addgroup")} >
              <Text style={{ color: 'green', textAlign: 'center', fontSize: 17 }}>Show 2 settled up  group </Text>
            </AntDesign.Button>
          </View>


          <View style={{ alignSelf: 'flex-end', paddingVertical: 120, alignItems: 'center', marginRight: 20, marginTop: 30 }}>

          <View style={{ alignSelf: 'flex-end', paddingVertical: 120, alignItems: 'center', marginRight: 20, marginTop: 100 }}>

            <Entypo.Button name="text" size={24} color="white" backgroundColor='#11C08E' height={50} width={150} borderRadius={30} marginLeft={13}>
              <Text style={{ color: 'white', fontSize: 17 }}>Add Expense</Text>
            </Entypo.Button>
          </View>

        </View>
      </View>


    </MenuProvider>
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



