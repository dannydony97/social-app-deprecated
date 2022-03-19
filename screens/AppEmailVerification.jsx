import { Button, Text, View } from "react-native-ui-lib";

const AppEmailVerification = ({navigation, route}) => {

    return (
        <View style={{ flex: 1 }}>
            <Text text40R>An email has been sent to {route.params.emailAddress}</Text>
        </View>
    );
};

export default AppEmailVerification;