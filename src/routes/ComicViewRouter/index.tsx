import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import { ComicScreen } from 'screens/ComicScreen';
import { ComicsScreen } from 'screens/ComicsScreen';
import { ComicType } from 'types/ComicType';
import { RootStackParamListType } from '..';

type ComicViewRouterType = NativeStackScreenProps<
  RootStackParamListType,
  'Comics'
>;

export type ComicStackParamListType = {
  ComicsScreen: undefined;
  ComicScreen: { comic: ComicType };
};

const Stack = createNativeStackNavigator<ComicStackParamListType>();

const ComicViewRouter: React.FC<ComicViewRouterType> = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="ComicsScreen" component={ComicsScreen} />
      <Stack.Screen name="ComicScreen" component={ComicScreen} />
    </Stack.Navigator>
  );
};

export default ComicViewRouter;
