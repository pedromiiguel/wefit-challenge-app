import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { Routes } from './src/routes/routes';
export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <Routes />
    </GluestackUIProvider>
  );
}
