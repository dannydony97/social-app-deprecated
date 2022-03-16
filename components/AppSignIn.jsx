import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Card, Checkbox, TextInput, Text } from "react-native-paper";
import theme from "../themes";

const AppSignIn = ({navigation}) => {

    const [emailAddress, setEmailAddress] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [keepSignedIn, setKeepSignedIn] = React.useState(false);

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
                    <Checkbox.Item
                        label="Keep me signed in"
                        status={keepSignedIn ? 'checked' : 'unchecked'}
                        onPress={() => setKeepSignedIn(!keepSignedIn)}
                    />
                    <View style={styles.line} />
                    <Button
                        mode='contained'
                        onPress={() => console.log('Button pressed')}>SIGN IN
                    </Button>
                    <Text style={styles.forgotText}>Forgot password?</Text>
                    <Text style={styles.joinText}>Don't have an account?</Text>
                    <Button
                        mode='outlined'
                        onPress={() => navigation.navigate("SignUp")}>SIGN UP
                    </Button>
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
    },
    line: {
        height: 1, 
        backgroundColor: 'gray',
        marginTop: 10,
        marginBottom: 10
    },
    forgotText: {
        textAlign: 'right',
        marginTop: 20,
        marginBottom: 5,
        color: theme.colors.primary,
        textDecorationLine: 'underline'
    },
    joinText: {
        fontWeight: 'bold',
        marginTop: 30,
        marginBottom: 10
    }
});

export default AppSignIn;