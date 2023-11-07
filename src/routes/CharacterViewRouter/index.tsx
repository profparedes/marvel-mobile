import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import { CharacterScreen } from 'screens/CharacterScreen';
import { CharactersScreen } from 'screens/CharactersScreen';
import { CharacterType } from 'types/CharacterType';

type CharacterViewRouterType = NativeStackScreenProps<
  RootStackParamListType,
  'CharacterViewRouter'
>;

export type RootStackParamListType = {
  CharactersScreen: undefined;
  CharacterScreen: { character: CharacterType };
};

const Stack = createNativeStackNavigator<RootStackParamListType>();

const CharacterViewRouter: React.FC<CharacterViewRouterType> = ({ route }) => {
  const { character } = route.params;

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="CharactersScreen" component={CharactersScreen} />
      <Stack.Screen name="CharacterScreen" component={CharacterScreen} />
    </Stack.Navigator>
  );
};

export default CharacterViewRouter;
