# Lab 13: Mobile Navigation

## Overview
This project implements mobile navigation using React Navigation. It demonstrates two primary navigation patterns: Stack Navigation and Bottom Tab Navigation, and shows how they can be combined effectively in a single React Native application.

## Navigation Patterns

### 1. Stack Navigation
Stack navigation provides a way for the app to transition between screens where each new screen is placed on top of a stack (like a deck of cards). 
- **Setup:** It is implemented using `createNativeStackNavigator` from `@react-navigation/native-stack`.
- **Route Parameters:** Data is dynamically passed between screens using route parameters. For example, when navigating from the Home screen to the Profile screen, we pass a specific user ID: `navigation.navigate('Profile', { userId: '123' })`. The Profile screen then reads this parameter using `route.params` to display the correct data.

### 2. Bottom Tab Navigation & Combination
Bottom Tab Navigation allows the user to switch between the primary sections of the app (Home, Search, Notifications, Profile) using a persistent tab bar at the bottom of the screen.
- **Setup:** Implemented using `createBottomTabNavigator` from `@react-navigation/bottom-tabs`. Icons and notification badges are added using `@expo/vector-icons`.
- **Combination (Stack inside Tab):** To allow deep linking and hierarchical navigation within each tab, we nest Stack Navigators inside the Tab Navigator. Instead of assigning a simple screen to a tab, we assign a whole stack. For instance, the "Profile" tab renders the `ProfileStack`, which contains both `ProfileMain` and `Settings`. This ensures that when a user clicks "Settings" inside the Profile tab, the bottom navigation bar remains visible while the new screen slides in.

## Installation & Running
1. `npm install`
2. `npx expo start`

---

## AI Usage Report

**Student Name:** Rauli  
**Date:** 10.04.2026  

### 1. Описание проблемы (Description of the issue)
В процессе интеграции навигации (`Bottom Tab` и `Stack Navigator`) в приложении на React Native возникли ошибки типизации TypeScript, которые не позволяли запустить проект. Были получены следующие ошибки компиляции:
* `ts(1192)`: Module .../SearchScreen has no default export.
* `ts(2322)`: Type mismatch for `ProfileScreenProps` и ошибка привязки экрана к маршруту `ProfileMain`.

Для решения проблемы я обратилась к ИИ-ассистенту (Gemini) с запросом проанализировать скриншот с логами ошибок.

### 2. Анализ и предложенное решение (AI Analysis & Solution)
ИИ объяснил, что ошибки связаны со строгостью TypeScript в React Navigation:
1. В файле `SearchScreen.tsx` функция была экспортирована как обычная, а навигатор требовал `default` экспорт.
2. При инициализации навигаторов `Stack` и `Tab` в `AppNavigator.tsx` не были переданы типы параметров маршрутов, из-за чего TypeScript не мог проверить, какие экраны разрешены.
3. Возник конфликт маршрутов, так как компонент `ProfileScreen` был жестко типизирован под имя `Profile`, а в коде вызывался как `ProfileMain`.

### 3. Принятые меры (Action Taken)
Основываясь на подсказках ИИ, я внесла следующие изменения в код:
* Изменила экспорт в `SearchScreen.tsx` на `export default function SearchScreen()`.
* Импортировала типы `RootStackParamList` и `TabParamList` в файл навигатора.
* Добавила дженерики при создании навигаторов: 
  ```typescript
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const Tab = createBottomTabNavigator<TabParamList>();