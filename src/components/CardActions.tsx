import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface Props {
  stock: Stock;
  onPress: () => void;
}

export const CardActions = ({stock, onPress}: Props) => {
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
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{stock.symbol}</Text>

      <View style={styles.containerActions}>
        <Text
          style={[styles.text, {flex: 1, maxWidth: '33.3%'}]}
          ellipsizeMode="tail"
          numberOfLines={1}>
          {stock.name}
        </Text>
        <Text
          style={[styles.text, {flex: 1, textAlign: 'center'}, styles.price]}>
          {stock.price}
        </Text>
        <Text
          style={[
            styles.text,
            {
              flex: 1,
              color: priceColorManager(stock.daily_change),
              textAlign: 'right',
            },
          ]}>
          {stock.daily_change}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  containerActions: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 16,
  },
  flex1: {
    flex: 1,
  },
  price: {
    fontWeight: 'bold',
  },
});
