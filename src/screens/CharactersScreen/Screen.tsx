import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';
import { RootStackParamListType } from 'routes/index';

type CharactersScreenType = NativeStackScreenProps<
  RootStackParamListType,
  'CharactersScreen'
>;

const CharactersScreen: React.FC<CharactersScreenType> = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Character screen</Text>
    </View>
  );
};

export default CharactersScreen;
