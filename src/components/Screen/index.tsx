import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';

import { Box } from '@gluestack-ui/themed';

import {
  ScrollViewContainer,
  ViewContainer,
} from './components/ScreenContainer';
import { ScreenHeader } from './components/ScreenHeader';

export interface ScreenProps {
  children: React.ReactNode;
  title?: string;
  scrollable?: boolean;
  canGoBack?: boolean;
  showRightIcon?: React.ReactNode;
  noPaddingHorizontal?: boolean;
  variant?: 'light' | 'dark';
}

export function Screen({
  children,
  title,
  scrollable = false,
  canGoBack,
  showRightIcon,
  noPaddingHorizontal = false,
  variant = 'light',
}: ScreenProps) {
  const Container = scrollable ? ScrollViewContainer : ViewContainer;

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container backgroundColor="#F6F6F5">
        <ScreenHeader
          title={title}
          canGoBack={canGoBack}
          showRightIcon={showRightIcon}
          variant={variant}
        />

        <Box flex={1} paddingHorizontal={noPaddingHorizontal ? '$0' : '$4'}>
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
