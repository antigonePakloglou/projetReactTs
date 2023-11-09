import { Stack } from 'expo-router';
import { RecettesContext } from '../App';
import { useState } from 'react';
import { recepies } from './constants/Datas';

const StackLayout = () => {
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
    return(
        <RecettesContext.Provider value={{recettesGlobal, modifyRecettesGlobal, addToRecettesGlobal}}>
            <Stack screenOptions={{
                headerStyle:{
                    backgroundColor: 'blue'
                },
                headerTintColor: 'white',
                headerTitleStyle: {
                    fontWeight:"bold"
                }
            }}> 
                <Stack.Screen name='(tabs)' options={{headerShown: false}}/>
        
            </Stack>
        </RecettesContext.Provider>
    )
    
}

export default StackLayout;

/* export default function Layout(){
    return(
        <Stack screenOptions={{
            headerStyle:{
                backgroundColor: 'blue'
            },
            headerTintColor: 'white',
            headerTitleStyle: {
                fontWeight:"bold"
            }
        }}> 
        <Stack.Screen name='home' options={{headerShown:false}}/>
        <Stack.Screen name='profil'/>
        
        </Stack>
    )
} */