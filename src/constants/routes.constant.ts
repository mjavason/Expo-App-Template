import { Href } from 'expo-router';

export const RoutesConst = {
  HOME: '/',
  EXPLORE: '/explore',
} as const satisfies Record<string, Href>;
