import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';
import { RootStackParamListType } from 'routes/index';

type ComicsScreenType = NativeStackScreenProps<
  RootStackParamListType,
  'ComicsScreen'
>;

const ComicsScreen: React.FC<ComicsScreenType> = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Comics screen</Text>
    </View>
  );
};

export default ComicsScreen;
