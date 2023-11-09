type Recette = {
    id: number
    title: string
    category: string
    isFav: boolean
    description: string
    imagePath: {
        uri: string
    }
}
enum Categorie {
    CAKE = "cake",
    BAKERY  = "bakery",
    ITALIAN = "italian food",
    MEXICAN = "mexican food",
  }

interface RecetteContextType {
    recettesGlobal: Recette[];
    addToRecettesGlobal: (recettesGlobal:any, recetteAdd:any) => void;
    modifyRecettesGlobal: (recettesGlobal:any, recetteToModifie:any) => void;
} 