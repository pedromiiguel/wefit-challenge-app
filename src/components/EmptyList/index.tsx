import React from 'react';

import { Box, Button, ButtonText, Text } from '@gluestack-ui/themed';

export interface EmptyListProps {
  loading: boolean;
  error: unknown;
  refetch: () => void;
  emptyMessage?: string;
  errorMessage?: string;
}
export function EmptyList({
  loading,
  error,
  refetch,
  emptyMessage = 'Não encontramos nenhum repositorio.',
  errorMessage = 'Não foi possível carregar os repositórios.',
}: EmptyListProps) {
  if (loading) {
    return null;
  }

  let component = (
    <Text fontFamily="$semibold" fontWeight={'$semibold'}>
      {emptyMessage}
    </Text>
  );

  if (error) {
    component = (
      <Box gap="$4">
        <Text fontFamily="$semibold" fontWeight={'$semibold'} color="$red10">
          {errorMessage}
        </Text>

        <Button onPress={refetch} bg="#1976D2">
          <ButtonText>Recarregar</ButtonText>
        </Button>
      </Box>
    );
  }

  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      {component}
    </Box>
  );
}
