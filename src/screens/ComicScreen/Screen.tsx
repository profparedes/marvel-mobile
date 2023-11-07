import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';
import { RootStackParamListType } from 'routes/index';

type ComicScreenType = NativeStackScreenProps<
  RootStackParamListType,
  'ComicScreen'
>;

const ComicScreen: React.FC<ComicScreenType> = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Comic screen</Text>
    </View>
  );
};

export default ComicScreen;
