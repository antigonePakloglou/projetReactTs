import { View, Text, Button, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Input } from '@rneui/themed'
import AppStyles from '../constants/Styles'
import Colors from '../constants/Colors'

const AddRecetteScreen = () => {
  const [titre, onChangeTitre] = useState<string>();
  const [description, onChangeDescription] = useState<string>();
  const [category, onChangeCategory] = useState<string>();
  const [imagePath, onChangeImagePath] = useState<string>();

  const addRecette = ()=> {

  }

  return (
    <View style={AppStyles.recetteCard}>
    <Text style={AppStyles.inputTitre}>Titre</Text>
    <Input
      onChangeText={text => onChangeTitre(text)}
      value={titre}/>
    <Text style={AppStyles.inputTitre}>Description</Text>
    <TextInput
    multiline={true}
    numberOfLines={10}
    style={AppStyles.inputDescription}/>
    {/* <Input
      onChangeText={text => onChangeDescription(text)}
      value={description} style={AppStyles.inputTextDescription}/> */}
      <Text style={AppStyles.inputTitre}>Catégorie</Text>
    <Input
      onChangeText={text => onChangeCategory(text)}
      value={category}/>
    <Text style={AppStyles.inputTitre}>Image</Text>
    <View style={AppStyles.btnAjouter}>
      <Button onPress={()=> addRecette()} title="Ajouter" color={Colors.lavande} />
    </View>
    
   

   </View>
  )
}


export default AddRecetteScreen