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
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#000',
          borderTopColor: 'red',
          borderTopWidth: 2,
          height: 40,
        },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'grey',
      }}
    >
      <Tab.Screen
        name="Characters"
        component={CharacterViewRouter}
        options={{
          tabBarLabel: 'CharacterTab',
          tabBarIcon: () => null,
        }}
      />
      <Tab.Screen
        name="Comics"
        component={ComicViewRouter}
        options={{
          tabBarLabel: 'Comics',
          tabBarIcon: () => null,
        }}
      />
    </Tab.Navigator>
  );
};

export default MainRoutes;
