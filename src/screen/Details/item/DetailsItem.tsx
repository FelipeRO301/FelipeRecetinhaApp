import { Image, Text, View } from "react-native"
import styles from "./Style";
import { DetailsItemProps } from "./interface";

const RecipesDetails = ({recipe}: DetailsItemProps) => {

   return(
      <View>
         { recipe.strMealThumb ? 
            <Image source={{uri: recipe.strMealThumb }} style={styles.cover}/> 
            : null
         }
         <Text style={styles.title}> {recipe.strMeal} </Text>

         <View>
            <Text style={styles.content}> {recipe.strInstructions} </Text>
         </View>
      </View>
   )
}

export default RecipesDetails;