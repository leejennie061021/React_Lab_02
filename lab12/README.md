# Lab 12: Styling & Responsive Layouts
**Student Name:** [Джаналиева Раули]  
**Date:** [03.04.2026]

## Overview
В данном проекте реализован адаптивный дизайн приложения с использованием Flexbox в React Native. 

## Responsive Design Implementation
1. **Grid Layout:** Использован хук `useWindowDimensions` для математического расчета ширины колонок в зависимости от ширины экрана устройства. Применена сетка Flexbox.
2. **Safe Area:** Использован `useSafeAreaInsets` из `react-native-safe-area-context` для корректного отображения шапки приложения (ResponsiveHeader) на устройствах с "челкой" (iOS Notch/Android Cutouts).
3. **Adaptive Layout:** В зависимости от ширины экрана (`width >= 768` для планшетов) контент автоматически перестраивается — увеличиваются отступы, изменяются размеры шрифтов и структура отображения.

report ai :
В процессе выполнения данного задания искусственный интеллект (Gemini) использовался в качестве виртуального ассистента (Pair Programmer) для решения специфических технических проблем, настройки архитектуры проекта и дебаггинга.

Конкретные сценарии использования ИИ:

Восстановление поврежденного синтаксиса (Code Recovery): При переносе кода из методички в проект были утеряны некоторые JSX-теги (например, <View>, <Text>). ИИ помог быстро восстановить валидную структуру React-компонентов в файлах GridLayout.tsx и AdaptiveLayout.tsx, а также прописать для них правильные интерфейсы TypeScript во избежание ошибок типизации.

Решение конфликтов маршрутизации (Expo Router Debugging):
При инициализации нового приложения (npx create-expo-app) Expo по умолчанию сгенерировал структуру с папкой app и встроенными нижними табами (tabs), что ломало требуемую адаптивную верстку и шапку (ResponsiveHeader). Я обратилась к ИИ за объяснением этой новой структуры. С помощью подсказок ИИ лишние табы были удалены, а логика перенесена в app/index.tsx с использованием чистого <Slot /> в _layout.tsx.

Консультация по Git Discipline и структуре папок:
ИИ использовался для уточнения команд терминала при переименовании корневой директории в строго требуемую Project_2/step5, а также для составления правильных Conventional Commits (feat:, docs:), чтобы полностью соответствовать критериям оценивания системы контроля версий.

Уточнение концепций React Native:
Были заданы уточняющие вопросы по интеграции хука useSafeAreaInsets на устройствах с "челкой", чтобы контент не перекрывался системной строкой состояния.

Вывод:
Использование ИИ помогло сэкономить время на борьбе с настройками окружения (environment setup) и багами маршрутизатора Expo. Это позволило мне полностью сфокусироваться на главной цели лабораторной работы — изучении Flexbox, адаптивной сетки и безопасных зон (Safe Areas). Весь итоговый код был разобран, протестирован и полностью осознан.


# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
