import { ApiConfig } from "../../config/api";
import { CATEGORY_API_URL } from "../../config/api/ApiConfig";
import { httpClient } from "../../infra/http";
import { Category } from "../model";

export const getCategories = async (): Promise<Category[]> => {
   const response = await httpClient.get(ApiConfig.RECIPES_API_BASE_URL + CATEGORY_API_URL)
   return response.data.categories
}