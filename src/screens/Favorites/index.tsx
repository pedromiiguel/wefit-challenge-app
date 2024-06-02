import { ListRenderItemInfo } from 'react-native';
import { FlatList } from 'react-native';

import { Box } from '@gluestack-ui/themed';

import { Card, CardProps, EmptyList, Screen } from '@components';
import { useFavorites } from '@services';

export function FavoritesScreen() {
  const { favorites } = useFavorites();

  function renderItem({ item }: ListRenderItemInfo<CardProps['repository']>) {
    return <Card repository={item} />;
  }

  return (
    <Screen title="WeFit" showRightIcon>
      <Box paddingTop={'$4'}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={favorites}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
          onEndReachedThreshold={0.1}
          contentContainerStyle={{
            rowGap: 16,
            paddingBottom: 16,
          }}
          ListEmptyComponent={
            <EmptyList refetch={() => {}} error={false} loading={false} />
          }
        />
      </Box>
    </Screen>
  );
}
