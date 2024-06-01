import { AxiosError } from 'axios';

import { api } from '@api';

import { toGithubRepository } from './githubAdapter';
import { GithubRepository, GithubRepositoryAPI } from './githubTypes';

export async function getRepositories(
  username: string,
): Promise<GithubRepository[]> {
  try {
    const response = await api.get<GithubRepositoryAPI[]>(
      `/users/${username}/repos`,
    );

    const repositories = toGithubRepository(response.data);

    return repositories;
  } catch (error) {
    const _error = error as AxiosError<{ message: string }>;

    throw new Error(
      _error.response?.data.message ||
        'Ocorreu um erro ao buscar os repositórios.',
    );
  }
}

export const githubService = {
  getRepositories,
};
