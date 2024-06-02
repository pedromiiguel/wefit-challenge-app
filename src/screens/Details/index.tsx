import { Ionicons } from '@expo/vector-icons';
import { Box, Button, ButtonText, Text, VStack } from '@gluestack-ui/themed';

import { Dot, Screen } from '@components';
import { useAppSafeArea } from '@hooks';
import { AppScreenProps } from '@routes';
import { useFavorites } from '@services';

import { splitFullName } from '@utils';

import { FavoriteButton } from './components/FavoriteButton';

export function DetailsScreen({
  route,
  navigation,
}: AppScreenProps<'DetailsScreen'>) {
  const repository = route.params.repository;
  const { isInFavorites } = useFavorites();
  const [creator, name] = splitFullName(repository.fullName);
  const { bottom } = useAppSafeArea();

  const isFavorite = isInFavorites(repository.id);

  function navigateToWebViewScreen() {
    navigation.navigate('WebViewScreen', { url: repository.htmlUrl });
  }

  return (
    <Screen title="Detalhes" canGoBack noPaddingHorizontal variant="dark">
      <Box justifyContent="space-between" flex={1}>
        <VStack space="sm" bg="$white" p="$4">
          <Text size="xl" color="#070707">
            {creator}/
            <Text size="xl" fontFamily="$bold" color="#070707" bold>
              {name}
            </Text>
          </Text>
          <Text size="md" color="#9A9A9A">
            {repository.description}
          </Text>
          <Box flexDirection="row" gap="$2" alignItems="center">
            <Dot />
            <Text size="sm">{repository.language}</Text>
          </Box>
        </VStack>
        <VStack
          elevation={3}
          shadowColor="#000"
          shadowOffset={{ width: 0, height: 1 }}
          shadowOpacity={0.2}
          shadowRadius={1.41}
          space="md"
          bg="$white"
          p="$4"
          pb={bottom}>
          <Button variant="link" gap="$2" onPress={navigateToWebViewScreen}>
            <ButtonText fontFamily={'$medium'} color="#1976D2">
              VER REPOSITÓRIO
            </ButtonText>
            <Ionicons name="link" size={24} color="#1976D2" />
          </Button>
          <FavoriteButton isFavorite={isFavorite} repository={repository} />
        </VStack>
      </Box>
    </Screen>
  );
}
