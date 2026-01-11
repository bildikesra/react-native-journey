import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";

export default function ExerciesItem({ index, name, sets, reps, isCompleted, onToggle }){
    return (
        <TouchableOpacity
        onPress={onToggle}
        activeOpacity={0.6}
        /** style neden dizi?
            style = {[...]} -> birden fazla stil birleştirir.
            isCompleted && {...} -> koşullu still
            true ise ekleniri false ise yok sayılır.
            */
           // Eğer tamamlandıysa arka planı yeşil yapar
        style={[styles.container,isCompleted && {backgroundColor: '#dcfce7', borderColor: colors.secondary}]}>

        <View style={[styles.numberBox, isCompleted && {backgroundColor: colors.secondary}]}>
            {isCompleted ? (
                <Ionicons name="checkmark" size={18} color={colors.white}/>
            ): (
                <Text style={styles.number}>{index + 1}</Text>
            )}
        </View>
        <View style={styles.info}>
            <Text style= {[styles.name,
                isCompleted && { textDecorationLine : 'line-through', color: colors.textLight} // üstünü çiz
            ]}>{
                name}
            </Text>
            <Text style={styles.details}>{sets} Set • {reps} </Text>
        </View>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        alignItems: 'center',
        backgroundColor: colors.white,
        padding: 15,
        borderRadius: 12,
        marginBottom: 10,
        borderWidth: 1,
        borderColor:'transparent',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 2
    },
    numberBox: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: colors.primary + '15', // çok daha açık mor
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15
    },
    number : {
        color: colors.primary,
        fontWeight: 'bold',
        fontSize: 14
    },
    info: {
        flex: 1
    },
    name : {
        fontSize: 16,
        fontWeight: '600',
        color: colors.textDark,
        marginBottom: 4
    },
    details: {
        fontSize: 14,
        color: colors.textLight
    }
})