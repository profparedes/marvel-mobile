import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';
import { CharacterStackParamListType } from 'routes/CharacterViewRouter';

type CharactersScreenType = NativeStackScreenProps<
  CharacterStackParamListType,
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
