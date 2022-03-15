import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import AppLogIn from "./AppLogIn";
import { useTheme } from "react-native-paper";

const Stack = createStackNavigator();

const AppAuthentication = () => {

    const { colors } = useTheme();

    return (
        <Stack.Navigator>
                <Stack.Screen 
                    name="Log in" 
                    component={AppLogIn}
                    options={{
                        headerStyle: {
                            backgroundColor: colors.primary
                        },
                        headerTitleStyle: {
                            color: colors.headerText
                        }
                    }}
                />
        </Stack.Navigator>
    );
};

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
    }
});

export default AppAuthentication;