import { createStackNavigator } from "@react-navigation/stack";

import AppSignIn from "./AppSignIn";
import AppSignUp from "./AppSignUp";

const Stack = createStackNavigator();

const AppAuthentication = () => {

  return (
    <Stack.Navigator
      initialRouteName="SignIn"
    >
      <Stack.Screen
        name="SignIn"
        component={AppSignIn}
        options={{ title: "Sign In" }}
      />
      <Stack.Screen
        name="SignUp"
        component={AppSignUp}
        options={{ title: "Sign Up" }}
      />
    </Stack.Navigator>
  );
};

export default AppAuthentication;
