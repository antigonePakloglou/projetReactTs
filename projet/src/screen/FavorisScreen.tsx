import { View, Text, Pressable, FlatList, Image } from 'react-native'
import React, {useEffect, useState} from 'react'
import AppStyles from '../constants/Styles'
import { recepies } from '../constants/Datas'


const FavorisScreen = ({navigation}: {navigation:any}) => {


    const [recettes, setRecettes] = useState(recepies.recepies);
    useEffect(() => {
      const filterRecettes = recettes.filter(recette=> recette.isFav == true );
      setRecettes(filterRecettes);
     
    }, []);

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
    <View style={[AppStyles.container, {backgroundColor: '#F2EAFA'}]}>
    <View style={AppStyles.titleRecetteView}>
          <Text style={AppStyles.titleRecette}>Listes des favoris</Text>
      </View>
    <FlatList
      data={recettes}
      renderItem={renderRecetteItem}
     numColumns={2}
    />
    
  </View>
  )
}


export default FavorisScreen