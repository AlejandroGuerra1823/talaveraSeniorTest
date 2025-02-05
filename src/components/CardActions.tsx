import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const CardActions = ({name, price, daily_change, symbol}: Stock) => {
  const priceColorManager = (prince: number) => {
    if (prince == 0) {
      return 'black';
    } else if (prince > 0) {
      return 'green';
    } else {
      return 'red';
    }
  };

  return (
    <View style={Styles.Container}>
      <View style={{alignSelf: 'center'}}>
        <Text style={{fontSize: 20}}> {symbol}</Text>
      </View>
      <View
        style={{
          //   flex: 1,
          flexDirection: 'row',
          //   justifyContent: 'space-between',
          //   backgroundColor: 'red',
        }}>
        <View style={{backgroundColor: 'red'}}>
          <Text style={[Styles.textInformationStyle, {}]}>{name}</Text>
        </View>
        <View style={{backgroundColor: 'red'}}>
          <Text style={[Styles.textInformationStyle, {textAlign: 'center'}]}>
            {price}
          </Text>
        </View>
        <View>
          <Text
            style={[
              Styles.textInformationStyle,
              {
                textAlign: 'right',
                color: priceColorManager(Number(daily_change)),
              },
            ]}>
            {daily_change}
          </Text>
        </View>
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
  textInformationStyle: {fontSize: 16},
});
