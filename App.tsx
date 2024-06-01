import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Routes } from './src/routes/routes';
const queryClient = new QueryClient();
export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <Routes />
      </QueryClientProvider>
    </GluestackUIProvider>
  );
}
