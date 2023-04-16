import { ApiConfig } from "../../config/api";
import { RECIPES_API_URL } from "../../config/api/ApiConfig";
import { httpClient } from "../../infra/http";
import { Recipe } from "../model";

export const getRecipes = async (category:string): Promise<Recipe[]> => {
   const response = await httpClient.get(ApiConfig.RECIPES_API_BASE_URL + RECIPES_API_URL + category)
   return response.data.meals
}