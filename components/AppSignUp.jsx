import React from "react"
import { StyleSheet, View } from "react-native";
import { Card, Button, TextInput } from "react-native-paper";

const AppSignUp = ({navigation}) => {

    const [userName, setUserName] = React.useState("");
    const [emailAddress, setEmailAddress] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [repeatPassword, setRepeatPassword] = React.useState("");

    const [passwordVisivle, setPasswordVisible] = React.useState(false);
    const [repeatPasswordVisible, setRepeatPasswordVisible] = React.useState(false);

    const [validPassword, setValidPassword] = React.useState(false);

    const onCreateAccountButtonPressed = () => {

    };

    return (
        <View style={styles.container}>
            <Card style={styles.card}>
                <Card.Title title="Let's get started!" subtitle="Create an account to social app"/>
                <Card.Content>
                <TextInput
                    style={styles.textInput}
                    mode="outlined"
                    label="User name"
                    value={userName}
                    onChangeText={(text) => setUserName(text)}
                />
                <TextInput
                    style={styles.textInput}
                    mode="outlined"
                    label="Email Address"
                    value={emailAddress}
                    onChangeText={(text) => setEmailAddress(text)}
                />
                <TextInput
                    style={styles.textInput}
                    mode="outlined"
                    label="Password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    right={<TextInput.Icon name={passwordVisivle ? "eye" : "eye-off" } onPress={() => setPasswordVisible(!passwordVisivle)}/>}
                    secureTextEntry={!passwordVisivle}
                />
                <TextInput
                    style={styles.textInput}
                    mode="outlined"
                    label="Repeat password"
                    value={repeatPassword}
                    onChangeText={(text) => setRepeatPassword(text)}
                    right={<TextInput.Icon name={repeatPasswordVisible ? "eye" : "eye-off" } onPress={() => setRepeatPasswordVisible(!repeatPasswordVisible)}/>}
                    secureTextEntry={!repeatPasswordVisible}
                />
                <View style={styles.line} />
                <Button
                    mode='outlined'
                    onPress={() => onCreateAccountButtonPressed}>CREATE ACCOUNT
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
    line: {
        height: 1, 
        backgroundColor: 'gray',
        marginTop: 20,
        marginBottom: 10
    },
});

export default AppSignUp;