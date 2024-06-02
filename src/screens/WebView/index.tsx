import Constants from 'expo-constants';
import WebView from 'react-native-webview';

import { AppScreenProps } from '@routes';

export function WebViewScreen({ route }: AppScreenProps<'WebViewScreen'>) {
  const url = route.params.url;
  return (
    <WebView
      style={{ flex: 1, marginTop: Constants.statusBarHeight }}
      source={{ uri: url }}
    />
  );
}
