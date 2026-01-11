import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import colors from "../constants/colors";

export default function ProfileItem({ icon, title, onPress}) {
 return(
    <TouchableOpacity
    style= {styles.container}
    onPress={onPress}
    activeOpacity={0.7}>
        {/**Sol taraf : icon + yazı */}
        <View style={styles.left}>
            {/**Icon kutusu */}
            <View style= {styles.iconBox}>
                <Ionicons name={icon} size={22} color={colors.primary}/>
            </View>
            <Text style= {styles.title}>{title}</Text>
        </View>
        <Ionicons name="chevron-forward" size={20} color={colors.textLight}/>
    </TouchableOpacity>
 );
}
const styles = StyleSheet.create({
   container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // sağa sola yasla
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0'
   },
   left: {
    flexDirection: 'row',
    alignItems: 'center'
   },
   iconBox: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: colors.primary + '15',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15
   },
   title: {
    fontSize: 16,
    color: colors.textDark,
    fontWeight: '500'
   }
});