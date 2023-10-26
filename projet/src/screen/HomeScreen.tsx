import { View, Text, Pressable, FlatList, Image } from 'react-native'
import React, {useState, useEffect} from 'react'
import { Card } from '@rneui/themed'
import AppStyles from '../constants/Styles'
import { recepies } from '../constants/Datas'


const HomeScreen = ({navigation}: {navigation:any}) => {


    const [recettes, setRecettes] = useState(recepies.recepies);

    const renderRecetteItem = ({item}:{item: any}) => {
        return(
            <Pressable onPress={()=> {
                navigation.navigate('RecetteScreen', {
                        recette : item
                })
            }}>
            
                <View style={AppStyles.recettesCard}>
                    <Text style={AppStyles.recettesTitle}>{item.title}</Text>
                    <Image style={AppStyles.recettesImg}
                            source={{uri: item.imagePath.uri}}
                        />
                </View>
            </Pressable>
        )
    }

  return (
    <View style={AppStyles.container}>
    <View style={AppStyles.titleRecetteView}>
          <Text style={AppStyles.titleRecette}>Listes des recettes</Text>
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