import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PrincipalScreen} from '../screens/PrincipalScreen';

const Stack = createNativeStackNavigator();

export const ContainerStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={PrincipalScreen} />
    </Stack.Navigator>
  );
};
