import { Entypo } from '@expo/vector-icons';
import { Button, ButtonText } from '@gluestack-ui/themed';

import { GithubRepository, useFavorites } from '@services';

type FavoriteButtonProps = {
  isFavorite: boolean;
  repository: GithubRepository;
};

export function FavoriteButton({
  isFavorite,
  repository,
}: FavoriteButtonProps) {
  const { addToFavorites, removeFromFavorites } = useFavorites();

  return (
    <>
      {isFavorite ? (
        <Button
          onPress={() => {
            removeFromFavorites(repository.id);
          }}
          borderColor="#000000"
          variant="outline"
          bg="#FFFFFF"
          gap="$2">
          <ButtonText fontFamily="$medium" color="#000000">
            DESFAVORITAR
          </ButtonText>

          <Entypo name="star-outlined" size={24} color="black" />
        </Button>
      ) : (
        <Button
          onPress={() => {
            addToFavorites(repository);
          }}
          bg="#FFD02C"
          gap="$2">
          <ButtonText fontFamily="$medium" color="#000000">
            FAVORITAR
          </ButtonText>

          <Entypo name="star" size={24} color={'#000000'} />
        </Button>
      )}
    </>
  );
}
