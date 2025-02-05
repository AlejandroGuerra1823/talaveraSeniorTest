import React from 'react';
import {Text, View} from 'react-native';
import {CardActions} from '../components/CardActions';

export const PrincipalScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Text>PrincipalScreen</Text>

      <CardActions />
    </View>
  );
};
