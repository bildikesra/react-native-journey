import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import colors from '../../constants/colors';

// 1. GRAFİK VERİSİ (Normalde sunucudan gelir)
// height: Çubuğun boyunu belirler (0 ile 100 arası değer ver)
const WEEKLY_DATA = [
  { day: 'Pzt', height: 40, label: '30dk' },
  { day: 'Sal', height: 70, label: '50dk' },
  { day: 'Çar', height: 30, label: '20dk' },
  { day: 'Per', height: 90, label: '75dk' }, // En yüksek gün
  { day: 'Cum', height: 50, label: '40dk' },
  { day: 'Cmt', height: 20, label: '15dk' },
  { day: 'Paz', height: 0,  label: 'Dinl.' },
];

export default function StatisticsScreen() {
  return (
    <View style={globalStyles.container}>
      
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={globalStyles.pageTitle}>İstatistikler 📊</Text>
        <Text style={styles.subtitle}>Bu haftaki performansın harika!</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>

        {/* --- BÖLÜM 1: HAFTALIK GRAFİK --- */}
        <View style={styles.chartContainer}>
          <Text style={styles.sectionTitle}>Haftalık Aktivite</Text>
          
          <View style={styles.chart}>
            {WEEKLY_DATA.map((item, index) => (
              <View key={index} style={styles.barWrapper}>
                {/* Çubuğun Kendisi */}
                <View style={styles.barTrack}>
                  <View 
                    style={[
                      styles.barFill, 
                      { height: `${item.height}%` }, // Dinamik yükseklik
                      item.height > 80 && styles.highBar // Eğer çok yaptıysa rengi farklı olsun
                    ]} 
                  />
                </View>
                {/* Gün İsmi */}
                <Text style={styles.dayLabel}>{item.day}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* --- BÖLÜM 2: ÖZET KUTULARI --- */}
        <View style={styles.summaryRow}>
          <View style={[styles.summaryBox, { backgroundColor: '#e3f2fd' }]}>
             <Text style={[styles.summaryNumber, { color: '#1e88e5' }]}>🔥 1,250</Text>
             <Text style={styles.summaryLabel}>Kalori</Text>
          </View>

          <View style={[styles.summaryBox, { backgroundColor: '#f3e5f5' }]}>
             <Text style={[styles.summaryNumber, { color: '#8e24aa' }]}>⏳ 4.5</Text>
             <Text style={styles.summaryLabel}>Saat</Text>
          </View>
        </View>

        {/* --- BÖLÜM 3: SON AKTİVİTELER --- */}
        <Text style={styles.sectionTitle}>Son Aktiviteler</Text>
        
        {/* Basit bir liste örneği */}
        <View style={styles.historyItem}>
          <View style={styles.historyLeft}>
            <View style={styles.dot} />
            <View>
              <Text style={styles.historyTitle}>Tüm Vücut Antrenmanı</Text>
              <Text style={styles.historyDate}>Bugün, 09:30</Text>
            </View>
          </View>
          <Text style={styles.historyScore}>+350 kcal</Text>
        </View>

        <View style={styles.historyItem}>
           <View style={styles.historyLeft}>
            <View style={[styles.dot, { backgroundColor: '#ff9800' }]} />
            <View>
              <Text style={styles.historyTitle}>Sabah Yogası</Text>
              <Text style={styles.historyDate}>Dün, 08:00</Text>
            </View>
          </View>
          <Text style={styles.historyScore}>+120 kcal</Text>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: colors.textLight,
    marginTop: 5,
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.textDark,
    marginBottom: 15,
  },
  // GRAFİK STİLLERİ
  chartContainer: {
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 20,
    marginBottom: 25,
    // Gölge
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  chart: {
    flexDirection: 'row', // Yan yana diz
    justifyContent: 'space-between', // Aralarını eşit aç
    alignItems: 'flex-end', // Aşağıdan hizala (Çubuklar yukarı uzasın)
    height: 150, // Grafiğin toplam boyu
    paddingTop: 20,
  },
  barWrapper: {
    alignItems: 'center',
    width: 30, // Her bir günün genişliği
  },
  barTrack: {
    width: 8, // Çubuk kalınlığı
    height: '100%', // Alanın tamamını kaplasın (130px)
    backgroundColor: '#f0f0f0', // Gri arka plan (Boş kısım)
    borderRadius: 10,
    justifyContent: 'flex-end', // İçindeki doluluğu aşağı yasla
    overflow: 'hidden', // Taşanı gizle
  },
  barFill: {
    width: '100%',
    backgroundColor: colors.primary, // Mor renk
    borderRadius: 10,
  },
  highBar: {
    backgroundColor: '#ff4757', // Eğer 80'den büyükse Kırmızı olsun (Örnek)
  },
  dayLabel: {
    fontSize: 12,
    color: colors.textLight,
    marginTop: 8,
    fontWeight: 'bold',
  },
  // ÖZET KUTULARI
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  summaryBox: {
    width: '48%', // İkisi yan yana sığsın
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
  },
  summaryNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  summaryLabel: {
    fontSize: 14,
    color: '#666',
  },
  // LİSTE STİLLERİ
  historyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
  },
  historyLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.primary,
    marginRight: 15,
  },
  historyTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textDark,
  },
  historyDate: {
    fontSize: 12,
    color: colors.textLight,
    marginTop: 2,
  },
  historyScore: {
    fontWeight: 'bold',
    color: colors.success || '#2ecc71', // Yeşil
  }
});