import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  FlatList,
  Dimensions,
} from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { EvilIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import categories from "../../consts/categories";
import foods from "../../consts/foods";
import { Ionicons } from "@expo/vector-icons";
const { width } = Dimensions.get("screen");
const cardWidth = width / 2 - 20;
function HomeScreen({navigation}) {
  const [selectcategorizeindex, setselectcategorizeindex] = useState(0);

  const ListCategories = () => {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriselistbtn}
      >
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setselectcategorizeindex(index)}
          >
            <View
              style={{
                backgroundColor:
                  selectcategorizeindex == index ? "#FA5826" : "grey",
                ...styles.categorybtn,
              }}
            >
              <View style={styles.categoryimgbtn}>
                <Image
                  source={category.image}
                  style={{
                    height: 35,
                    width: 35,
                    borderRadius: 30,
                    resizeMode: "cover",
                  }}
                />
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    marginLeft: 10,
                    color: selectcategorizeindex == index ? "white" : "#FA5826",
                  }}
                >
                  {category.name}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };
  const Cart = ({ food }) => {
    return (
      <TouchableHighlight
        activeOpacity={0.9}
        onPress={() => navigation.navigate("Detail", food)}
      >
        <View style={styles.cardstyle}>
          <View style={{ alignItems: "center", top: -40 }}>
            <Image
              source={food.image}
              style={{ height: 60, width: 60, borderRadius: 30 }}
            />
          </View>
          <View style={styles.foodcartviewstyle}>
            <Text style={styles.foodnamestyle}>{food.name}</Text>
          </View>
          <View style={styles.foodcartviewstyle}>
            <Text style={styles.foodnamestyle}>{food.ingrediants}</Text>
          </View>
          <View style={styles.foodcardpricetyle}>
            <Text style={styles.foodnamestyle}>${food.Price}</Text>
            <View style={styles.addcardstyle}>
              <Ionicons name="add" size={24} color="white" />
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerStyle}>
        <View>
          <Text style={styles.headertext}>Hello, Ariz</Text>
          <Text style={styles.parTextStyle}>What do you want today</Text>
        </View>
        <View style={styles.Imageheader}>
          <Image
            style={styles.ImageStyle}
            source={require("../../assets/person.png")}
          />
        </View>
      </View>
      <View style={{ flexDirection: "row", margin: 20 }}>
        <View style={styles.inputcontainer}>
          <EvilIcons name="search" size={30} color="black" />
          <TextInput
            style={{ flex: 1, fontSize: 20 }}
            placeholder="search for food"
          />
        </View>
        <View style={styles.sortbtn}>
          <MaterialIcons name="tune" size={24} color="black" />
        </View>
      </View>
      <View>
        <ListCategories />
      </View>
      <FlatList
        showsVertivalScrollIndicator={false}
        numColumns={2}
        data={foods}
        renderItem={({ item }) => <Cart food={item} />}
      />
    </View>
  );
}

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  headerStyle: {
    paddingTop: 20,
    marginHorizontal: 20,
    flexDirection: "row",
  },
  headertext: {
    color: "black",
    fontWeight: "bold",
    fontSize: 25,
  },
  parTextStyle: {
    paddingTop: 5,
    fontSize: 20,
    color: "grey",
  },
  ImageStyle: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  Imageheader: {
    paddingHorizontal: 60,
    marginHorizontal: 30,
  },
  inputcontainer: {
    backgroundColor: "#E6E6E3",
    height: 50,
    flexDirection: "row",
    borderRadius: 10,
    alignItems: "center",
    paddingHorizontal: 10,
    flex: 1,
  },
  sortbtn: {
    height: 50,
    width: 50,
    backgroundColor: "#FA5826",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  categoriselistbtn: {
    paddingVertical: 10,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  categorybtn: {
    height: 45,
    width: 120,
    marginRight: 7,
    borderRadius: 30,
    alignItems: "center",
    paddingHorizontal: 5,
    flexDirection: "row",
  },
  categoryimgbtn: {
    height: 35,
    width: 35,
    backgroundColor: "white",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  cardstyle: {
    height: 200,
    width: cardWidth,
    backgroundColor: "white",
    borderRadius: 15,
    paddingTop: 15,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 50,
    elevation: 13,
  },
  foodnamestyle: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
  },
  foodcartviewstyle: {
    marginVertical: 5,
    paddingLeft: 20,
  },
  foodcardpricetyle: {
    marginVertical: 5,
    paddingLeft: 20,
    flexDirection: "row",
  },
  addcardstyle: {
    height: 30,
    width: 30,
    borderRadius: 20,
    backgroundColor: "#FA5826",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 50,
  },
});
