import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import { Input } from '@rneui/themed';
import AppStyles from '../constants/Styles'


const AddRecetteScreen = () => {
    const [titre, onChangeTitre] = useState<string>();
    const [description, onChangeDescription] = useState<string>();
    const [category, onChangeCategory] = useState<string>();
    const [imagePath, onChangeImagePath] = useState<string>();
   /*  console.log(titre); */

   const addRecette = ()=> {
   
   }

  return (
   /*  <View >
        <Text>Test affcihage creation recette</Text>
        <Text>Titre</Text>
        <Input
      onChangeText={text => onChangeTitre(text)}
      value={titre}
    />
    </View> */
     <View style={AppStyles.recetteCard}>
      <Text>Titre</Text>
      <Input
        onChangeText={text => onChangeTitre(text)}
        value={titre}/>
      <Text>Description</Text>
      <Input
        onChangeText={text => onChangeDescription(text)}
        value={description}/>
        <Text>Catégorie</Text>
      <Input
        onChangeText={text => onChangeCategory(text)}
        value={category}/>
      <Text>Image</Text>
      
      <Button
  onPress={()=> addRecette()}
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
     
  
     </View>
  )
}


export default AddRecetteScreen