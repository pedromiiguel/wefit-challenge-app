import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import { FavoritesScreen } from '../screens/Favorites';
import { RepositoriesScreen } from '../screens/Repositories';

import { AppTabBar } from './AppTabBar';

export type AppTabBottomTabParamList = {
  RepositoriesScreen: undefined;
  FavoritesScreen: undefined;
};

const Tab = createBottomTabNavigator<AppTabBottomTabParamList>();
export function TabRoutes() {
  function renderTabBar(props: BottomTabBarProps) {
    return <AppTabBar {...props} />;
  }

  return (
    <Tab.Navigator
      tabBar={renderTabBar}
      screenOptions={{
        tabBarActiveTintColor: '#1976D2',
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen name="RepositoriesScreen" component={RepositoriesScreen} />
      <Tab.Screen name="FavoritesScreen" component={FavoritesScreen} />
    </Tab.Navigator>
  );
}
