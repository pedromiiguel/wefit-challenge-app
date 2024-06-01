import { useQuery } from '@tanstack/react-query';

import { useUser } from 'src/services/user';
import { QueryKeys } from 'src/types';

import { useFavorites } from '../../favorites';
import { githubService } from '../githubService';

export function useRepositories() {
  const { username } = useUser();
  const { favorites } = useFavorites();

  const { data, isLoading, isError, refetch, isRefetching } = useQuery({
    queryKey: [QueryKeys.Repositories, username],
    queryFn: () => githubService.getRepositories(username),
    staleTime: 1000 * 60 * 5, // 5 minutes
    enabled: !!username,
  });

  const filteredRepositories = data?.filter(
    repository => !favorites.some(favorite => favorite.id === repository.id),
  );

  return {
    repositories: filteredRepositories,
    isError,
    isLoading,
    refetch,
    isRefetching,
  };
}
