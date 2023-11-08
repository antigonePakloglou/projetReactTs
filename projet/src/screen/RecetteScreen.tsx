import { View, Text, Image, TouchableOpacity, Button } from 'react-native'
import React, {useState, useEffect, useContext} from 'react'
import AppStyles from '../constants/Styles'
import { AntDesign } from '@expo/vector-icons'
import Colors from '../constants/Colors'
import { RecettesContext } from '../../App'



const RecetteScreen = ({route, navigation}:{route:any, navigation:any}) => {

  //récupéraration des recettes grace au context
  const {modifyRecettesGlobal, recettesGlobal} = useContext(RecettesContext) as unknown as RecetteContextType;
  const [recette, setRecette] = useState<Recette>(recettesGlobal[0]);
  const [loading, setLoading] = useState(true);

  const [iconName, setIconName] = useState("hearto");
  useEffect(() => {
    //recupere parametres
    if(route.params.recette){
        setRecette(route.params.recette);
        changeIconFav();
        setLoading(false);
    }
}, [recette]);

  //click ajout favoris
  const onPressFav = ()=> {
    recette.isFav = recette.isFav ? false : true;
    setRecette(recette);
    //modifier la liste des recettes global 
    findRecetteInGlobal(recette);
    //gestion affichage de l'icon
    changeIconFav();
  }

  const findRecetteInGlobal = (recetteToUpdate:any)=> {
    const isRecette = (recette:any) => recette.title == recetteToUpdate.title;
    //get index of recette actuelle
    const recetteIndex = recettesGlobal.findIndex(isRecette);
    //remplacement par recette avec modif favoris
    recettesGlobal.splice(recetteIndex, 1, recetteToUpdate);
    modifyRecettesGlobal(recettesGlobal);
    console.log('CHANGE GLOBAL :>> ');
  }

  const changeIconFav = ()=> {
    if(recette.isFav == true){
      setIconName("heart")
    } else {  
      setIconName("hearto")
    }
  }

  if(loading){
    return(
       <Text>Loading</Text>
    )
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