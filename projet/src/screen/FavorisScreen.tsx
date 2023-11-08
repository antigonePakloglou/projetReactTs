import { View, Text, Pressable, FlatList, Image } from 'react-native'
import React, {useContext, useEffect, useState} from 'react'
import AppStyles from '../constants/Styles'
import { recepies } from '../constants/Datas'
import { RecettesContext } from '../../App'


const FavorisScreen = ({navigation}: {navigation:any}) => {

  //récupéraration des recettes grace au context
  const {recettesGlobal} = useContext(RecettesContext) as unknown as RecetteContextType;
  const [recettes, setRecettes] = useState<Recette[]>(recettesGlobal);
  useEffect(() => {
    const filterRecettes = recettes.filter(recette=> recette.isFav == true );
    setRecettes(filterRecettes);
    console.log('Recette Glob filter  :>> ', filterRecettes );
     
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