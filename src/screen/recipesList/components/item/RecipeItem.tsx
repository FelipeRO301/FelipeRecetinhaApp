import { Image, Pressable, Text } from "react-native"

import { RecipeItemProps } from "./interface";
import styles from "./Style";
import { useNavigation } from "@react-navigation/native";
import { memo } from "react";
import { AppNavigatorProps } from "../../../../navigation/app";

const RecipeItem = ({ recipe }: RecipeItemProps) => {

   const navigator = useNavigation<AppNavigatorProps>()

   const openRecipe = () => {
      navigator.navigate('RecipeDetail', { recipe })
   }

   return(
      <Pressable style={styles.container} onPress={openRecipe}>

         { recipe.strMealThumb ? 
            <Image source={{uri: recipe.strMealThumb }} style={styles.cover}/> 
            : null
         }
         <Text style={styles.title}> {recipe.strMeal} </Text>
      </Pressable>
   )
}

export default memo(RecipeItem);