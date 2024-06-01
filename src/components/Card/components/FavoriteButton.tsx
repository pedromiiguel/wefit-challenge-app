import { Entypo } from '@expo/vector-icons';
import { Button, Text } from '@gluestack-ui/themed';

type FavoriteButtonProps = {
  onPress: () => void;
};

export function FavoriteButton({ onPress }: FavoriteButtonProps) {
  return (
    <Button
      onPress={onPress}
      bg="#FAF3DC"
      borderRadius={4}
      flexDirection="row"
      alignItems="center"
      gap="$2">
      <Entypo name="star" size={24} color={'#FFD02C'} />
      <Text size="md" color="#FFD02C" bold>
        Favoritar
      </Text>
    </Button>
  );
}
