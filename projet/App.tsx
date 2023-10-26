import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import RecettesScreen from './src/screen/RecettesScreen';
import HomeScreen from './src/screen/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from './src/screen/constants/Colors';
import FavorisScreen from './src/screen/FavorisScreen';
import { AntDesign } from '@expo/vector-icons';
import AddRecetteScreen from './src/screen/AddRecetteScreen';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarActiveTintColor: 'pink',
        tabBarInactiveTintColor: 'blue',
        headerShown: false,
        tabBarIcon: (({focused}) => <FontAwesome5 name="home" size={24} color={focused ? Colors.orange : Colors.lavande} />)
      }} />
      { <Tab.Screen name="Favoris" component={FavorisScreen}  options={{
        tabBarActiveTintColor: 'pink',
        tabBarInactiveTintColor: 'blue',
        headerShown: false,
        tabBarIcon: (({focused}) => <AntDesign name="hearto" size={24} color={focused ? Colors.orange : Colors.lavande} />)
      }} />}
       <Tab.Screen name="Add" component={AddRecetteScreen} options={{
        tabBarActiveTintColor: 'pink',
        tabBarInactiveTintColor: 'blue',
        headerShown: false,
        tabBarIcon: (({focused}) => <AntDesign name="addfolder" size={24} color={focused ? Colors.orange : Colors.lavande} />)
      }} />
    </Tab.Navigator>
  )
}


export default function App() {
  return (
    <NavigationContainer>
    {/* initialRouteName : route par defaut  */}
   <Stack.Navigator initialRouteName='Home' >

   <Stack.Screen name="Tabs" component={Tabs} 
       options={{
        headerShown: false
       }}
     />
     <Stack.Screen name="RecettesScreen" component={RecettesScreen} 
       options={{
         title: 'Quizz',
         headerShown: false,
       }}
     />
   
 
   
 
   </Stack.Navigator>
 </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
