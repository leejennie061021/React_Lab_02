// src/screens/NotificationsScreen.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';

export default function NotificationsScreen() {
  const [notifications, setNotifications] = useState([
    { id: '1', user: 'Jane Smith', message: 'liked your post', time: '2m ago', read: false },
    { id: '2', user: 'Mike Johnson', message: 'commented: "Great insights!"', time: '15m ago', read: true },
  ]);

  const renderNotification = ({ item }: any) => (
    <TouchableOpacity style={[styles.notificationItem, !item.read && styles.unreadItem]}>
      <View style={styles.notificationContent}>
        <Text style={styles.notificationText}>
          <Text style={styles.userName}>{item.user}</Text> {item.message}
        </Text>
        <Text style={styles.timeText}>{item.time}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={renderNotification}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  listContent: { flexGrow: 1 },
  notificationItem: { flexDirection: 'row', alignItems: 'center', padding: 16, backgroundColor: '#ffffff', borderBottomWidth: 1, borderBottomColor: '#f0f0f0' },
  unreadItem: { backgroundColor: '#f0f8ff' },
  notificationContent: { flex: 1, marginLeft: 12 },
  notificationText: { fontSize: 14, color: '#333', lineHeight: 20 },
  userName: { fontWeight: '600' },
  timeText: { fontSize: 12, color: '#999', marginTop: 4 },
});