import { createStackNavigator } from "@react-navigation/stack";
import { useTheme } from "react-native-paper";

import AppSignIn from "./AppSignIn";
import AppSignUp from "./AppSignUp";

const Stack = createStackNavigator();

const AppAuthentication = () => {

    const { colors } = useTheme();

    return (
        <Stack.Navigator
            initialRouteName="SignIn"
            screenOptions={{
                headerStyle: {
                    backgroundColor: colors.primary
                },
                headerTitleStyle: {
                    color: colors.headerText
                }
            }}
        >
                <Stack.Screen 
                    name="SignIn" 
                    component={AppSignIn}
                    options={{title: "Sign In"}}
                />
                <Stack.Screen 
                    name="SignUp"
                    component={AppSignUp}
                    options={{title: "Sign Up"}}/>
        </Stack.Navigator>
    );
};

export default AppAuthentication;