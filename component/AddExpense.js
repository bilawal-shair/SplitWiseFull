import { Text, View, StyleSheet, TouchableOpacity, TextInput } from "react-native"
import React from "react"
import { Ionicons, MaterialCommunityIcons, MaterialIcons, Feather, FontAwesome5, FontAwesome, Entypo } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { RFValue as rfv, RFPercentage as rfp } from 'react-native-responsive-fontsize';
import { Input } from "@rneui/themed";
import { StatusBar } from "expo-status-bar";

const AddExpense = ({ navigation }) => {

    const handleGoBack = () => {

        navigation.navigate("Dashboard");

    };

    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>

            <StatusBar backgroundColor="#87cefa" />

            <View style={styles.header1}>

                <View style={{ flexDirection: "row", backgroundColor: "#87cefa", justifyContent: "space-between", height: 50 }}>

                    <TouchableOpacity onPress={handleGoBack} style={{ marginTop: 8, marginLeft: 5 }} >
                        <Ionicons name="ios-arrow-back" size={30} color="white" />
                    </TouchableOpacity>

                    <Text style={{ marginTop: 8, fontSize: 22, color: "white" }}>Add expense</Text>


                    <TouchableOpacity style={{ marginTop: 8, right: 12 }}>
                        <FontAwesome5 name="check" size={24} color="white" />
                    </TouchableOpacity>


                </View>
            </View>

            <View style={{ elevation: 1, height: 60, flexDirection: "row" }}>

                <Text style={{ padding: 20 }}>With You and:</Text>

                <View style={{ width: wp(60), marginTop: 10 }}>
                    <TextInput style={{ borderBottomWidth: 1, borderBottomColor: 'gray', fontSize: 15 }} placeholder="Enter names,emails,or phone" />
                </View>
            </View>

            <View style={{ flexDirection: "row", marginTop: 30 }}>
                <View style={{
                    marginLeft: rfv(20), marginTop: rfv(40), width: wp(16), height: hp(8), backgroundColor: 'white',
                    borderColor: '#808080', borderWidth: 1, borderRadius: 10, alignItems: 'center', justifyContent: 'center'
                }}>
                    <MaterialCommunityIcons name="comment-text-outline" size={24} color="black" />
                </View>
                <View style={{ width: wp(65), marginTop: 50, paddingLeft: 10 }}>
                    <TextInput style={{ borderBottomWidth: 2, borderBottomColor: 'green', fontSize: 20 }} placeholder="Enter a description" />
                </View>
            </View>


            <View style={{ flexDirection: "row", marginTop: 20 }}>
                <View style={{
                    marginLeft: rfv(20), marginTop: rfv(40), width: wp(16), height: hp(8), backgroundColor: 'white',
                    borderColor: '#808080', borderWidth: 1, borderRadius: 8, alignItems: 'center', justifyContent: 'center'
                }}>
                    <Feather name="dollar-sign" size={24} color="black" />
                </View>


                <View style={{ width: wp(65), marginTop: 50, paddingLeft: 10 }}>
                    <TextInput style={{ borderBottomWidth: 2, borderBottomColor: 'green', fontSize: 20 }} placeholder="0.00" />
                </View>


            </View>


            <View style={{ flexDirection: "row", marginTop: 30 }}>

                <View style={{ flexDirection: "row", marginLeft: 30 }}>

                    <Text>Paid by</Text>

                    <View style={{
                        marginLeft: rfv(10), marginTop: rfv(-10), width: wp(20), height: hp(6), backgroundColor: 'white',
                        borderColor: '#808080', borderWidth: 1, borderRadius: 8, alignItems: 'center', justifyContent: 'center'
                    }}>
                        <Text>you</Text>
                    </View>
                </View>


                <View style={{ flexDirection: "row" }}>

                    <Text style={{ marginLeft: 10 }}>and split</Text>

                    <View style={{
                        marginLeft: rfv(10), marginTop: rfv(-10), width: wp(20), height: hp(6), backgroundColor: 'white',
                        borderColor: '#808080', borderWidth: 1, borderRadius: 8, alignItems: 'center', justifyContent: 'center'
                    }}>
                        <Text>equally</Text>
                    </View>
                </View>
            </View>

            <View style={styles.footer}>
            </View>

            <View style={{ flexDirection: "row" }}>

                <TouchableOpacity style={{ flexDirection: "row", marginTop: rfv(3) }}>
                    <FontAwesome style={{ marginTop: rfv(10), marginLeft: rfv(7) }} name="group" size={24} color="red" />
                    <Text style={{ marginTop: rfv(10), marginLeft: rfv(10) }}>Choose group</Text>
                </TouchableOpacity>


                <View style={{ flexDirection: "row", marginTop: rfv(14), marginLeft: rfv(130) }}>


                    <TouchableOpacity>
                        <MaterialIcons name="date-range" size={24} color="#808080" />
                    </TouchableOpacity>

                    <TouchableOpacity style={{ marginLeft: rfv(7) }}>
                        <Entypo name="camera" size={25} color="#4B0082" />
                    </TouchableOpacity>

                    <TouchableOpacity style={{ marginLeft: rfv(7) }}>
                        <FontAwesome name="pencil-square-o" size={24} color="#008000" />
                    </TouchableOpacity>
                </View>
            </View>


        </SafeAreaView >
    )
}

export default AddExpense;

const styles = StyleSheet.create({
    header1: {
        width: 360,
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        // marginTop: ,

    },
    footer: {
        flexDirection: 'row',
        width: '100%',
        height: 40,
        borderBottomColor: '#d3d3d3',
        borderBottomWidth: 2,
        marginTop: 200,
    },

})