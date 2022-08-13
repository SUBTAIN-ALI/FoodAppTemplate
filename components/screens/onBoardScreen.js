import React from 'react'
import {View,Text,StyleSheet,Image,TouchableOpacity} from 'react-native'


function onBoardScreen({navigation}) {
  return (
    <View style={styles.container}>
       <View style={styles.imagetop}>
        <Image  style={styles.imagestyle} source={require('../../assets/categories/sushi.png')} />
      </View> 
      <View style={styles.imagetop}>
        <Text style={styles.headingStyle}>Delicious Food</Text>
        <Text style={styles.textStyle}>We help you to find best and delicious food</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.buttonStyle} onPress={()=>navigation.navigate("Home")}>
          <Text style={styles.buttontextstyle}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default onBoardScreen

const styles=StyleSheet.create({
  container:{
    backgroundColor:'white',
    flex:1,
  },
  imagetop:{
    paddingTop:40,
    marginTop:40,
    justifyContent:'center',
    alignItems:'center',
  },
  imagestyle:{
     width:300,
     height:300,
    borderRadius:250,
  },
  headingStyle:{
    fontSize:20,
    color:'black',
    fontWeight:'bold',
    textAlign:'center',
  },
  textStyle:{
    marginTop:20,
    fontSize:18,
    textAlign:'center',
    color:'grey',
    paddingHorizontal:60,
  },
  buttonStyle:{
    backgroundColor:'#FA5826',
    height:60,
    borderRadius:30,
    justifyContent:'center',
    alignItems:'center',
    margin:30,
  },
  buttontextstyle:{
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center',
  }
})