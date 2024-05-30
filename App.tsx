import { config } from '@gluestack-ui/config';
import { GluestackUIProvider, Heading, Text } from '@gluestack-ui/themed';
export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <Heading>I am a Heading</Heading>
      <Text>Hello World!</Text>
    </GluestackUIProvider>
  );
}
