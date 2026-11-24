import { ErrorToast } from 'react-native-toast-message';

export const toastConfig = {
  error: (props: any) => (
    <ErrorToast
      {...props}
      style={{
        minHeight: 75,
        height: 'auto',
        borderLeftColor: '#EF4444',
      }}
      contentContainerStyle={{
        paddingHorizontal: 12,
        paddingVertical: 12,
      }}
      text1Style={{
        fontSize: 14,
        fontWeight: '600',
        flexWrap: 'wrap',
      }}
      text2Style={{
        fontSize: 13,
        flexWrap: 'wrap',
      }}
      text1NumberOfLines={0}
      text2NumberOfLines={0}
    />
  ),
};
