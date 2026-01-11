# React-Native-Journey
React Native roadmap: Building mobile applications from scratch, exploring hooks, storage, and navigation.

---

### 01. Counter App
* **Kullanılanlar:** `useState`, `StyleSheet`, `TouchableOpacity`.
* **İşlev:** Temel state yönetimi ve buton etkileşimleri.
* **Görünüm:**
<img src="./01-CounterApp/screenshots/counterApp_preview.PNG" width="250" />

---

### 02. Todo App
* **Kullanılanlar:** `FlatList`, `TextInput`, `Modal`, `KeyboardAvoidingView`.
* **İşlev:** Dinamik liste yönetimi, veri ekleme ve silme işlemleri.
* **Görünüm:**
<img src="./02-TodoApp/screenshots/todoApp_preview.PNG" width="250" />

---

### 03. Fitness App
* **Kullanılanlar:** `React Navigation (Stack & Tabs)`, `Custom Components`, `Props`, `ImageBackground`.
* **İşlev:** Çoklu ekran yapısı, ekranlar arası veri aktarımı ve gelişmiş UI düzeni.
* **Görünüm:**

| Ana Ekran | Detay Ekranı | Gelişim Takip Ekranı | Aktif Antrenman | Profil |
| :---: | :---: | :---: | :---: | :---: |
| <img src="./03-FitnessApp/screenshots/fitnessApp_preview_1.PNG" width="160" /> | <img src="./03-FitnessApp/screenshots/fitnessApp_preview_2.PNG" width="160" /> | <img src="./03-FitnessApp/screenshots/fitnessApp_preview_3.PNG" width="160" />  | <img src="./03-FitnessApp/screenshots/fitnessApp_preview_5.PNG" width="160" /> | <img src="./03-FitnessApp/screenshots/fitnessApp_preview_4.PNG" width="160" />

---

## Kurulum
Herhangi bir projeyi çalıştırmak için ilgili klasöre girip aşağıdaki komutları uygulayın:

```bash
# Proje klasörüne girin
cd 03-FitnessApp

# Bağımlılıkları yükleyin
npm install

# Projeyi başlatın
npx expo start
