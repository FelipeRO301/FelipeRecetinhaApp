import { ActivityIndicator } from "react-native"

import styles from "./Styles"

const LoaderIndicator = () => {
   return(
      <ActivityIndicator style = {styles.loader} />
   )
}

export default LoaderIndicator