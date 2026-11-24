import { Href } from 'expo-router';

export const RoutesConst = {
  HOME: '/',
  EXPLORE: '/explore',
  COMING_SOON: '/coming-soon',
} as const satisfies Record<string, Href>;
