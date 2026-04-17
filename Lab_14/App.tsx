import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

// Импортируем оба экрана
import ContactsScreen from './task1/src/screens/ContactsScreen';
import RegistrationScreen from './task2/src/screens/RegistrationScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Чтобы сделать скриншот первого задания — оставь ContactsScreen, а RegistrationScreen закомментируй */}
      <ContactsScreen />
      
      {/* Чтобы сделать скриншот второго задания — поменяй их местами */}
      {/* <RegistrationScreen /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});