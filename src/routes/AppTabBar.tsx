import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Box, Text } from '@gluestack-ui/themed';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import { useAppSafeArea } from '@hooks';

import { mapScreenToProps } from './mapScreenToProps';
import { AppTabBottomTabParamList } from './tab.routes';

export function AppTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const { bottom } = useAppSafeArea();

  return (
    <Box
      elevation={5}
      shadowColor="#000"
      shadowOffset={{ width: 0, height: 1 }}
      shadowOpacity={0.22}
      shadowRadius={2.22}
      flexDirection="row"
      paddingTop={10}
      backgroundColor="#FFFFFF"
      style={[{ paddingBottom: bottom }]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const tabItem =
          mapScreenToProps[route.name as keyof AppTabBottomTabParamList];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({
              name: route.name,
              params: route.params,
              merge: true,
            });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          descriptors[route.key].options.tabBarHideOnKeyboard && (
            <TouchableOpacity
              key={route.name}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flex: 1, alignItems: 'center', height: 'auto' }}>
              {tabItem.icon(isFocused ? '#1976D2' : '#666666')}

              <Text size="sm" mt="$1" color={isFocused ? '#1976D2' : '#666666'}>
                {tabItem.label}
              </Text>
            </TouchableOpacity>
          )
        );
      })}
    </Box>
  );
}
