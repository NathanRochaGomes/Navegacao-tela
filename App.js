import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Screens/Login';
import HomeScreen from './Screens/HomeScreen';
import DetailsScreen from './Screens/Details';
import { create } from 'react-native/types_generated/Libraries/ReactNative/ReactFabricPublicInstance/ReactNativeAttributePayload';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function App() {

  const Stack = createStackNavigator();
  const tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />

        </Stack.Navigator>
    </NavigationContainer>
  );
}