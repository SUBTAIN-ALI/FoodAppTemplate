import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import { TouchableOpacity } from "react-native-gesture-handler";


function DetailScreen({ navigation, route }) {
  const item = route.params;
  return (
    <SafeAreaView style={{ backgroundColor: "white",}}>
      <View style={styles.create}>
        <Ionicons name="arrow-back-outline" size={24} color="black" onPress={navigation.goBack}/>
        <Text style={styles.headertextstyle}>Detail Screeeeen</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.imagestyle}>
          <Image
            source={item.image}
            style={{ height: 220, width: 220, borderRadius: 110 }}
          />
        </View>
        <View style={styles.detailstyle}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={styles.itemnamestyle}>{item.name}</Text>
            <TouchableOpacity style={styles.favouritestyle}>
              <FontAwesome name="heart-o" size={24} color="#FA5826" />
            </TouchableOpacity>
          </View>
          <View style={{marginTop:15,}}>
            <Text style={{ fonst: 15, color: "white",paddingLeft:20, }}>
              Fast food is a type of mass-produced food designed for commercial
              resale and with a strong priority placed on "speed of service"
              versus other relevant factors involved in culinary science.
              Fast food was created as a commercial strategy to accommodate
              the larger numbers of busy commuters, travelers and wage
              workers who often did not have the time to sit down at
              a public house or diner and wait for their meal. In 2018,
              the fast food industry was worth an estimated $570 billion globally.
            </Text>
          </View>
          <TouchableOpacity style={styles.addCart} onPress={()=> navigation.navigate("Cart",item)} >
            <Text style={{fontSize:20,fontWeight:'bold',color:'#FA5826'}}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default DetailScreen;

const styles = StyleSheet.create({
  create: {
    marginHorizontal: 20,
    marginTop: 14,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
  },
  headertextstyle: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    justifyContent: "center",
  },
  imagestyle: {
    alignItems: "center",
    justifyContent: "center",
    height: 280,
  },
  detailstyle: {
    backgroundColor: "#FA5826",
    marginTop: 10,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingTop: 40,
    paddingBottom: 40,
    flex:1,
    
  },
  itemnamestyle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 20,
  },
  favouritestyle: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: "white",
    alignItems: "center",
    marginLeft:180,
    marginHorizontal:15,
    justifyContent: "center",
  },
  addCart:{
    height:50,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white',
    marginVertical:20,
    marginHorizontal:20,
    marginTop:20,
    borderRadius:25,
  }
  
});
