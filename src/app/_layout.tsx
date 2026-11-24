import { toastConfig } from '@/config/toast.config';
import QueryProvider from '@/providers/query-provider';
import { DarkTheme, Stack, ThemeProvider } from 'expo-router';
import Toast from 'react-native-toast-message';
import '../global.css';

export default function RootLayout() {
  return (
    <ThemeProvider value={DarkTheme}>
      <QueryProvider>
        <Stack
          screenOptions={{ headerShown: false, animation: 'slide_from_right' }}
        />
        <Toast config={toastConfig} />
      </QueryProvider>
    </ThemeProvider>
  );
}
