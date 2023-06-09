import React from "react"
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Button, Image } from "react-native"
import { Octicons, MaterialIcons, AntDesign, Entypo, MaterialCommunityIcons, Ionicons, FontAwesome5,FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useState } from "react";




const GroupSettle = ({route}) => {
    // const { group }  = route.params?.groupName || '';

    // const { group } = route.params;

    const navigation = useNavigation();


    const handleGoBack = () => {
        navigation.navigate("Groups");
    };

    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>

            <View style={styles.header}>

                <TouchableOpacity style={{ marginRight: 280, marginTop: 10 }} onPress={handleGoBack} >
                    <Ionicons name="ios-arrow-back" size={30} color="white" />
                </TouchableOpacity>

                <TouchableOpacity style={{ marginRight: 20, marginTop: 15 }}>
                    <Ionicons name="md-settings-outline" size={24} color="white" />
                </TouchableOpacity>
            </View>

            <MaterialCommunityIcons style={{ marginTop: -50, marginLeft: 80 }} name="image-multiple-outline" size={40} color="white" />

            {/* <Text> Group Name: {group.groupName} </Text> */}

            {/* <Octicons style={{ marginTop: -20, marginLeft: 80 }} name="image" size={40} color="black" /> 
            <Text>Group Name: {groupData.groupName}</Text> 
             <View style = {{marginTop: 30, marginLeft: 18}}>
                <Text> Group Name: {groupName}</Text>
                
            </View> */}
           
            <Text style={{ marginLeft: 20, marginTop: 70 }}>No expenses here yet</Text>


            <View style={{ marginTop: 50 }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                    <TouchableOpacity style={{ marginLeft: 10, borderWidth: 1, borderRadius: 3, width: 100, height: 35, borderColor: "#A9A9A9", borderBottomWidth: 2.5 }}>
                        <Text style={{ alignSelf: "center", marginTop: 5, fontSize: 17 }}>Settle up</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={{ marginLeft: 10, borderWidth: 1, borderRadius: 3, width: 100, height: 35, borderColor: "#A9A9A9", borderBottomWidth: 2.5 }}>
                        <Text style={{ alignSelf: "center", marginTop: 5, fontSize: 17 }}>Balance</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={{ marginLeft: 10, borderWidth: 1, borderRadius: 3, width: 100, height: 35, borderColor: "#A9A9A9", borderBottomWidth: 2.5 }}>
                        <Text style={{ alignSelf: "center", marginTop: 5, fontSize: 17 }}>Totals</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: "row", marginLeft: 10, borderWidth: 1, borderRadius: 3, width: 110, height: 35, borderColor: "#A9A9A9", borderBottomWidth: 2.5 }}>
                        <MaterialCommunityIcons style={{ marginTop: 8, marginLeft: 5 }} name="diamond-stone" size={20} color="#4B0082" />
                        <Text style={{ alignSelf: "center", marginTop: 5, fontSize: 17, marginLeft: 10 }}>Charts</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={{ flexDirection: "row", marginLeft: 10, borderWidth: 1, borderRadius: 3, width: 150, height: 35, borderColor: "#A9A9A9", borderBottomWidth: 2.5 }}>
                        <MaterialCommunityIcons style={{ marginTop: 8, marginLeft: 5 }} name="diamond-stone" size={20} color="#4B0082" />
                        <Text style={{ alignSelf: "center", marginTop: 5, fontSize: 17, marginLeft: 3 }}>Convert to USD</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={{ marginLeft: 10, borderWidth: 1, borderRadius: 3, width: 100, height: 35, borderColor: "#A9A9A9", borderBottomWidth: 2.5 }}>
                        <Text style={{ alignSelf: "center", marginTop: 5, fontSize: 17 }}>Whiteboard</Text>
                    </TouchableOpacity>



                    <TouchableOpacity style={{ marginLeft: 10, borderWidth: 1, borderRadius: 3, width: 100, height: 35, marginRight: 10, borderColor: "#A9A9A9", borderBottomWidth: 2.5 }}>
                        <Text style={{ alignSelf: "center", marginTop: 5, fontSize: 17 }}>Export</Text>
                    </TouchableOpacity>
                </ScrollView>

            </View>


            <Text style={{ marginBottom: 300, marginLeft: 23, marginTop: 50 }}>You are the only one here</Text>

            <View style={{ marginLeft: 30, marginTop: -250, flexDirection: "row" }} >
                <TouchableOpacity style={{ borderWidth: 1, borderRadius: 20, width: 35, height: 35, backgroundColor: "#90EE90" }}>

                    <MaterialIcons style={{ alignSelf: "center", marginTop: 6 }} name="group-add" size={24} color="#008000" />

                </TouchableOpacity>

                <Text style={{ marginLeft: 20, color: "#008000" }}>Add group members</Text>
            </View>

            <View style={{ marginLeft: 30, marginTop: 10, flexDirection: "row" }} >
                <TouchableOpacity style={{ borderWidth: 1, borderRadius: 20, width: 35, height: 35, backgroundColor: "#90EE90" }}>
                    <AntDesign style={{ alignSelf: "center", marginTop: 6 }} name="sharealt" size={20} color="#008000" />
               </TouchableOpacity>
                     <Text style={{ marginLeft: 20, color: "#008000" }}>Share group link</Text>
            </View>


           <TouchableOpacity style={{ marginTop: 60, flexDirection: "row", justifyContent: "flex-end", marginRight: 3, borderWidth: 1, width: 160, 
                      marginLeft: 180, borderRadius: 30, height: 50, backgroundColor: "#11C08E", borderColor: "#11C08E", elevation: 9 }}>
                <FontAwesome5 style={{ paddingTop: 12 }} name="buromobelexperte" size={24} color="green" />
                <Text style={{ fontSize: 18, marginRight: 17, paddingTop: 12, color: "white" }}>  Add expense</Text>
            </TouchableOpacity>



            <TouchableOpacity style={{ marginTop: 30, flexDirection: "row", justifyContent: "flex-end", 
            marginRight: 3, borderWidth: 1, width: 180, marginLeft: 100, borderRadius: 10, height: 60, 
            backgroundColor: "#11C08E", borderColor: "#11C08E", elevation: 9 }} onPress={()=>navigation.navigate("Groups")}>
               <FontAwesome    style={{padding: 17,paddingRight: 50 }} name="group" size={24} color="green" />
                <Text style={{ fontSize: 25, marginRight: 40, paddingTop: 10, color: "white", marginLeft: -30}}>Done</Text>
            </TouchableOpacity>
        </View>
    )
}

export default GroupSettle
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        width: '100%',
        height: 110,
        borderBottomColor: '#d3d3d3',
        borderBottomWidth: 2,
        marginTop: 50,
        justifyContent: 'flex-end',
        backgroundColor: "#4B0082",
    },

})