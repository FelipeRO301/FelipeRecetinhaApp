import { ApiConfig } from "../../config/api";
import { DETAILS_API_URL } from "../../config/api/ApiConfig";
import { httpClient } from "../../infra/http";
import { Recipe } from "../model";

export const getDetails = async (recipeId:string): Promise<Recipe[]> => {
   const response = await httpClient.get(ApiConfig.RECIPES_API_BASE_URL + DETAILS_API_URL + recipeId)
   return response.data.meals
}