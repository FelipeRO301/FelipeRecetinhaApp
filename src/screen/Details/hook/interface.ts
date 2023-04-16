import { Recipe } from "../../../data/model";


export interface UseListRecipesResult {
   isLoading: boolean,
   recipes: Recipe[],
}