import { View, Text, Pressable, FlatList, Image } from 'react-native'
import React, {useContext, useState} from 'react'
import AppStyles from '../constants/Styles'
import { RecettesContext } from '../../App'
import { useFocusEffect } from '@react-navigation/native'



const HomeScreen = ({navigation}: {navigation:any}) => {

    //récupéraration des recettes grace au context
    const {recettesGlobal} = useContext(RecettesContext) as unknown as RecetteContextType;
    const [recettes, setRecettes] = useState<Recette[]>([]);

    useFocusEffect(() => {
      //recupere nouvelles recettes au retour sur cette page
      setRecettes(recettesGlobal);
  });

  
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
      data={recettesGlobal}
      renderItem={renderRecetteItem}
     numColumns={2}
    />
    
  </View>
  )
}


export default HomeScreen