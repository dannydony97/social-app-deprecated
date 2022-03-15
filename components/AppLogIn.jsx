import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Card, Checkbox, TextInput } from "react-native-paper";

const AppLogIn = () => {

    const [emailAddress, setEmailAddress] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [keepSignedIn, setKeepSignedInt] = React.useState(false);

    return (
        <View style={styles.container}>
            <Card style={styles.card} >
                <Card.Title title="Social App" subtitle="Log In"/>
                <Card.Content>
                    <TextInput
                        style={styles.textInput}
                        mode="outlined"
                        label="Email address"
                        value={emailAddress}
                        onChangeText={(text) => setEmailAddress(text)}
                    />

                    <TextInput
                        style={styles.textInput}
                        mode="outlined"
                        label="Password"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry={true}
                    />

                    <Checkbox.IOS
                        label="Keep"
                        status={keepSignedIn ? 'checked' : 'unchecked'} 
                    />

                    <Button>Log in</Button>
                </Card.Content>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
    },
    card: {
        margin: '3%',
        width: '94%',
    },
    textInput: {
        marginBottom: 20
    }
});

export default AppLogIn;