import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { ProfileCard } from './src/components/ProfileCard';
import { ContactSection } from './src/components/ContactSection';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ProfileCard 
          name="John Doe"
          role="Software Engineer"
          bio="Passionate about building native mobile apps with React Native and Expo."
          avatar="https://randomuser.me/api/portraits/men/32.jpg"
        />
        <ContactSection />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
    paddingTop: 40,
  },
});