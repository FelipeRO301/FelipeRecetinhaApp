import { FlatList, ListRenderItemInfo } from "react-native"
import { Recipe } from "../../data/model"
import { useCallback } from "react"
import { LoaderIndicator } from "../Details/loader"
import { useListRecipes } from "./components/hook";
import { RecipeItem } from "./components/item";
import { useRoute } from "@react-navigation/native";
import { RecipesRouteProp } from "./interface";

const RecipesList = () => {

   const {params: { category }} = useRoute<RecipesRouteProp>()

   const { isLoading, recipes } = useListRecipes(category.strCategory)

   const renderRecipe = useCallback(({ item }: ListRenderItemInfo<Recipe> ) =>
      <RecipeItem recipe={item}/>, [])

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