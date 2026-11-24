import { PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 30,
      cacheTime: 1000 * 60 * 35,
      retry: 1,
    },
  },
});

function QueryProvider({ children }: PropsWithChildren) {
  // Helps to tell when the app returns to the foreground... I don't like useEffect.
  // useEffect(() => {
  //   if (Platform.OS !== 'web') {
  //     const subscription = AppState.addEventListener('change', (status) => {
  //       focusManager.setFocused(status === 'active');
  //     });

  //     return () => subscription.remove();
  //   }
  // }, []);

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default QueryProvider;
