/**
 * Author: Ryan
 * Date: 2021-07-04
 * title: WriteStack
 */

import React from 'react';
import { View, Text } from 'react-native';
import StackHeader from '@components/Header/StackHeader';

type TProps = {
  navigation: any;
};

export default function WriteStack({ navigation }: TProps) {
  const goBack = navigation.goBack;
  return (
    <View>
      <StackHeader goBack={goBack} />
      <Text>{'testString'}</Text>
    </View>
  );
}
