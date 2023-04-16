import { RouteProp } from "@react-navigation/native"
import { Recipe } from "../../data/model"
import { AppStackParamList } from "../../navigation/app/interface"

export type RecipesDetailsScreenParams = {
   recipe: Recipe,
}

export type RecipesDetailsRouteProp = RouteProp<AppStackParamList, 'RecipeDetail'>