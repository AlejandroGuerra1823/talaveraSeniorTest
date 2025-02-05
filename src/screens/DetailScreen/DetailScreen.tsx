import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ContainerStackParams} from '../../navigation/ContainerStackNavigation';

interface Props
  extends StackScreenProps<ContainerStackParams, 'DetailScreen'> {}

export const DetailScreen = ({route}: Props) => {
  const actionDetail = route.params;

  return (
    <View style={{padding: 10, justifyContent: 'center'}}>
      <Text style={Styles.title}>{actionDetail.name}</Text>
      <View style={{justifyContent: 'center'}}>
        <Text style={Styles.textInformation}>{actionDetail.symbol}</Text>
        <Text style={Styles.textInformation}>{actionDetail.price}</Text>
        <Text style={Styles.textInformation}>{actionDetail.daily_change}</Text>
      </View>
      <View style={{justifyContent: 'center'}}>
        <Text style={Styles.textInformation}>Sorry i couldn`t finish 😭</Text>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
  },
  textInformation: {
    textAlign: 'center',
    fontSize: 18,
    margin: 8,
  },
});
