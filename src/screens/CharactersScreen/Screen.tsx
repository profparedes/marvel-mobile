import React, { useEffect } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CharacterCard } from 'components/CharacterCard';
import { useCharacters } from 'contexts/CharactersContext';
import { CharacterStackParamListType } from 'routes/CharacterViewRouter';

type CharactersScreenType = NativeStackScreenProps<
  CharacterStackParamListType,
  'CharactersScreen'
>;

const CharactersScreen: React.FC<CharactersScreenType> = ({ navigation }) => {
  const { characters, isLoading, fetchCharacters } = useCharacters();

  useEffect(() => {
    fetchCharacters(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      {!isLoading && characters.length > 0 && (
        <FlatList
          data={characters}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: 'space-around',
            marginBottom: 10,
          }}
          renderItem={({ item }) => (
            <CharacterCard
              onPress={() =>
                navigation.navigate('CharacterScreen', {
                  character: item,
                })
              }
              character={item}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </SafeAreaView>
  );
};

export default CharactersScreen;
