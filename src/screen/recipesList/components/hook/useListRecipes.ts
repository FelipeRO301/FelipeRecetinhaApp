import { useEffect, useState } from "react";
import { UseListRecipesResult } from "./interface";
import { Recipe } from "../../../../data/model";
import { getRecipes } from "../../../../data/service";

const useListRecipes = (category:string): UseListRecipesResult => {
   const [isLoading, setIsLoading] = useState(false)
   const [recipes, setRecipes] = useState<Recipe[]>([])

   const getRecipesResult = async (): Promise<Recipe[]> => {
      const result = await getRecipes(category)

      return result
   }

   useEffect(() => {

      const loadingHeadLines = async () => {
         setIsLoading(true)
         const result = await getRecipesResult()
         setIsLoading(false)
         setRecipes(result)
      }

      loadingHeadLines()
   }, [])

   return{
      isLoading,
      recipes,
   }
}

export default useListRecipes;