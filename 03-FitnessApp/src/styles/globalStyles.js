import { StyleSheet } from "react-native";
import colors from "../constants/colors";

export const globalStyles = StyleSheet.create({
   container : {
    flex : 1,
    backgroundColor : colors.backgroundColor,
   },
   pageTitle : {
     fontSize : 28,
     fontWeight : 'bold',
     color : colors.textDark,
     marginVertical : 20,
   }
});
