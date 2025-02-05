import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {CardActions} from '../components/CardActions';
import stockData from '../data/dummy_stock_data.json';

export const PrincipalScreen = () => {
  console.log(stockData.stocks, 'Hola');

  return (
    <View style={{flex: 1, backgroundColor: 'white', padding: 5}}>
      <FlatList
        data={stockData.stocks}
        ListHeaderComponent={() => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 15,
            }}>
            <Text>hola</Text>
            <Text>hola</Text>
            <Text>hola</Text>
          </View>
        )}
        renderItem={({item}) => (
          <CardActions
            name={item.name}
            price={item.price}
            symbol={item.symbol}
            daily_change={item.daily_change}
          />
        )}
      />
    </View>
  );
};
