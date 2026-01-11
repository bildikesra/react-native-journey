import React from "react";
import { View, Text, StyleSheet, Button, ScrollView} from "react-native";
import colors from "../../constants/colors";
import { globalStyles } from "../../styles/globalStyles";
import WorkoutCard from "../../components/WorkoutCard";
import { WORKOUTS } from "../../data/workouts";


export default function HomeScreen({navigation}) {

  // bu fonksiyon bir parametre alıyor (item)
  const goToDetail = (item) => {
    /* navigate fonksiyonu 2 parametre alıyor:
    1. nereye gidecek?
    2. ne götürecek? (workout etiketiyle item paketi gönderiyor)
    */
    navigation.navigate('WorkoutDetail', {workout: item});
  };

  return (
    // container ile tüm ekranı kaplıyoruz.
   <View style = {globalStyles.container}>
    
    {/** Header Bölümü */}
    <View style = {styles.header}>
     <Text style = {globalStyles.pageTitle}>Fitness App</Text>
     <Text style = {styles.subtitle}>Hazır mısın?</Text>
    </View>
      
     {/** İçerik alanı (kaydırılabilir) */}
     <ScrollView
     contentContainerStyle= {styles.content}
     showsVerticalScrollIndicator={false}
     >
      <Text style={styles.sectionTitle}>Popüler Antremanlar</Text>
      {WORKOUTS.map((item)=> (
         <WorkoutCard
           key = {item.id}
           title={item.title}
           duration={item.duration}
           onPress={() => goToDetail(item)}
           imageSource={{uri:item.imageUrl}}
         />
      ))}
     </ScrollView>
   </View>
  );
}

const styles = StyleSheet.create({
    header : {
    paddingHorizontal : 20,
    paddingTop : 50,
    paddingBottom : 20
   },
   subtitle : {
    fontSize : 16,
    color : colors.textLight,
    marginTop : 5,
    marginLeft : 20
   },
   content: {
    paddingHorizontal: 20,
    paddingBottom: 20
   },
   sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.textDark,
    marginBottom: 15
   }
});