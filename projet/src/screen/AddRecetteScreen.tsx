import { View, Text, Button, TextInput, Image, Pressable } from 'react-native'
import React, { useContext, useState } from 'react'
import { Input } from '@rneui/themed'
import AppStyles from '../constants/Styles'
import Colors from '../constants/Colors'
import * as ImagePicker from 'expo-image-picker';
import { RecettesContext } from '../../App'
import { useFocusEffect } from '@react-navigation/native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const AddRecetteScreen = ({navigation} : {navigation: any}) => {
  //récupéraration des recettes grace au context
  const {modifyRecettesGlobal, recettesGlobal} = useContext(RecettesContext) as unknown as RecetteContextType;
  const [recettes, setRecettes] = useState<Recette[]>([]);

  const [titre, onChangeTitre] = useState<string>("");
  const [description, onChangeDescription] = useState<string>("");
  const [category, onChangeCategory] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [imagePath, setImagePath] = useState<string>("");
  const [recetteAdd, setRecetteAdd] = useState<Recette | any>();

  
   useFocusEffect(() => {
    //recupere nouvelles recettes au retour sur cette page
    setRecettes(recettesGlobal);
});

  
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);

    if(result.assets !== null){
      console.log('object :>> ', result.assets[0].uri);
      //recup hash de image voulus
      let img = result.assets[0].uri;
      setImage(img);
      setImagePath(img.substring(img.lastIndexOf("/")+1));
    }
  
    
  };

  const addRecette = ()=> {
    //création d'une recette
    const newRecette : Recette = {
      //a changer 
      id: 9,
      title: titre,
      category: category,
      isFav: false,
      description: description,
      imagePath: {
      uri: imagePath,
      }
    }
    setRecetteAdd (newRecette); 
    //ajout de la recette a la liste globale
    recettes.push(newRecette)
    modifyRecettesGlobal(recettes);
    //retour affichage toutes les recettes
    navigation.navigate('Home');
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
    
    <Pressable style={AppStyles.btnPhoto} onPress={pickImage}>
    <MaterialCommunityIcons name="file-image-plus" size={24} color={Colors.lavande} />
    </Pressable>
      {image && <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />}
    <View style={AppStyles.btnAjouter}>
      <Button onPress={()=> addRecette()} title="Ajouter recette" color={Colors.lavande} />
    </View>
    
   

   </View>
  )
}


export default AddRecetteScreen