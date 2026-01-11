import React from "react";
import {View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import colors from "../constants/colors";

// props : dışarıdan veri alıyoruz (title, duration, onPress)

export default function WorkoutCard({title,duration,onPress,imageSource}) {
    return(
        <TouchableOpacity
        style={styles.card}
        onPress={onPress}
        activeOpacity={0.7}>
            <Image
            source={imageSource}
            style={styles.cardImage}
            resizeMode="cover"/>
    
            {/** Orta taraf : Bilgiler */}
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.duration}>{duration}</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color={colors.primary}/>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card : {
        backgroundColor : colors.white,
        borderRadius : 16,
        padding: 10,
        marginBottom: 15,
        flexDirection: 'row', // yan yana dizme
        alignItems: 'center',
        // Gölge efekti (IOS)
        shadowColor: '#000',
        shadowOffset: {width: 0, height:2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        // Gölge Efekti (Android)
        elevation: 3 
    },
    cardImage: {
        width: 70,
        height:70,
        borderRadius: 12,
        marginRight: 15,
        backgroundColor: colors.textLight
    },
    infoContainer : {
        flex: 1
    },
    title : {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.textDark
    },
    duration: {
        fontSize: 14,
        color: colors.textLight,
        marginTop: 4
    }
});
