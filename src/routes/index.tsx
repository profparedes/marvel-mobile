import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CharacterViewRouter from './CharacterViewRouter';
import ComicViewRouter from './ComicViewRouter';

export type RootStackParamListType = {
  Characters: undefined;
  Comics: undefined;
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
