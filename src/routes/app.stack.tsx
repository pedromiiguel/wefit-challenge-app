import { NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { DetailsScreen, WebViewScreen } from '@screens';
import { GithubRepository } from '@services';

import { AppTabBottomTabParamList, TabRoutes } from './tab.routes';

export type AppStackParamList = {
  AppTabNavigator: NavigatorScreenParams<AppTabBottomTabParamList>;
  DetailsScreen: {
    repository: GithubRepository;
  };
  WebViewScreen: {
    url: string;
  };
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}
      initialRouteName="AppTabNavigator">
      <Stack.Screen name="AppTabNavigator" component={TabRoutes} />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
      <Stack.Screen name="WebViewScreen" component={WebViewScreen} />
    </Stack.Navigator>
  );
}
