import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import colors from '../../constants/colors';
import ProfileItem from '../../components/ProfileItem';

export default function ProfileScreen() {
  return (
    <ScrollView style={globalStyles.container}>
      
      {/* 1. ÜST BÖLÜM: Profil Resmi ve İsim */}
      <View style={styles.header}>
        <Image 
          source={{ uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200' }} 
          style={styles.avatar} 
        />
        <Text style={styles.name}>Ahmet Yılmaz</Text>
        <Text style={styles.subText}>Pro Üye ✨</Text>
      </View>

      {/* 2. ORTA BÖLÜM: İstatistikler */}
      <View style={styles.statsContainer}>
        
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>12</Text>
          <Text style={styles.statLabel}>Antrenman</Text>
        </View>

        <View style={styles.divider} /> {/* Dikey Çizgi */}

        <View style={styles.statBox}>
          <Text style={styles.statNumber}>480</Text>
          <Text style={styles.statLabel}>Dakika</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.statBox}>
          <Text style={styles.statNumber}>3.5k</Text>
          <Text style={styles.statLabel}>Kalori</Text>
        </View>

      </View>

      {/* 3. ALT BÖLÜM: Menü Seçenekleri */}
      <View style={styles.menuSection}>
        <Text style={styles.sectionTitle}>Hesap</Text>
        
        <ProfileItem icon="person-outline" title="Kişisel Bilgiler" onPress={() => {}} />
        <ProfileItem icon="notifications-outline" title="Bildirimler" onPress={() => {}} />
        <ProfileItem icon="eye-outline" title="Görünüm Ayarları" onPress={() => {}} />
        
        <Text style={[styles.sectionTitle, { marginTop: 20 }]}>Diğer</Text>
        
        <ProfileItem icon="shield-checkmark-outline" title="Gizlilik Politikası" onPress={() => {}} />
        <ProfileItem icon="help-circle-outline" title="Yardım & Destek" onPress={() => {}} />
        <ProfileItem icon="log-out-outline" title="Çıkış Yap" onPress={() => {}} />
      </View>
      
      {/* Alt boşluk */}
      <View style={{ height: 30 }} />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    paddingVertical: 30,
    marginTop: 30
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50, // Tam yuvarlak
    borderWidth: 3,
    borderColor: colors.primary, // Çerçevenin rengi
    marginBottom: 15,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.textDark,
  },
  subText: {
    fontSize: 14,
    color: colors.textLight,
    marginTop: 5,
  },
  // İstatistik Kutusu
  statsContainer: {
    flexDirection: 'row', // Yan yana diz
    justifyContent: 'space-around', // Eşit aralık bırak
    backgroundColor: colors.white,
    marginHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 16,
    
    // Gölge
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 25,
  },
  statBox: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
  },
  statLabel: {
    fontSize: 12,
    color: colors.textLight,
    marginTop: 4,
  },
  divider: {
    width: 1,
    height: '80%',
    backgroundColor: '#f0f0f0',
  },
  // Menü Alanı
  menuSection: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.textLight,
    marginBottom: 10,
    textTransform: 'uppercase', // HEPSİ BÜYÜK HARF
  }
});