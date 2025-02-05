import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PrincipalScreen} from '../screens/PrincipalScreen/PrincipalScreen';
import {DetailScreen} from '../screens/DetailScreen/DetailScreen';

export type ContainerStackParams = {
  PrincipalScreen: undefined;
  DetailScreen: undefined;
};

const Stack = createNativeStackNavigator<ContainerStackParams>();

export const ContainerStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="PrincipalScreen"
      screenOptions={{contentStyle: {backgroundColor: 'white'}}}>
      <Stack.Screen name="PrincipalScreen" component={PrincipalScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
};
