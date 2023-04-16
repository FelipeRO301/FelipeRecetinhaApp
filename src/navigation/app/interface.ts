import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RecipesDetailsScreenParams } from "../../screen/Details/interface"
import { RecipesScreenParams } from "../../screen/recipesList/interface"

export type AppStackParamList = {
   Category: undefined,
   RecipeList: RecipesScreenParams,
   RecipeDetail: RecipesDetailsScreenParams,
}

export type AppNavigatorProps = NativeStackNavigationProp<AppStackParamList>