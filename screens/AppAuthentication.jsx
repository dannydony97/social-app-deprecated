import { createStackNavigator } from "@react-navigation/stack";

import AppSignIn from "./AppSignIn";
import AppSignUp from "./AppSignUp";
import AppEmailVerification from "./AppEmailVerification";

const Stack = createStackNavigator();

const AppAuthentication = () => {

  return (
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{
        headerTintColor: 'black'
      }}
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
      <Stack.Screen
        name="EmailVerification"
        component={AppEmailVerification}
        options={{title: "Email Verification"}}
      />
    </Stack.Navigator>
  );
};

export default AppAuthentication;
