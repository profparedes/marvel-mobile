import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigatorScreenParams } from '@react-navigation/native';
import CharacterViewRouter, {
  CharacterStackParamListType,
} from './CharacterViewRouter';
import ComicViewRouter, { ComicStackParamListType } from './ComicViewRouter';

export type RootStackParamListType = {
  Characters: NavigatorScreenParams<CharacterStackParamListType>;
  Comics: NavigatorScreenParams<ComicStackParamListType>;
};

const Tab = createBottomTabNavigator<RootStackParamListType>();

const MainRoutes: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Characters" component={CharacterViewRouter} />
      <Tab.Screen name="Comics" component={ComicViewRouter} />
    </Tab.Navigator>
  );
};

export default MainRoutes;
