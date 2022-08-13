import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DetailScreen from "./components/screens/DetailScreen";
import onBoardScreen from "./components/screens/onBoardScreen";
import BottomScreen from "./components/screens/BottomScreen";
import LocalMall from "./components/screens/LocalMall";
import FavouriteScreen from "./components/screens/FavouriteScreen";
import CartScreen from "./components/screens/CartScreen";
import { StatusBar } from "expo-status-bar";
import 'react-native-gesture-handler';

const Stack=createStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
     <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
     <Stack.Navigator screenOptions={{headerShown:false}}>
       <Stack.Screen name='BoardScreen' component={onBoardScreen}/>
       <Stack.Screen name='Home' component={BottomScreen} />
       <Stack.Screen name='Detail' component={DetailScreen} />
       <Stack.Screen name='LocalMall' component={LocalMall} />
       <Stack.Screen name="favourite" component={FavouriteScreen} />
       <Stack.Screen name='Cart' component={CartScreen} />
       
     </Stack.Navigator>
   </NavigationContainer>
    
  );
}

