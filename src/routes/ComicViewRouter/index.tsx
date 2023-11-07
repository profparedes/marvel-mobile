import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import { ComicScreen } from 'screens/ComicScreen';
import { ComicsScreen } from 'screens/ComicsScreen';
import { ComicType } from 'types/ComicType';

type ComicViewRouterType = NativeStackScreenProps<
  RootStackParamListType,
  'ComicViewRouter'
>;

export type RootStackParamListType = {
  ComicsScreen: undefined;
  ComicScreen: { comic: ComicType };
};

const Stack = createNativeStackNavigator<RootStackParamListType>();

const ComicViewRouter: React.FC<ComicViewRouterType> = ({ route }) => {
  const { comic } = route.params;

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
