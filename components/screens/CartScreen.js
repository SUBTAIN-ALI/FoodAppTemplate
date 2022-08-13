import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";

function CartScreen({ navigation, route }) {
  const item = route.params;
  const [addstate, setaddstate] = useState(0);
  const AddCard = () => {
    setaddstate(addstate + 1);
  };
  const MinCard = () => {
    setaddstate(addstate - 1);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons
          name="chevron-back"
          size={30}
          color="black"
          onPress={navigation.goBack}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Cart</Text>
      </View>
      <View style={styles.div}>
        <Image
          source={item.image}
          style={{ height: 140, width: 140, borderRadius: 75, marginLeft: 10 }}
        />
        <View style={styles.divtext}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>{item.name}</Text>
          <Text>{item.ingrediants}</Text>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            ${item.Price}
          </Text>
        </View>
        <View></View>
        <View style={{alignItems:'center'}}>
          <Text style={{fontSize:20,
          fontWeight:'bold'}}>{addstate}</Text>
          <View style={styles.btn}>
            <TouchableOpacity
              style={{ paddingHorizontal: 5 }}
              onPress={AddCard}
            >
              <AntDesign name="plus" size={20} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ paddingHorizontal: 5 }}
              onPress={MinCard}
            >
              <AntDesign name="minus" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    paddingLeft: 15,
    paddingTop: 40,
  },
  div: {
    height: "20%",
    width: "90%",
    marginLeft: 20,
    marginRight: 20,
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 20,
    marginTop: 20,
    alignItems: "center",
  },
  divtext: {
    marginHorizontal: 10,
  },
  btn: {
    height: 40,
    width: 80,
    backgroundColor: "#FA5826",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
