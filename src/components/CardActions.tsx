import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const CardActions = ({name, price, daily_change, symbol}: Stock) => {
  return (
    <View style={Styles.Container}>
      <View style={{alignSelf: 'center'}}>
        <Text>Imagen gonita</Text>
      </View>
      <View>
        <Text> {name}</Text>
        <Text> {price}</Text>
        <Text> {daily_change}</Text>
        <Text> {symbol}</Text>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  Container: {
    borderWidth: 1,
    margin: 4,
    padding: 10,
    borderRadius: 7,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
