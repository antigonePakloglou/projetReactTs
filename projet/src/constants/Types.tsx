type Recette = {
    id: number
    title: string
    category: string
    isFav: false
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