import {StyleSheet} from "react-native";
import Colors from "./Colors";

export default StyleSheet.create({
    /* Toutes les pages */
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        //backgroundColor: Colors.lightLavande
    },
    titleRecetteView: {
        marginTop: 50,
    },
    titleRecette: {
       fontWeight: '700',
       fontSize: 20,
       color: Colors.darkLavande,
       textDecorationLine: 'underline'
    },
    /* Toutes les recettes */
    recettesCard: {
        marginTop: 15,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: Colors.lavande,
        borderRadius: 50,
        padding: 5,
        width: 150,
        height: 200
    },
    recettesImg: {
        width: 90,
        height: 90,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
       
    },
    recettesTitle: {
        fontSize: 15,
        textDecorationLine: 'underline',
        textAlign: 'center'
    },
    /* Affichage unitaire recette */
    recetteCard: {
        marginTop: 50,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: Colors.lavande,
        borderRadius: 50,
        padding: 20
    },
    recetteImg: {
        width: 250,
        height: 190,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
       
    },
    recetteTitle: {
        fontSize: 22,
        textDecorationLine: 'underline'
    },
    recetteDescription: {
        textAlign: 'center',
        fontSize: 12,
        padding: 5
        
    },
    favoris: {
        marginTop: 20
    },
    favorisText: {
        fontSize: 8,
        fontStyle: 'italic'
    },
    accueilBtn : {
        marginTop: 20
    },
    /* Ajout recette */
    btnAjouter: {
        marginTop: 10
    },
    inputDescription: {
        width:280, 
        textAlignVertical: 'top',
        backgroundColor: Colors.lightLavande2,
        borderRadius: 40
    }, 
    inputTitre : {
        fontSize: 16,
        fontWeight: '800'
    }
})