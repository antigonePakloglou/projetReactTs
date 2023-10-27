import { View, Text, Image } from 'react-native'
import React, {useState, useEffect} from 'react'
import AppStyles from '../constants/Styles'



const RecetteScreen = ({route, navigation}:{route:any, navigation:any}) => {

  const [recette, setRecette] = useState<Recette>({id: 1,
    title: "",
    category: "",
    isFav: false,
    description:
    "",
    imagePath: {
    uri: "https://www.auxdelicesdupalais.net/wp-content/uploads/2020/06/pancakes-fluffy-2.jpg",
    }});

  useEffect(() => {
    //recupere parametres
    if(route.params.recette){
        setRecette(route.params.recette);
    }
}, []);
    

  return (
  <View style={AppStyles.recetteCard}>
    <Text style={AppStyles.recetteTitle}>{recette.title}</Text>
    <Image style={AppStyles.recetteImg}
              source={{uri: recette.imagePath.uri}}
        />
    <Text style={AppStyles.recetteDescription}>{recette.description}</Text>
    </View>
  )
}


export default RecetteScreen