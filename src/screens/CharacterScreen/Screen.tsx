import React, { useEffect } from 'react';
import { Image, ScrollView } from '@gluestack-ui/themed';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useCharacters } from 'contexts/CharactersContext';
import { getImageUrl } from 'helpers/index';
import { CharacterStackParamListType } from 'routes/CharacterViewRouter';
import { CharacterType } from 'types/CharacterType';

type CharacterScreenType = NativeStackScreenProps<
  CharacterStackParamListType,
  'CharacterScreen'
> & {
  character: CharacterType;
};

const CharacterScreen: React.FC<CharacterScreenType> = ({
  character: routeCharacter,
}) => {
  const { character, isLoading, fetchCharacter } = useCharacters();

  useEffect(() => {
    if (routeCharacter.id) fetchCharacter(routeCharacter.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      {isLoading && <Text>Loading...</Text>}
      {character && (
        <ScrollView>
          <Image
            source={{ uri: getImageUrl(character.thumbnail) }}
            alt={character.name}
            alignSelf="center"
          />
          <Text>{character.name}</Text>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default CharacterScreen;
