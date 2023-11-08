import { View, Text, Button, TextInput, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Input } from '@rneui/themed'
import AppStyles from '../constants/Styles'
import Colors from '../constants/Colors'
import * as ImagePicker from 'expo-image-picker';

const AddRecetteScreen = ({route, navigation} : {route: any, navigation: any}) => {
  const [titre, onChangeTitre] = useState<string>("");
  const [description, onChangeDescription] = useState<string>("");
  const [category, onChangeCategory] = useState<string>("");
  const [imagePath, onChangeImagePath] = useState<string>();
  const [recetteAdd, setRecetteAdd] = useState<Recette>();
  //const [recettes, setRecettes] = useState();

 /*  useEffect(() => {
    //recupere parametres
    if(route.params.recettes){
      setRecettes(route.params.recettes);
    }
}, []); */

  const [image, setImage] = useState<string>("");


  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);

     if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  const addRecette = ()=> {
    console.log('object :>> ', titre);
    //création d'une recette
    setRecetteAdd ({id: 9,
      title: titre,
      category: category,
      isFav: true,
      description: description,
      imagePath: {
      uri: image,
      }});
      console.log('recetteAdd :>> ', recetteAdd);
      //retour affichage toutes les recettes
      navigation.navigate('HomeScreen', {
        recetteAdd : recetteAdd
    })
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
    numberOfLines={5}
    style={AppStyles.inputDescription}
    value={description}
    onChangeText={text => onChangeDescription(text)}
    />
      <Text style={AppStyles.inputTitre}>Catégorie</Text>
    <Input
      onChangeText={text => onChangeCategory(text)}
      value={category}/>
    <Text style={AppStyles.inputTitre}>Image</Text>
    
      <Button title="Ajouter une photo" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    
    <View style={AppStyles.btnAjouter}>
      <Button onPress={()=> addRecette()} title="Ajouter" color={Colors.lavande} />
    </View>
    
   

   </View>
  )
}


export default AddRecetteScreen