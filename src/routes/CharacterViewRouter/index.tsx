import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import { CharacterScreen } from 'screens/CharacterScreen';
import { CharactersScreen } from 'screens/CharactersScreen';
import { CharacterType } from 'types/CharacterType';
import { RootStackParamListType } from '..';

type CharacterViewRouterType = NativeStackScreenProps<
  RootStackParamListType,
  'Characters'
>;

export type CharacterStackParamListType = {
  CharactersScreen: undefined;
  CharacterScreen: {
    character: CharacterType;
  };
};

const Stack = createNativeStackNavigator<CharacterStackParamListType>();

const CharacterViewRouter: React.FC<CharacterViewRouterType> = ({ route }) => {
  const { character } = route.params;

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="CharactersScreen" component={CharactersScreen} />
      <Stack.Screen name="CharacterScreen" options={{ title: character.name }}>
        {(props) => <CharacterScreen {...props} character={character} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default CharacterViewRouter;
