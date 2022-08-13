import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialIcons } from '@expo/vector-icons'; 
import { Fontisto } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import HomeScreen from './HomeScreen';
import LocalMall from './LocalMall';
import cartScreen from './CartScreen';
import FavouriteScreen from './FavouriteScreen';

const tab=createBottomTabNavigator();

function BottomScreen() {
  return (
    <tab.Navigator tabBarOptions={{
      style:{
      height:55,
      borderTopWidth:5,
      elevation:0,
    },
    showLabel:false,
    activeTintColor: 'orange',

    }}>
      <tab.Screen name='HomeScreen' component={HomeScreen}
      options={{tabBarIcon:()=><Icon name="home" size={28}/>}} />
      <tab.Screen name='Local Mall' component={LocalMall}
      options={{tabBarIcon:()=><MaterialIcons name="local-mall" size={28} color="black" />}} />
      <tab.Screen name='Search' component={HomeScreen}
      options={{tabBarIcon:()=>(
      <View style={{
        height:60,
        width:60,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        borderColor:'#FA5826',
        borderWidth:2,
        borderRadius:30,
        top:-25,
        elevation:0,
      }}>
      <Ionicons name="search" size={24} color="#FA5826" />
      </View> )}}/>
      <tab.Screen name='favourite' component={FavouriteScreen}
      options={{tabBarIcon:()=><Fontisto name="favorite" size={28} color="black" />}} /> 
      <tab.Screen name='Cart' component={cartScreen} options={{tabBarIcon:()=><Ionicons name="cart-outline" size={24} color="black" />}} />
    </tab.Navigator>
  )
}

export default BottomScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });