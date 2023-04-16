import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppStackParamList } from "./interface";
import { RecipesCategory } from "../../screen/categoryList";
import { RecipesList } from "../../screen/recipesList";
import { RecipesDetails } from "../../screen/Details";

const Stack = createNativeStackNavigator<AppStackParamList>()

const AppNavigator = () => {
   return(
      <Stack.Navigator initialRouteName="Category">
         <Stack.Screen name="Category" component={RecipesCategory}/>
         <Stack.Screen name="RecipeList" component={RecipesList}/>
         <Stack.Screen name="RecipeDetail" component={RecipesDetails}/>
      </Stack.Navigator>
   )
}

export default AppNavigator;