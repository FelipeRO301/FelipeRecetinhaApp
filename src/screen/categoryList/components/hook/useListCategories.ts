import { useEffect, useState } from "react";
import { Category } from "../../../../data/model";
import { UseListCategoriesResult } from "./interface";
import { getCategories } from "../../../../data/service";

const useListCategories = (): UseListCategoriesResult => {
   const [isLoading, setIsLoading] = useState(false)
   const [categories, setRecipes] = useState<Category[]>([])

   const getHeadLines = async (): Promise<Category[]> => {
      const result = await getCategories()

      return result
   }

   useEffect(() => {

      const loadingHeadLines = async () => {
         setIsLoading(true)
         const result = await getHeadLines()
         setIsLoading(false)
         setRecipes(result)
      }

      loadingHeadLines()
   }, [])

   return{
      isLoading,
      categories
   }
}

export default useListCategories;