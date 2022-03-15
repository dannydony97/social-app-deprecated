import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import AppLogIn from "./AppLogIn";

const Stack = createStackNavigator();

const AppAuthentication = () => {

    return (
        <Stack.Navigator>
                <Stack.Screen name="Log in" component={AppLogIn} options={ }></Stack.Screen>
        </Stack.Navigator>
    );
};

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
    }
});

export default AppAuthentication;