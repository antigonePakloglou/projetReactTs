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