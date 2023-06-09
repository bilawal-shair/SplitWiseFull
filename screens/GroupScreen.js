import { Image, StyleSheet, Text, TouchableOpacity, View, FlatList, TouchableWithoutFeedback, ScrollView, RefreshControl } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FontAwesome, } from '@expo/vector-icons';
import { MenuProvider, Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import { useState } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage as rfp, RFValue as rfv } from 'react-native-responsive-fontsize';
import { Octicons, MaterialIcons, AntDesign, Entypo, MaterialCommunityIcons, Ionicons, FontAwesome5 } from '@expo/vector-icons';



const GroupScreen = ({ navigation, route }) => {

  const [selectedOption, setSelectedOption] = useState(null);
  const [isFilled, setIsFilled] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const [addGroup, SetAddGroup] = useState(false);
  const [type, setType] = useState('');

  const handleRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };


  const handlePress = (iconName) => {
    setIsFilled(iconName);
  };
import AddGroup from './AddGroup';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage as rfp, RFValue as rfv } from 'react-native-responsive-fontsize';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const GroupScreen = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelection = (option) => {
    setSelectedOption(option);
  };


  const dummyData = [
    { id: '1', name: 'no expenses', image: require('../assets/th.jpeg') },

  ];



  const renderItem = ({ item }) => (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity onPress={() => navigation.navigate("GroupSettle")}>
        <Image source={item.image} style={{ width: 100, height: 100, marginTop: 100, borderRadius: 20, marginLeft: 15 }} />

      </TouchableOpacity>

      <Text style={{ marginTop: 140, marginLeft: 20 }}>{item.name}</Text>
    </View>
  );

  const renderSelectedView = () => {



    if (selectedOption === 'All Group') {
      return (
        <View style={{ marginTop: 15 }}>
          <Text style={{ marginLeft: 30 }}> you are all settled up! </Text>
          <FlatList
            data={dummyData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />

          <TouchableOpacity style={{ height: 40, width: 200, alignSelf: 'center', borderColor: 'green', borderWidth: 1, borderRadius: 6, marginTop: 70 }} onPress={() => navigation.navigate("Addgroup")} >
            <AntDesign.Button name="addusergroup" backgroundColor="white" color="green" size={20} onPress={() => navigation.navigate("Addgroup")} >
              <Text style={{ color: 'green', textAlign: 'center', fontSize: 17 }}>Start a new group </Text>
            </AntDesign.Button>
          </TouchableOpacity>


          <TouchableOpacity style={{
            marginTop: 150, flexDirection: "row", justifyContent: "flex-end", marginRight: 3, borderWidth: 1, width: 160,
            marginLeft: 180, borderRadius: 30, height: 50, backgroundColor: "#11C08E", borderColor: "#11C08E", elevation: 9
          }} onPress={() => navigation.navigate("AddExpense")}>
            <FontAwesome5 style={{ paddingTop: 12 }} name="buromobelexperte" size={24} color="green" />
            <Text style={{ fontSize: 18, marginRight: 17, paddingTop: 12, color: "white" }}>  Add expense</Text>
          </TouchableOpacity>


          <View>
            <Text style={{ marginLeft: 80}}> you are all settled up!</Text>
            <Image
              style={{ width: 60, height: 60, marginTop: 100, marginLeft: 100 }}
              source={{
                uri: "https://d1myhw8pp24x4f.cloudfront.net/software_logo/1551873717_splitwise-logo_mid.png"
              }}
            />
            <View style={{ marginLeft: 80, marginTop: 40 }}>
              <Text>Hiding groups that have been settled up over one month</Text>
            </View>
            <View style={{ height: 40, width: 200, alignSelf: 'center', borderColor: 'green', borderWidth: 1, borderRadius: 6, marginTop: 100 }} >
              <AntDesign.Button name="addusergroup" backgroundColor="white" color="green" size={20} >
                <Text style={{ color: 'green', textAlign: 'center', fontSize: 17 }}>show 2 settled-up groups</Text>
              </AntDesign.Button>
            </View>
            <View style={{ alignSelf: 'flex-end', paddingVertical: 120, alignItems: 'center', marginRight: 20, marginTop: -30 }}>
              <Entypo.Button name="text" size={24} color="white" backgroundColor='#11C08E' height={50} width={150} borderRadius={30} marginLeft={13}>
                <Text style={{ color: 'white', fontSize: 17 }}>Add Expense</Text>
              </Entypo.Button>
            </View>
          </View>
      );
        } else if (selectedOption === 'outStandingBalance') {
      return (
        <View style={{ marginTop: 15 }}>
          <Text style={{ marginLeft: 50 }}> you are all settled up! </Text>

          <Image
            style={{ width: 130, height: 130, alignSelf: "center", marginTop: 50 }}
            source={{
              uri: "https://tse4.mm.bing.net/th?id=OIP.QjpAb1y8UbhbytONHLqSGAHaHa&pid=Api&P=0&h=180"
            }}
          />

          <Text style={{ alignSelf: "center", marginTop: 40 }}>  No one to see here</Text>
          <Text style={{ alignSelf: "center", marginTop: 10, color: "green" }}> Clear filter</Text>

          <TouchableOpacity style={{ height: 40, width: 200, alignSelf: 'center', borderColor: 'green', borderWidth: 1, borderRadius: 6, marginTop: 70 }} onPress={() => navigation.navigate("Addgroup")} >
            <AntDesign.Button name="addusergroup" backgroundColor="white" color="green" size={20} onPress={() => navigation.navigate("Addgroup")} >
              <Text style={{ color: 'green', textAlign: 'center', fontSize: 17 }}>Start a new group </Text>
            </AntDesign.Button>
          </TouchableOpacity>



          <TouchableOpacity style={{
            marginTop: 90, flexDirection: "row", justifyContent: "flex-end", marginRight: 3, borderWidth: 1, width: 160,
            marginLeft: 180, borderRadius: 30, height: 50, backgroundColor: "#11C08E", borderColor: "#11C08E", elevation: 9
          }} onPress={() => navigation.navigate("AddExpense")}>
            <FontAwesome5 style={{ paddingTop: 12 }} name="buromobelexperte" size={24} color="green" />
            <Text style={{ fontSize: 18, marginRight: 17, paddingTop: 12, color: "white" }}>  Add expense</Text>
          </TouchableOpacity>
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

        <View style={{ marginTop: 15 }}>
          <Text style={{ marginLeft: 50 }}> No groups owe you  </Text>

          <Image
            style={{ width: 130, height: 130, alignSelf: "center", marginTop: 50 }}
            source={{
              uri: "https://tse4.mm.bing.net/th?id=OIP.QjpAb1y8UbhbytONHLqSGAHaHa&pid=Api&P=0&h=180"
            }}
          />



          <Text style={{ alignSelf: "center", marginTop: 40 }}>  No one to see here</Text>
          <Text style={{ alignSelf: "center", marginTop: 10, color: "green" }}> Clear filter</Text>

          <TouchableOpacity style={{ height: 40, width: 200, alignSelf: 'center', borderColor: 'green', borderWidth: 1, borderRadius: 6, marginTop: 70 }} onPress={() => navigation.navigate("Addgroup")} >
            <AntDesign.Button name="addusergroup" backgroundColor="white" color="green" size={20} onPress={() => navigation.navigate("Addgroup")} >
              <Text style={{ color: 'green', textAlign: 'center', fontSize: 17 }}>Start a new group </Text>
            </AntDesign.Button>
          </TouchableOpacity>

          <TouchableOpacity style={{
            marginTop: 90, flexDirection: "row", justifyContent: "flex-end", marginRight: 3, borderWidth: 1, width: 160,
            marginLeft: 180, borderRadius: 30, height: 50, backgroundColor: "#11C08E", borderColor: "#11C08E", elevation: 9
          }} onPress={() => navigation.navigate("AddExpense")}>
            <FontAwesome5 style={{ paddingTop: 12 }} name="buromobelexperte" size={24} color="green" />
            <Text style={{ fontSize: 18, marginRight: 17, paddingTop: 12, color: "white" }}>  Add expense</Text>
          </TouchableOpacity>


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
    } else {
      return (



        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 18, marginLeft: 25 }}>Welcome to Splitwise,Bilawal!</Text>

          <Image
            style={{ height: 150, width: 150, alignSelf: 'center', borderRadius: 100, marginTop: 40, marginLeft: -10 }}
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJICAGv_L0qYVN1XfisY8xSlKRWrpYbNjzqA&usqp=CAU' }}
          />

          <Text style={{ padding: 30, fontSize: 20, textAlign: 'center' }}>Splitwise groups you create or are added to will show here.</Text>

          <TouchableOpacity style={{ height: 40, width: 200, alignSelf: 'center', borderColor: 'green', borderWidth: 1, borderRadius: 6 }} onPress={() => navigation.navigate("Addgroup")} >
            <AntDesign.Button name="addusergroup" backgroundColor="white" color="green" size={20} onPress={() => navigation.navigate("Addgroup")} >
              <Text style={{ color: 'green', textAlign: 'center', fontSize: 17 }}>Start a new group </Text>
            </AntDesign.Button>
          </TouchableOpacity>


          <View style={{ alignSelf: 'flex-end', paddingVertical: 120, alignItems: 'center', marginRight: 20, marginTop: 4 }} onPress={() => navigation.navigate("AddExpense")}>
            <Entypo.Button name="text" size={24} color="white" backgroundColor='#11C08E' height={50} width={150} borderRadius={30} marginLeft={13} onPress={() => navigation.navigate("AddExpense")}>
              <Text style={{ color: 'white', fontSize: 17 }}>Add Expense</Text>
            </Entypo.Button>
          </View>



        </View>



      )

    }

  };




          


  return (

    <MenuProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false} enableAutomaticScroll>

          <View style={styles.header}>
            <TouchableOpacity>
              <FontAwesome name="search" size={24} color="black" style={{ marginRight: 30 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Addgroup")}>
              <AntDesign name="addusergroup" size={24} color="black" style={{ marginRight: 15 }} />
            </TouchableOpacity>
          </View>

          <View style={{ marginLeft: 310 }}>
            <Menu>
              <MenuTrigger>
                <MaterialCommunityIcons style={{
                  padding: 10,
                  alignSelf: "flex-end", height: 50, backgroundColor: "white"
                }} name="menu-open" size={35} color="black" />
              </MenuTrigger>
              <MenuOptions optionsContainerStyle={{ marginLeft: -10, marginTop: 60 }}>
                <MenuOption onSelect={() => { handleOptionSelection('All Group'); handlePress('icon1'); }}>


          <View style={{ flex: 1 }}>
            <Menu >
              <MenuTrigger>
                <MaterialCommunityIcons style={{ padding: 10, marginLeft: 300, marginTop: 10, height: 50 }} name="menu-open" size={35} color="black" />
              </MenuTrigger>
              <MenuOptions optionsContainerStyle={{ marginLeft: 150, marginTop: 60 }}>
                <MenuOption onSelect={() => handleOptionSelection('All Group')}>

                  <View style={{ flexDirection: "row", marginTop: 10, marginLeft: 15 }}>

                    <TouchableWithoutFeedback onPress={() => { handlePress('icon1'); handleOptionSelection('All Group') }}>
                      <View style={[styles.circle, isFilled === 'icon1' && styles.filledCircle]}>
                        {isFilled === 'icon1' && <View style={styles.dot} />}
                      </View>
                    </TouchableWithoutFeedback>
                    <Text style={{ padding: 10 }}>All groups</Text>
                  </View>

                </MenuOption>

                <MenuOption onSelect={() => { handleOptionSelection('outStandingBalance'); handlePress('icon2') }}>

                  <View style={{ flexDirection: "row", marginLeft: 15 }}>

                    <TouchableWithoutFeedback onPress={() => { handlePress('icon2'); handleOptionSelection('outStandingBalance') }}>
                      <View style={[styles.circle, isFilled === 'icon2' && styles.filledCircle]}>
                        {isFilled === 'icon2' && <View style={styles.dot} />}
                      </View>
                    </TouchableWithoutFeedback>



                    <Text style={{ padding: 10 }}>Outstanding balance</Text>
                  </View>

                </MenuOption>

                <MenuOption onSelect={() => { handleOptionSelection('groupOweScreen'); handlePress('icon3') }}>
                  <View style={{ flexDirection: "row", marginLeft: 15 }}>
                    <TouchableWithoutFeedback onPress={() => { handlePress('icon3'); handleOptionSelection('groupOweScreen') }}>
                      <View style={[styles.circle, isFilled === 'icon3' && styles.filledCircle]}>
                        {isFilled === 'icon3' && <View style={styles.dot} />}
                      </View>
                    </TouchableWithoutFeedback>
                    <Text style={{ padding: 10 }}>Groups ypu owe</Text>
                  </View>
                </MenuOption>

                <MenuOption onSelect={() => { handleOptionSelection('thatOweScreen'); handlePress('icon4') }}>
                  <View style={{ flexDirection: "row", marginLeft: 15 }}>
                    <TouchableWithoutFeedback onPress={() => { handlePress('icon4'); handleOptionSelection('thatOweScreen') }}>
                      <View style={[styles.circle, isFilled === 'icon4' && styles.filledCircle]}>
                        {isFilled === 'icon4' && <View style={styles.dot} />}
                      </View>
                    </TouchableWithoutFeedback>
                    <Text style={{ padding: 10 }}>Groups that owe you</Text>
                  </View>
                </MenuOption>
              </MenuOptions>
            </Menu>
          </View>

          {renderSelectedView()}
          

        </ScrollView >
      </SafeAreaView >


          <View style={{ marginTop: 10 }}>
            <Text style={{ fontSize: 18, marginLeft: 25 }}>Welcome to Splitwise,Bilawal!</Text>
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

         
          <View style={{ alignSelf: 'flex-end', paddingVertical: 120, alignItems: 'center', marginRight: 20, marginTop: 10 }}>
            <Entypo.Button name="text" size={24} color="white" backgroundColor='#11C08E' height={50} width={150} borderRadius={30} marginLeft={13}>
              <Text style={{ color: 'white', fontSize: 17 }}>Add Expense</Text>
            </Entypo.Button>
          </View>

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
            <Entypo.Button  onPress={()=> navigation.navigate('Expense')}name="text" size={24} color="white" backgroundColor='#11C08E'  height={50} width={150} borderRadius={30} marginLeft={13} paddingVertical={ rfv(10)}>
              <Text style={{color: 'white', fontSize: 17}}>Add Expense</Text>
            </Entypo.Button>
          </View>
        </KeyboardAwareScrollView> 
      </SafeAreaView>

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

    marginTop: 10,
    justifyContent: 'flex-end'
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  filledCircle: {
    backgroundColor: 'white',
    borderColor: 'red',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'red',
  },
})

    marginTop: 25,
    marginTop: 20,
    justifyContent: 'flex-end',
  }
})
   
    
    

