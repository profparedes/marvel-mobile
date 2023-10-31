import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';
import { RootStackParamListType } from 'routes/index';

type HomeScreenType = NativeStackScreenProps<RootStackParamListType, 'Home'>;

const HomeScreen: React.FC<HomeScreenType> = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hello Native</Text>
    </View>
  );
};

export default HomeScreen;
