import { useCallback, useMemo, useRef, useState } from 'react';
import { Platform, Pressable, StyleSheet } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Box, Button, Heading, Text } from '@gluestack-ui/themed';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetTextInput,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import { useAppSafeArea } from '@hooks';
import { useUser } from '@services';

import { ScreenProps } from '..';

type ScreenHeaderProps = Pick<
  ScreenProps,
  'canGoBack' | 'title' | 'showRightIcon' | 'variant'
> & {};

export function ScreenHeader({
  title,
  canGoBack = false,
  showRightIcon,
  variant = 'light',
}: ScreenHeaderProps) {
  const navigation = useNavigation();
  const { top } = useAppSafeArea();

  const [user, setUser] = useState('');
  const { setUsername } = useUser();

  const variants = {
    light: {
      bg: '#ffffff',
      color: '#212121',
    },
    dark: {
      bg: '#000000',
      color: '#ffffff',
    },
  };

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const snapPoints = useMemo(() => ['25%', '25%'], []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {}, []);

  const handleCloseModal = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);

  function handlePress() {
    setUsername(user);
    setUser('');
    bottomSheetModalRef.current?.dismiss();
  }

  return (
    <Box
      bg={variants[variant].bg}
      style={{ paddingTop: top }}
      flexDirection="row"
      alignItems="center"
      justifyContent={showRightIcon ? 'space-between' : 'flex-start'}
      gap="$4"
      paddingVertical={'$3'}
      paddingHorizontal={'$4'}>
      {canGoBack && (
        <Pressable hitSlop={10} onPress={navigation.goBack}>
          <AntDesign
            name="arrowleft"
            size={24}
            color={variants[variant].color}
          />
        </Pressable>
      )}
      <Heading
        size="xl"
        color={variants[variant].color}
        justifyContent="flex-end">
        {title}
      </Heading>

      {showRightIcon && (
        <Pressable hitSlop={10} onPress={handlePresentModalPress}>
          <Ionicons name="settings-sharp" size={24} color="black" />
        </Pressable>
      )}

      <StatusBar
        style={variant === 'light' ? 'dark' : 'light'}
        backgroundColor={variants[variant].bg}
      />

      <BottomSheetModal
        ref={bottomSheetModalRef}
        enableOverDrag={false}
        index={1}
        snapPoints={snapPoints}
        keyboardBehavior="interactive"
        enableDynamicSizing={Platform.OS === 'android' ? true : false}
        backdropComponent={backdropProps => (
          <BottomSheetBackdrop
            {...backdropProps}
            enableTouchThrough={true}
            opacity={0.5}
          />
        )}
        onChange={handleSheetChanges}>
        <BottomSheetView style={{ flex: 1 }}>
          <Box px="$4">
            <Text color="#212121" mt="$4">
              Alterar usuário selecionado
            </Text>
            <BottomSheetTextInput
              autoCapitalize="none"
              placeholderTextColor="#606060"
              placeholder="Nome de usuário"
              onChangeText={setUser}
              style={styles.input}
            />
            <Box flexDirection="row" mt="$3" alignItems="center" w="$full">
              <Button
                py="$2"
                variant="link"
                width="50%"
                onPress={handleCloseModal}>
                <Text fontFamily="$medium" color="#1976D2">
                  CANCELAR
                </Text>
              </Button>
              <Button py="$2" bg="#1976D2" width="50%" onPress={handlePress}>
                <Text fontFamily="$medium" color="$white">
                  SALVAR
                </Text>
              </Button>
            </Box>
          </Box>
        </BottomSheetView>
      </BottomSheetModal>
    </Box>
  );
}

const styles = StyleSheet.create({
  input: {
    marginTop: 8,
    marginBottom: 10,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#8B8B8B',
    color: '#000000',
    padding: 12,
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    lineHeight: 20,
    backgroundColor: '#F0F0F0',
  },
});
