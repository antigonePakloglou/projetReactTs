import { View, Text, Pressable, FlatList } from 'react-native'
import React, {useState} from 'react'
import { Card } from '@rneui/themed';


const HomeScreen = ({navigation}: {navigation:any}) => {
    
    const [recettes, setRecettes] = useState<Recette[]>([
        {nom: 'Gateau', ingredients: ['Farine', 'Chocolat', 'Oeufs']},
        {nom: 'Tarte', ingredients: ['Beurre', 'Pomme', 'Sucre']},
        {nom: 'Tiramisu', ingredients: ['Cacao', 'Biscuit', 'Mascarpone']}, 
    ])

    const renderRecetteItem = ({item}:{item: Recette}) => {
        return(
            <Pressable onPress={()=> {
                navigation.navigate('RecettesScreen', {
                        recette : item
                })
            }}>
                <View>
                <Card >
                    <Card.Title >{item.nom}</Card.Title>
                    <Card.Divider />
                   {/*  <Card.Image
                        
                        source={{uri: item.image}}
                    /> */}
                     
                </Card>
            </View>

            </Pressable>
        )
    }

  return (
    <View >
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