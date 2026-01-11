import React, { useLayoutEffect, useState } from "react";
import {View, Text, StyleSheet, Image, ScrollView, Alert, TouchableOpacity} from 'react-native';
import { globalStyles } from "../../styles/globalStyles";
import colors from "../../constants/colors";
import ExerciesItem from "../../components/ExerciseItem";
import { WORKOUTS } from "../../data/workouts";

// route nedir? : navigation sisteminin bu sayfaya otomatik verildiği bir araçtır.
// görevi : senin nereden geldiğini, adının ne olduğunu ve sana hangi paketlerin gönderildiğini tutar.
export default function WorkoutDetailScreen({navigation, route}){

    {/** Route Objesinin Röntgeni*/}
    /**
     * {
     * key: 'WorkoutDetail-a1b2c3d4' // sayfanın sistemdeki benzersiz ID'si
     * name: 'WorkoutDetail', // sayfanın adı
     * path: undefined
     * // params dediği parameters kelimesinin kısaltmasıdır
     * // bir sayfadan diğerine ne gönderirsen gönder hepsi params kutusunun içine atılır.
     * params: {
     * workout: {
     * id : '2',
     * title : 'Sabah Yogası',
     * duration: '20 dk',
     * imageUrl: 'https://...'
     *    }
     *   }
     * }
     */
    // route.params : gönderilen tüm paket buradadır.
    // HomeScreen'daki "workout" etiketi aldık
    // şu an workout içinde tıklanan kartın tüm bilgileri var. (title-duration-imageUrl)
    const { workout } = route.params;
    // route : kargonun tamamıdır
    // params : kutunun içindeki eşyalardır
    // route.params.workout : kutunun içindeki spor ayakkabıyı almaktır.
    // Başlığı güncelleme
    // Sayfa açılmadan hemen önce çalışır. Üst bardaki "detaylar" yazısını antreman adı ile değiştirir.
    /*neden useLayoutEffect kullandık? 
    çünkü : useEffect, sayfa tamamen ekrana çizildikten sonra çalışır.
    useLayoutEffect ise ekran boyamadan hemen önce çalışır.
    Kullanıcı değişimi görmez.*/

    // Tamamlanan egzersizlerin Id bilgilerini tutan liste.
    // başlangıçta boş.
    const [completedIds, setCompletedIds] = useState([]);

    useLayoutEffect(() => {
        navigation.setOptions({
          title: workout.title
        });
    }, [navigation,workout])

    /* bu fonksiyonun amacı: tek bir egzersizin tamamlanma durumunu değiştirmektir.
    1. daha önce tamamlanmamışsa -> tamamlandı olarak işaretler.
    2. daha önce tamamlandıysa -> geri alır. (unchecked)
    3. tüm egzersizler tamamlandıysa -> kullanıcıyı tebrik eder.
    */
    const toggleExercise = (id) => {
        // includes : bir dizinin içinde belirli bir değer var mı diye bakar.
        // sonuç true veya false olur, amaç: bu egzersiz daha önce tamamlandı mı?
        if(completedIds.includes(id)){
            // filter : bir diziden istemediğin elemanları çıkarıp yeni bir dizi oluşturur.
            // şart true dönerse : eleman kalır
            // şart false dönerse : eleman kaldırılır ve yeni dizi oluşturur.
            setCompletedIds(completedIds.filter(itemId => itemId !== id));
        } else {
            setCompletedIds([...completedIds,id]);
            if(completedIds.length + 1 === workout.exercises.length){
                Alert.alert("Tebrikler!", "Antremanı tamamladın!")
            }
        }

    }

    return (
        <View style= {styles.container}>
         <Image
            source={{uri : workout.imageUrl}}
            style={styles.image}
            resizeMethod="cover"
            />
        <View style={globalStyles.container}>
            <View style={styles.content}>
               <Text style = {styles.title}>{workout.title}</Text>
               <View style= {styles.badge}>
                 <Text style={styles.badgeText}>{workout.duration}</Text>
               </View>
               <Text style={styles.description}>Bu antreman için işte yapman gerekenler: </Text>

              <ScrollView>
               {workout.exercises.map((exercise, index) => (
                <ExerciesItem
                key={exercise.id}
                index={index}
                name={exercise.name}
                sets={exercise.sets}
                reps={exercise.reps}/>
               ))}
              </ScrollView>
              <TouchableOpacity
              style= {styles.startButton}
              onPress={() => navigation.navigate('ActiveWorkout', {workout: workout})}>
                <Text style={styles.startButtonText}>Antremanı Başlat</Text>
              </TouchableOpacity>
            </View>
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    image: {
        width: '100%',
        height: 300,
    },
    content: {
        padding: 25,
        marginTop: -40,
        backgroundColor: colors.backgroundColor,
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        flex: 1, 
        shadowColor: "#000",
        shadowOffset: {width: 0, height: -3},
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.textDark,
        marginTop: 20,
        marginBottom: 10
    },
    badge: {
        backgroundColor: colors.primary + '20', // rengin %20 opak hali (transparan)
        alignSelf: 'flex-start',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 8,
        marginBottom: 20
    },
    badgeText: {
        color: colors.primary,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 16,
        color: colors.textLight,
        lineHeight: 24, // Satırlar arası boşluk
        marginBottom: 10
    },
    sectionHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.textDark,
        marginBottom: 15,
        marginTop: 10,
    },
    startButton: {
        backgroundColor : colors.primary,
        paddingVertical: 15,
        borderRadius: 15,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    startButtonText: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 18
    }
});