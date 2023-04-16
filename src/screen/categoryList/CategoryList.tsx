import { FlatList, ListRenderItemInfo } from "react-native"
import { LoaderIndicator } from "./components/loader";
import { Category } from "../../data/model"
import { CategoryItem } from "./components/item";
import { useCallback } from "react"
import { useListCategories } from "./components/hook";

const RecipesCategory = () => {

   const { isLoading, categories } = useListCategories()

   const renderRecipe = useCallback(({ item }: ListRenderItemInfo<Category> ) =>
      <CategoryItem category={item}/>, [])

   const recipesKeyExtractor = (_: Category, index: number) => index.toString()

   if (isLoading) {
      return <LoaderIndicator />
   }

   return(
      <FlatList
         data={categories}
         renderItem={renderRecipe}
         keyExtractor={recipesKeyExtractor}
      />
   )
}

export default RecipesCategory;