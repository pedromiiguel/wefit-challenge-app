import { Pressable } from 'react-native';

import { Entypo } from '@expo/vector-icons';
import { Box, Image, Text } from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';

import { images } from '@assets';
import { useFavorites, GithubRepository } from '@services';

import { splitFullName } from '@utils';

import { Dot } from '../Dot';

import { FavoriteButton } from './components/FavoriteButton';

export type CardProps = {
  repository: GithubRepository;
  showFavoriteButton?: boolean;
};

export function Card({ repository, showFavoriteButton }: CardProps) {
  const [creator, name] = splitFullName(repository.fullName);
  const { addToFavorites } = useFavorites();
  const { navigate } = useNavigation();

  function navigateToDetailsScreen() {
    navigate('DetailsScreen', {
      repository,
    });
  }

  return (
    <Pressable onPress={navigateToDetailsScreen}>
      <Box
        p="$4"
        bg="$white"
        borderRadius={4}
        elevation={4}
        shadowColor="#000"
        shadowOffset={{ width: 0, height: 1 }}
        shadowOpacity={0.22}
        shadowRadius={2.22}>
        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between">
          <Text size="md" color="#070707">
            {creator}/
            <Text size="md" fontFamily="$bold" color="#070707">
              {name}
            </Text>
          </Text>

          <Image
            w={30}
            h={30}
            source={images.lightBulb}
            alt="ícone de lâmpada"
          />
        </Box>

        <Box height={1} bg="#DADADA" my={'$4'} />
        <Text size="md" color="#9A9A9A">
          {repository.description}
        </Text>
        <Box
          mt="$4"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center">
          {showFavoriteButton && (
            <FavoriteButton onPress={() => addToFavorites(repository)} />
          )}

          <Box flexDirection="row" gap="$2" alignItems="center">
            <Entypo name="star" size={24} color={'#FFD02C'} />
            <Text size="md" color="#9A9A9A" gap={'$2'}>
              {repository.stargazersCount}
            </Text>
          </Box>

          <Box flexDirection="row" gap="$2" alignItems="center">
            <Dot />
            <Text size="md" color="#9A9A9A">
              {repository.language}
            </Text>
          </Box>
        </Box>
      </Box>
    </Pressable>
  );
}
