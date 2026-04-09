import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Screens/Login';
import HomeScreen from './Screens/HomeScreen';
import DetailsScreen from './Screens/Details';
import Produtos from './Screens/Produtos';

export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Produtos'>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
            <Stack.Screen name="Produtos" component={Produtos} />

        </Stack.Navigator>
    </NavigationContainer>
  );
}