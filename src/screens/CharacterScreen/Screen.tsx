import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';
import { RootStackParamListType } from 'routes/index';

type CharactersScreenType = NativeStackScreenProps<
  RootStackParamListType,
  'CharacterScreen'
>;

const CharacterScreen: React.FC<CharactersScreenType> = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Characters screen</Text>
    </View>
  );
};

export default CharacterScreen;
