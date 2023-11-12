import { memo } from 'react';
import { Text, View } from '@gluestack-ui/themed';
import { ImageBackground, TouchableOpacity } from 'react-native';
import { getImageUrl } from 'helpers/index';
import { CharacterType } from 'types/CharacterType';

interface ICharacterCardProps {
  onPress: () => void;
  character: CharacterType;
}

const CharacterCard: React.FC<ICharacterCardProps> = ({
  onPress,
  character,
}) => (
  <TouchableOpacity onPress={onPress} style={{ flex: 1, alignItems: 'center' }}>
    <View>
      <ImageBackground
        source={{ uri: getImageUrl(character.thumbnail) }}
        alt={character.name}
        style={{ width: 150, height: 180 }}
      >
        <Text
          color="yellow"
          bg="black"
          textAlign="center"
          bold
          paddingVertical={5}
        >
          {character.name}
        </Text>
      </ImageBackground>
    </View>
  </TouchableOpacity>
);

export default memo(CharacterCard);
