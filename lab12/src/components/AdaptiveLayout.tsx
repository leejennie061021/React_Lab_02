import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions, ScrollView, Image } from 'react-native';

interface AdaptiveLayoutProps {
  header?: React.ReactNode;
  content: React.ReactNode;
  footer?: React.ReactNode;
}

export function AdaptiveLayout({ header, content, footer }: AdaptiveLayoutProps) {
  const { width } = useWindowDimensions();
  const isTablet = width >= 768;

  return (
    <View style={styles.container}>
      {header && <View>{header}</View>}
      <ScrollView style={styles.scrollView} contentContainerStyle={isTablet ? styles.scrollContentTablet : styles.scrollContent}>
        {isTablet ? <View style={styles.mainTablet}>{content}</View> : <View style={styles.phoneLayout}>{content}</View>}
      </ScrollView>
      {footer && <View style={styles.footer}>{footer}</View>}
    </View>
  );
}

// Карточка фичи
export function FeatureCard({ icon, title, description, variant = 'primary' }: any) {
  return (
    <View style={[styles.featureCard, { backgroundColor: variant === 'primary' ? '#ffffff' : '#f0f8ff' }]}>
      <Text style={styles.featureIcon}>{icon}</Text>
      <Text style={styles.featureTitle}>{title}</Text>
      <Text style={styles.featureDescription}>{description}</Text>
    </View>
  );
}

// Статистика
export function StatsRow({ stats }: any) {
  return (
    <View style={styles.statsRow}>
      {stats.map((stat: any, index: number) => (
        <View key={index} style={styles.statItem}>
          <Text style={styles.statValue}>{stat.value}</Text>
          <Text style={styles.statLabel}>{stat.label}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  scrollView: { flex: 1 },
  scrollContent: { paddingVertical: 16 },
  scrollContentTablet: { paddingVertical: 24 },
  phoneLayout: { paddingHorizontal: 16 },
  mainTablet: { paddingHorizontal: 40 },
  footer: { backgroundColor: '#ffffff', padding: 16, borderTopWidth: 1, borderColor: '#e0e0e0' },
  featureCard: {
    borderRadius: 16, padding: 20, marginBottom: 16, alignItems: 'center',
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3,
  },
  featureIcon: { fontSize: 32, marginBottom: 12 },
  featureTitle: { fontSize: 18, fontWeight: '700', color: '#333', marginBottom: 8, textAlign: 'center' },
  featureDescription: { fontSize: 14, color: '#666', textAlign: 'center', lineHeight: 20 },
  statsRow: {
    flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#ffffff',
    paddingVertical: 20, borderRadius: 12, marginBottom: 16,
    shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1, shadowRadius: 2, elevation: 2,
  },
  statItem: { alignItems: 'center' },
  statValue: { fontSize: 24, fontWeight: '700', color: '#0066cc', marginBottom: 4 },
  statLabel: { fontSize: 12, color: '#666', textTransform: 'uppercase' },
});