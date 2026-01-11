import React from "react";
import {View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import colors from "../../constants/colors";

export default function ActiveWorkoutScreen({route, navigation}){
    // WorkoutDetail sayfasından gelen veriyi burda tutuyoruz:

    const { workout } = route.params

    return(
        <View style={styles.container}>
           <Text style={styles.title}>Başladı!</Text>
           <Text style={styles.info}>Sınırları Zorla</Text>

           <View style={styles.timerPlaceHolder}>
            <Text style={styles.timerText}>00:00</Text>
           </View>
           <TouchableOpacity
           style={styles.finishButton}
           onPress={() => navigation.goBack()}
           >
           <Text style={styles.buttonText}>Antremanı Bitir</Text>
           </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor: colors.backgroundColor,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: colors.textDark
    },
    info: {
        fontSize: 18,
        color: colors.textLight,
        marginVertical: 10
    },
    timerPlaceHolder: {
        marginVertical: 50,
        padding: 40,
        borderRadius: 30,
        backgroundColor: colors.primary + '10'
    },
    timerText: { 
        fontSize: 48,
        fontWeight: 'bold',
        color: colors.primary 
    },
    finishButton: { 
        backgroundColor: 'red',
        padding: 15,
        borderRadius: 10,
        width: '80%'
    }, 
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18 }
});