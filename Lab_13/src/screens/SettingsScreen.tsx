// src/screens/SettingsScreen.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, ScrollView, Alert } from 'react-native';

interface SettingRowProps {
  label: string;
  value?: boolean;
  onValueChange?: (value: boolean) => void;
  onPress?: () => void;
  showArrow?: boolean;
}

function SettingRow({ label, value, onValueChange, onPress, showArrow = false }: SettingRowProps) {
  const content = (
    <View style={styles.settingRow}>
      <Text style={styles.settingLabel}>{label}</Text>
      {onValueChange !== undefined && value !== undefined && (
        <Switch value={value} onValueChange={onValueChange} />
      )}
      {showArrow && <Text style={styles.arrow}>{'\u203A'}</Text>}
    </View>
  );

  if (onPress) {
    return <TouchableOpacity onPress={onPress}>{content}</TouchableOpacity>;
  }
  return content;
}

export default function SettingsScreen() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const handleLogout = () => {
    Alert.alert('Log Out', 'Are you sure you want to log out?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Log Out', style: 'destructive', onPress: () => Alert.alert('Logged out') },
    ]);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>
        <View style={styles.sectionContent}>
          <SettingRow label="Change Password" onPress={() => Alert.alert('Change Password')} showArrow />
          <SettingRow label="Privacy Settings" onPress={() => Alert.alert('Privacy Settings')} showArrow />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preferences</Text>
        <View style={styles.sectionContent}>
          <SettingRow label="Push Notifications" value={notifications} onValueChange={setNotifications} />
          <SettingRow label="Dark Mode" value={darkMode} onValueChange={setDarkMode} />
        </View>
      </View>

      <View style={styles.logoutSection}>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  section: { marginTop: 24 },
  sectionTitle: { fontSize: 14, fontWeight: '600', color: '#666', marginLeft: 20, marginBottom: 8, textTransform: 'uppercase' },
  sectionContent: { backgroundColor: '#ffffff', borderRadius: 12, marginHorizontal: 16, overflow: 'hidden' },
  settingRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 14, paddingHorizontal: 16, borderBottomWidth: 1, borderBottomColor: '#f0f0f0' },
  settingLabel: { fontSize: 16, color: '#333' },
  arrow: { fontSize: 20, color: '#ccc' },
  logoutSection: { marginTop: 32, paddingHorizontal: 16 },
  logoutButton: { backgroundColor: '#dc3545', borderRadius: 8, padding: 16, alignItems: 'center' },
  logoutButtonText: { color: '#ffffff', fontSize: 16, fontWeight: '600' },
});