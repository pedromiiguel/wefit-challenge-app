import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RepositoriesScreen } from '../screens/Repositories';
import { FavoritesScreen } from '../screens/Favorites';

const Tab = createBottomTabNavigator();

export type AppTabBottomTabParamList = {
  RepositoriesScreen: undefined;
  FavoritesScreen: undefined;
};

export function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen name="Repositories" component={RepositoriesScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
    </Tab.Navigator>
  );
}
