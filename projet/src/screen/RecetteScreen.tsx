import { View, Text, Image, TouchableOpacity, Button } from 'react-native'
import React, {useState, useEffect} from 'react'
import AppStyles from '../constants/Styles'
import { AntDesign } from '@expo/vector-icons'
import Colors from '../constants/Colors'



const RecetteScreen = ({route, navigation}:{route:any, navigation:any}) => {

  const [recette, setRecette] = useState<Recette>({id: 1,
    title: "",
    category: "",
    isFav: true,
    description:
    "",
    imagePath: {
    uri: "https://www.auxdelicesdupalais.net/wp-content/uploads/2020/06/pancakes-fluffy-2.jpg",
    }});

  const [iconName, setIconName] = useState("hearto");
  useEffect(() => {
    //recupere parametres
    if(route.params.recette){
        setRecette(route.params.recette);
    }
}, []);
    
  //click ajout favoris
  const onPressFav = ()=> {
    recette.isFav = recette.isFav ? false : true;
    setRecette(recette);
    //gestion affichage de l'icon
    if(recette.isFav == true){
      setIconName("heart")
    } else {  
      setIconName("hearto")
    }
  }

  return (
  <View style={AppStyles.recetteCard}>
    <Text style={AppStyles.recetteTitle}>{recette.title}</Text>
    <Image style={AppStyles.recetteImg}
              source={{uri: recette.imagePath.uri}}
        />
    <Text style={AppStyles.recetteDescription}>{recette.description}</Text>
    <TouchableOpacity style={AppStyles.favoris} onPress={()=> onPressFav()}> 
      <AntDesign name={iconName} size={36} color={Colors.lavande } /> 
    </TouchableOpacity>  
    <Text style={AppStyles.favorisText}>Ajouter au favoris</Text> 
    <View style={AppStyles.accueilBtn}>
      <Button title="Accueil" color={Colors.lavande}  onPress={()=>navigation.navigate('Home')}></Button>
    </View>  
  </View>
  )
}


export default RecetteScreen