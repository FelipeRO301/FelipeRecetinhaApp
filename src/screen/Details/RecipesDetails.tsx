import { FlatList, ListRenderItemInfo } from "react-native"
import { Recipe } from "../../data/model"
import { useCallback } from "react"
import { useRoute } from "@react-navigation/native";
import { RecipesDetailsRouteProp } from "./interface";
import { useRecipeDetails } from "./hook";
import { LoaderIndicator } from "./loader";
import { RecipesDetails } from "./item";

const RecipesList = () => {

   const {params: { recipe }} = useRoute<RecipesDetailsRouteProp>()

   const { isLoading, recipes } = useRecipeDetails(recipe.idMeal)

   const renderRecipe = useCallback(({ item }: ListRenderItemInfo<Recipe> ) =>
      <RecipesDetails recipe={item}/>, [])

   const recipesKeyExtractor = (_: Recipe, index: number) => index.toString()

   if (isLoading) {
      return <LoaderIndicator />
   }

   return(
      <FlatList
         data={recipes}
         renderItem={renderRecipe}
         keyExtractor={recipesKeyExtractor}
      />
   )
}

export default RecipesList;