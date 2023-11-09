import { StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import RecetteScreen from './src/screen/RecetteScreen';
import HomeScreen from './src/screen/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from './src/constants/Colors';
import FavorisScreen from './src/screen/FavorisScreen';
import { AntDesign } from '@expo/vector-icons';
import AddRecetteScreen from './src/screen/AddRecetteScreen';
import { recepies } from './src/constants/Datas';
import { createContext, useState } from 'react';

//création d'un context
export const RecettesContext = createContext(null);
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen}
       options={{
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
  //affectation des valeurs de bases des recettes
  const [recettesGlobal, setRecettesGlobal] = useState(recepies.recepies);
  //modification de la recette ajouté et/ou supprimé des favoris
  const modifyRecettesGlobal = (recettes:any, recetteToModifie:any) => {
    setRecettesGlobal(recettes => {
      let allRecettes = recettes.filter(item => item.title !== recetteToModifie.title)
      console.log('allRecettes :>> ', recetteToModifie);
      return [...allRecettes, recetteToModifie]
    })
}
  //ajout de la recette créer aux restes des recettes
  const addToRecettesGlobal = (recettes:any, recetteAdd:any) => {
      setRecettesGlobal(recettes => [...recettes, recetteAdd])
  }
  
  return (
    <RecettesContext.Provider value={{recettesGlobal, modifyRecettesGlobal, addToRecettesGlobal}}>
      <NavigationContainer>
      {/* initialRouteName : route par defaut  */}
        <Stack.Navigator initialRouteName='Home' >
          <Stack.Screen name="Tabs" component={Tabs} 
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen name="RecetteScreen" component={RecetteScreen} 
              options={{
                title: 'Recette',
                headerShown: false,
              }}
            />
        </Stack.Navigator>
      </NavigationContainer>
    </RecettesContext.Provider>
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

