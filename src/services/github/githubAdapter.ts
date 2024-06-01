import { GithubRepositoryAPI, GithubRepository } from './githubTypes';

const DEFAULT_DESCRIPTION = 'Sem descrição';

export function toGithubRepository(
  githubRepositoryAPI: GithubRepositoryAPI[],
): GithubRepository[] {
  return githubRepositoryAPI.map(repository => ({
    id: repository.id,
    fullName: repository.full_name,
    description: repository.description || DEFAULT_DESCRIPTION,
    owner: {
      avatarUrl: repository.owner.avatar_url,
    },
    stargazersCount: repository.stargazers_count,
    language: repository.language,
    htmlUrl: repository.html_url,
  }));
}
