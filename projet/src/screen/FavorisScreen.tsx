import { View, Text, Pressable, FlatList, Image } from 'react-native'
import React, {useContext, useEffect, useState} from 'react'
import AppStyles from '../constants/Styles'
import { RecettesContext } from '../../App'


const FavorisScreen = ({navigation}: {navigation:any}) => {

  //récupéraration des recettes grace au context
  const {recettesGlobal} = useContext(RecettesContext) as unknown as RecetteContextType;
  const [recettesFavoris, setRecettesFavoris] = useState<Recette[]>([]);
  const [loading, setLoading] = useState(true);

   
  useEffect(() => {
    getFavorisRecettes();
    setLoading(false);
  }, [recettesGlobal]);


  const getFavorisRecettes = ()=> {
    //récup recettes qui sont favorites dans liste globale
    const filterRecettes = recettesGlobal.filter((recette:any) => recette.isFav == true);
    setRecettesFavoris([...filterRecettes]); 
  }


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
    if(loading){
      return(
         <Text>Loading</Text>
      )
    }
  return (
    <View style={[AppStyles.container, {backgroundColor: '#F2EAFA'}]}>
    <View style={AppStyles.titleRecetteView}>
          <Text style={AppStyles.titleRecette}>Listes des favoris</Text>
      </View>
    <FlatList
      data={recettesFavoris}
      renderItem={renderRecetteItem}
     numColumns={2}
    />
    
  </View>
  )
}


export default FavorisScreen