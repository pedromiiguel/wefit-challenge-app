import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import { AppTabBottomTabParamList } from './tab.routes';

export const mapScreenToProps: Record<
  keyof AppTabBottomTabParamList,
  {
    label: string;
    icon: (color: string) => JSX.Element;
  }
> = {
  RepositoriesScreen: {
    label: 'Repositórios',
    icon: color => <AntDesign name="github" size={24} color={color} />,
  },
  FavoritesScreen: {
    label: 'Favoritos',
    icon: color => <Entypo name="star" size={24} color={color} />,
  },
};
