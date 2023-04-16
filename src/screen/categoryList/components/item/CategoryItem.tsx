import { Image, Pressable, Text, View } from "react-native"
import { CategoryItemProps } from "./interface";
import styles from "./Style";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorProps } from "../../../../navigation/app";
import { memo } from "react";

const CategoryItem = ({ category }: CategoryItemProps) => {

   const navigator = useNavigation<AppNavigatorProps>()

   const openCategory = () => {
      navigator.navigate('RecipeList', {category})
   }

   return(
      <Pressable style={styles.container} onPress={openCategory}>

         { category.strCategoryThumb ? 
            <Image source={{uri: category.strCategoryThumb }} style={styles.cover}/> 
            : null
         }

         <Text style={styles.title}> {category.strCategory} </Text>
         <View style={styles.detailsContainer}>
            <Text style={styles.source}> {category.strCategoryDescription} </Text>
         </View>
      </Pressable>
   )
}

export default memo(CategoryItem);