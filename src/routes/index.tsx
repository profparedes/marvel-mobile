import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from 'screens/HomeScreen';

export type RootStackParamListType = {
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamListType>();

const MainRoutes: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default MainRoutes;
