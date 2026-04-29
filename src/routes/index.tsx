import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../screens/Login/index';
import { RegisterParticipant } from '../screens/RegisterParticipant';

const { Navigator, Screen } = createNativeStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }} initialRouteName="login">
        <Screen name="login" component={Login} />
        <Screen name="register" component={RegisterParticipant} />
      </Navigator>
    </NavigationContainer>
  );
}