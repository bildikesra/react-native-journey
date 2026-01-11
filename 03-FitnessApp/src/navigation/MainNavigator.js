import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
// sayfalar :
import HomeStack from "./stacks/HomeStack";
import ProgressScreen from "../screens/progress/ProgressScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";
import colors from "../constants/colors";

const Tab = createBottomTabNavigator();

export default function MainNavigator(){
    return (
        <Tab.Navigator
        screenOptions={({route}) => ({
            // Alt bardaki ikonları ayarlayan fonksiyon
            tabBarIcon : ({ focused, color, size }) => {
                let iconName;
                if(route.name == 'Ana Sayfa'){
                    // focused : kullanıcı şu an bu sekmede mi? sorusunu yanıtlar. (true/false)
                    iconName = focused ? 'home' : 'home-outline';
                } else if (route.name === 'İstatistik'){
                    iconName = focused ? 'bar-chart' : 'bar-chart-outline';
                }else if (route.name === 'Profil'){
                    iconName = focused ? 'person' : 'person-outline';
                }
                return <Ionicons name={iconName} size={size} color={color}/>
            },
            // renk ayarları
            tabBarActiveTintColor : colors.primary, // seçili olanın rengi
            tabBarInactiveTintColor : colors.textLight, // pasif olanın rengi
            headerShown : false // tabların başlığını siler.
        })}
        >
             {/**Neden HomeScreen yerine HomeStack koyduk?
              * Eğer Tab'ın içine direkt HomeScreen koysaydık, "Detaylar" sayfasına gittiğinde,
              * alt menü kaybolurdu veya geçiş animasyonu bozulurdu.
              * şu an diğer ekranlar tek sayfa olduğu için stack oluşturmadık.
              */}
            <Tab.Screen name="Ana Sayfa" component={HomeStack}/>
            <Tab.Screen name="İstatistik" component={ProgressScreen}/>
            <Tab.Screen name="Profil" component={ProfileScreen}/>
        </Tab.Navigator>
    );
}