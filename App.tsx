import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { CharactersProvider } from 'contexts/CharactersContext';
import MainRoutes from 'routes/index';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <GluestackUIProvider config={config}>
        <CharactersProvider>
          <MainRoutes />
          <StatusBar />
        </CharactersProvider>
      </GluestackUIProvider>
    </NavigationContainer>
  );
};

export default App;
