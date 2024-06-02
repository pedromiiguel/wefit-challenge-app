import { FlatList, ListRenderItemInfo, RefreshControl } from 'react-native';

import { Box } from '@gluestack-ui/themed';

import { Card, CardProps, EmptyList, Screen } from '@components';
import { useRepositories } from '@services';

export function RepositoriesScreen() {
  const { repositories, isLoading, refetch, isError } = useRepositories();

  function renderItem({ item }: ListRenderItemInfo<CardProps['repository']>) {
    return <Card repository={item} showFavoriteButton />;
  }

  return (
    <Screen title="WeFit" showRightIcon>
      <Box flex={1} pt="$4">
        <FlatList
          showsVerticalScrollIndicator={false}
          data={repositories}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={{
            rowGap: 16,
            flexGrow: 1,
            paddingBottom: 16,
          }}
          refreshing={isLoading}
          refreshControl={
            <RefreshControl refreshing={isLoading} onRefresh={refetch} />
          }
          ListEmptyComponent={
            <EmptyList refetch={refetch} error={isError} loading={isLoading} />
          }
        />
      </Box>
    </Screen>
  );
}
