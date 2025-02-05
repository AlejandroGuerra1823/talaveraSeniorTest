import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {CardActions} from '../../components/CardActions';
import stockData from '../../data/dummy_stock_data.json';
import {ContainerStackParams} from '../../navigation/ContainerStackNavigation';
import {Styles} from './PrincipalScreenStyles';

interface Props
  extends StackScreenProps<ContainerStackParams, 'PrincipalScreen'> {}

export const PrincipalScreen = ({navigation}: Props) => {
  return (
    <View style={Styles.contaier}>
      <FlatList
        data={stockData.stocks}
        ListHeaderComponent={() => (
          <View style={Styles.containerHeader}>
            <Text style={Styles.headerText}>Name</Text>
            <Text style={Styles.headerText}>Prince</Text>
            <Text style={Styles.headerText}>Change</Text>
          </View>
        )}
        renderItem={({item}) => (
          <CardActions
            stock={item}
            onPress={() => {
              navigation.navigate('DetailScreen');
            }}
          />
        )}
      />
    </View>
  );
};
