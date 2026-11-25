import { AppStorageKeys } from '@/constants/keys.constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const authStorage = {
  getToken: () => AsyncStorage.getItem(AppStorageKeys.AUTH_TOKEN),
  setToken: (token: string) =>
    AsyncStorage.setItem(AppStorageKeys.AUTH_TOKEN, token),
  removeToken: () => AsyncStorage.removeItem(AppStorageKeys.AUTH_TOKEN),
  getUserType: () => AsyncStorage.getItem(AppStorageKeys.USER_TYPE),
  removeUserType: () => AsyncStorage.removeItem(AppStorageKeys.USER_TYPE),

  setUserType: (userType: string) =>
    AsyncStorage.setItem(AppStorageKeys.USER_TYPE, userType),

  clearAll: async () => {
    AsyncStorage.multiRemove([
      AppStorageKeys.USER_TYPE,
      AppStorageKeys.AUTH_TOKEN,
    ]);
  },
};

// import * as SecureStore from 'expo-secure-store';

// export const authStorage = {
//   async getToken(): Promise<string | null> {
//     return SecureStore.getItemAsync(TOKEN_KEY);
//   },

//   async setToken(token: string): Promise<void> {
//     await SecureStore.setItemAsync(TOKEN_KEY, token);
//   },

//   async removeToken(): Promise<void> {
//     await SecureStore.deleteItemAsync(TOKEN_KEY);
//   },
// };
