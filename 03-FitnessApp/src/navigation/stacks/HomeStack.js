import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../screens/home/HomeScreen";
import WorkoutDetailScreen from "../../screens/home/WorkoutDetailScreen";
import colors from "../../constants/colors";
import ActiveWorkoutScreen from "../../screens/active/ActiveWorkoutScreen";

// createStackNavigator, sayfaları üst üste dizme yeteneği olan bir fonksiyondur.
const Stack = createStackNavigator();

// 1. Stack.Navigator : Sayfaları kapsayan ana kutu. (yönetici)
// 2. Stack.Screen : Her bir sayfanın kendisi.

export default function HomeStack() {
    return (
    <Stack.Navigator
    // screenOptions : Tüm alt sayfaların ortak özelliklerini belirler.
        screenOptions =
        {
            { 
                headerStyle : { backgroundColor : colors.primary},
                headerTintColor : colors.white,
                headerTitleStyle : { fontWeight : 'bold'},
                headerBackTitleVisible : false, // IOS'te 'geri' yazısını siler, sadece ok kalır.
            }
        }
    >
    <Stack.Screen
    /** name = 'Home', bir sayfadan diğerine giderken 
     * navigation.navigate('Home') derken bu ismi kullanırız.
     */
        name="Home"
        // component (dosya yolu), bu isim çağırıldığında hangi dosya ekrana çizilsin?
        // buraya import edilen HomeScreen bileşenini veriyoruz.
        component={HomeScreen}
        // options (özel ayar), bu sayfaya ait özel ayardır.
        options={{title : 'Fitness App'}}
        />

        <Stack.Screen
        name = "WorkoutDetail"
        component={WorkoutDetailScreen}
        options={{title : 'Detaylar'}} // üst barda yazacak yazı
        />

        <Stack.Screen
        name = "ActiveWorkout"
        component={ActiveWorkoutScreen}
        // başlığı gizlemek:
        options={{headerShown: false }}/> 
    </Stack.Navigator>
  );
}
