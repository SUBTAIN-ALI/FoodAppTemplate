import React from 'react'
import {Text,StyleSheet,View} from 'react-native';
function LocalMall() {
  return (
    <View>
        <Text>
            This is local Mall
        </Text>
    </View>
  )
}

export default LocalMall
const styles=StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
    }
})