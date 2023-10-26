import { View, Text, Pressable, FlatList } from 'react-native'
import React, {useState, useEffect} from 'react'
import { Card } from '@rneui/themed'
import AppStyles from '../constants/Styles'
import { recepies } from '../constants/Datas'


const HomeScreen = ({navigation}: {navigation:any}) => {
    
 /*    const [recettes, setRecettes] = useState<Recette[]>([
        {nom: 'Gateau', ingredients: ['Farine', 'Chocolat', 'Oeufs']},
        {nom: 'Tarte', ingredients: ['Beurre', 'Pomme', 'Sucre']},
        {nom: 'Tiramisu', ingredients: ['Cacao', 'Biscuit', 'Mascarpone']}, 
    ]) */

    const [recettes, setRecettes] = useState(recepies.recepies);

    const renderRecetteItem = ({item}:{item: any}) => {
        return(
            <Pressable onPress={()=> {
                navigation.navigate('RecetteScreen', {
                        recette : item
                })
            }}>
                <View style={AppStyles.recettesCard}>
                <Card >
                    <Card.Title >{item.title}</Card.Title>
                    <Card.Divider />
                    {  <Card.Image style={AppStyles.recetteImg}
                        
                        source={{uri: item.imagePath.uri}}
                    /> } 
                     
                </Card>
            </View>

            </Pressable>
        )
    }

  return (
    <View style={AppStyles.container}>
    <View >
          <Text >Listes des recettes</Text>
      </View>
    <FlatList
      data={recettes}
      renderItem={renderRecetteItem}
     numColumns={2}
    />
    
  </View>
  )
}


export default HomeScreen