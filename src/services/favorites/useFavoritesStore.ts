import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { GithubRepository } from '../github/githubTypes';
import { asyncStorage } from '../storage';
type FavoritesStore = {
  items: GithubRepository[];

  addToFavorites: (item: GithubRepository) => void;
  removeFromFavorites: (id: number) => void;
};

const STORAGE_KEY = '@wefit-challenge-favorites';

const useFavoritesStore = create<FavoritesStore>()(
  persist(
    set => ({
      items: [],
      selected: null,
      addToFavorites: item => set(state => ({ items: [...state.items, item] })),
      removeFromFavorites: id =>
        set(state => ({
          items: state.items.filter(item => item.id !== id),
        })),
    }),
    {
      name: STORAGE_KEY,
      storage: asyncStorage,
    },
  ),
);

export function useFavorites() {
  const addToFavorites = useFavoritesStore(state => state.addToFavorites);
  const removeFromFavorites = useFavoritesStore(
    state => state.removeFromFavorites,
  );
  const favorites = useFavoritesStore(state => state.items);

  const isInFavorites = (id: number) => {
    const item = favorites.find(item => item.id === id);

    return !!item;
  };

  return { addToFavorites, removeFromFavorites, favorites, isInFavorites };
}
