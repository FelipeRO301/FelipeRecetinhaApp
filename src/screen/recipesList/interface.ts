import { RouteProp } from "@react-navigation/native"
import { AppStackParamList } from "../../navigation/app/interface"
import { Category } from "../../data/model"

export type RecipesScreenParams = {
   category: Category,
}

export type RecipesRouteProp = RouteProp<AppStackParamList, 'RecipeList'>