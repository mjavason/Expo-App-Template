import AsyncStorage from '@react-native-async-storage/async-storage';

const TOKEN_KEY = 'auth_token';
const USER_TYPE_KEY = 'user_type';

export const authStorage = {
  getToken: () => AsyncStorage.getItem(TOKEN_KEY),
  setToken: (token: string) => AsyncStorage.setItem(TOKEN_KEY, token),
  removeToken: () => AsyncStorage.removeItem(TOKEN_KEY),
  getUserType: () => AsyncStorage.getItem(USER_TYPE_KEY),
  removeUserType: () => AsyncStorage.removeItem(USER_TYPE_KEY),

  setUserType: (userType: string) =>
    AsyncStorage.setItem(USER_TYPE_KEY, userType),
};

// import * as SecureStore from 'expo-secure-store';

// const TOKEN_KEY = 'auth_token';

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
