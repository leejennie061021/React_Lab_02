import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// Обрати внимание на измененные пути (../)
import { ResponsiveHeader } from '../src/components/ResponsiveHeader';
import { AdaptiveLayout, FeatureCard, StatsRow } from '../src/components/AdaptiveLayout';
import { GridLayout, Card } from '../src/components/GridLayout';

export default function App() {
  const dummyStats = [
    { label: 'Пользователей', value: '1.2K' },
    { label: 'Оценки', value: '4.8' },
    { label: 'Загрузки', value: '99+' }
  ];

  const content = (
    <>
      <StatsRow stats={dummyStats} />
      
      <GridLayout columns={2}>
        <Card title="React Native" subtitle="Мобильная разработка">
          <FeatureCard icon="📱" title="UI" description="Создание красивых интерфейсов" variant="primary" />
        </Card>
        <Card title="Flexbox" subtitle="Адаптивность">
          <FeatureCard icon="📐" title="Сетка" description="Отзывчивый дизайн" variant="secondary" />
        </Card>
      </GridLayout>
    </>
  );

  return (
    <SafeAreaProvider>
      <AdaptiveLayout 
        header={<ResponsiveHeader title="Lab 12: Styling" leftAction={{ icon: '☰', onPress: () => {} }} />}
        content={content}
      />
    </SafeAreaProvider>
  );
}
