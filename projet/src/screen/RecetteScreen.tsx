import { View, Text, Image } from 'react-native'
import React, {useState, useEffect} from 'react'
import { Card } from '@rneui/themed'
import AppStyles from '../constants/Styles'



const RecetteScreen = ({route, navigation}:{route:any, navigation:any}) => {

  const [recette, setRecette] = useState({id: 1,
    title: "",
    category: "",
    isFav: false,
    description:
    "",
    imagePath: {
    uri: "",
    }});

  useEffect(() => {
    //recupere parametres
    if(route.params.recette){
        setRecette(route.params.recette);
    }
}, []);
    

  return (
    <View style={AppStyles.container}>
      <Text>{recette.title}</Text>
      <Text>{recette.description}</Text>
      <Image style={AppStyles.recetteImg}
              source={{uri: recette.imagePath.uri}}
        />
      {/* <Card >
        <Card.Title >{recette.title}</Card.Title>
        <Card.Divider />
        {  <Card.Image style={AppStyles.recetteImg}
              source={{uri: recette.imagePath.uri}}
        /> } 
                   
      </Card> */}
    </View>
  )
}


export default RecetteScreen