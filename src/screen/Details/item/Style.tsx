import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   container: {
      marginHorizontal: 16,
      marginVertical: 8,
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
      borderColor: 'gray',
      elevation: 3,
      shadowColor: '#000000',
      shadowOpacity: 0.1,
      shadowRadius: 2,
      shadowOffset: { width: 0, height: 2 }
   },
   cover: {
      height: 180,
      width: '98%',
      margin: 5,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
   },
   title: {
      margin: 10,
      fontSize: 16,
      fontWeight: 'bold',
   },
   content: {
      margin: 10,
      textAlign: 'justify',
   },
   source: {
      textAlign: 'left',
      fontSize: 12,
      flex: 0.5,
   },
   data: {
      textAlign: 'right',
      fontSize: 12,
      flex: 0.5,
   }
})

export default styles;