import { Pressable } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { Box, Heading } from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import { useAppSafeArea } from '@hooks';

import { ScreenProps } from '..';

type ScreenHeaderProps = Pick<
  ScreenProps,
  'canGoBack' | 'title' | 'rightIcon' | 'variant'
> & {};

export function ScreenHeader({
  title,
  canGoBack = false,
  rightIcon,
  variant = 'light',
}: ScreenHeaderProps) {
  const navigation = useNavigation();
  const { top } = useAppSafeArea();

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

  return (
    <Box
      bg={variants[variant].bg}
      style={{ paddingTop: top }}
      flexDirection="row"
      alignItems="center"
      justifyContent={rightIcon ? 'space-between' : 'flex-start'}
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

      {rightIcon && <Box justifyContent="flex-end">{rightIcon}</Box>}

      <StatusBar
        style={variant === 'light' ? 'dark' : 'light'}
        backgroundColor={variants[variant].bg}
      />
    </Box>
  );
}
