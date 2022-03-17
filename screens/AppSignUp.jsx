import React from "react"
import { Keyboard, StyleSheet, View, KeyboardAvoidingView, TouchableWithoutFeedback} from "react-native";
import { Card, Button, TextInput, HelperText } from "react-native-paper";
import DefaultDefines from "../common/DefaultDefines";

const AppSignUp = ({navigation}) => {

    const [userName, setUserName] = React.useState("");
    const [emailAddress, setEmailAddress] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [repeatPassword, setRepeatPassword] = React.useState("");

    const [passwordVisivle, setPasswordVisible] = React.useState(false);
    const [repeatPasswordVisible, setRepeatPasswordVisible] = React.useState(false);

    const [userNameMessage, setUserNameMessage] = React.useState("");
    const [emailAddressMessage, setEmailAddressMessage] = React.useState("");

    const [validPassword, setValidPassword] = React.useState(false);
    const [passwordMessage, setPasswordMessage] = React.useState("");

    const [repeatValidPassword, setRepeatValidPassword] = React.useState(false);
    const [repeatPasswordMessage, setRepeatPasswordMessage] = React.useState();

    const onPasswordTextChaned = (text) => {

        setPassword(text);

        if(text.length === 0) {
            setValidPassword(false);
            setPasswordMessage("Password cannot be empty!");
        }
        else if(text.length < DefaultDefines.passwordMinLength) {
            setValidPassword(false);
            setPasswordMessage("Password is too short!");
        } else {
            setValidPassword(true);
            setPasswordMessage("");
        }

        verifyMatchingPasswords(text, repeatPassword);
    };

    const onRepeatPasswordTextChanged = (text) => {

        setRepeatPassword(text);
        verifyMatchingPasswords(password, text);
    };

    const verifyMatchingPasswords = (password, repeatedPassword) => {

        if(!repeatPassword.length)
            return;

        if(password !== repeatedPassword) {
            setRepeatValidPassword(false);
            setRepeatPasswordMessage("Password does not match!");
        } else {
            setRepeatValidPassword(true);
            setRepeatPasswordMessage("Password matched!")
        }
    };

    const validateUserName = () => {

        return true;
    }

    const validateEmail = () => {

        if(!emailAddress.length) {
            setEmailAddressMessage("Email address cannot be empty");
            return false;
        }

        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailAddress)) {
            
            setEmailAddressMessage("");
            return true;
        }

        setEmailAddressMessage("Invalid email address format!");
        return false;
    }

    const onCreateAccountButtonPressed = () => {

        if(!validateUserName())
            return;

        if(!validateEmail())
            return;

        if(!validPassword || !repeatValidPassword)
            return;

        fetch("http://localhost:5000/create-account/", {
            method: 'POST',
            body: JSON.stringify({
                userName: userName,
                emailAddress: emailAddress,
                password: password
            })
        })
        .then((response) => response.json())
        .then((content) => {

        });

    };

    return (
        <KeyboardAvoidingView>
            <TouchableWithoutFeedback
                onPress={() => Keyboard.dismiss()}
            >
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
                <HelperText>{userNameMessage}</HelperText>
                <TextInput
                    style={styles.textInput}
                    mode="outlined"
                    label="Email Address"
                    value={emailAddress}
                    onChangeText={(text) => setEmailAddress(text)}
                />
                <HelperText type="error">{emailAddressMessage}</HelperText>
                <TextInput
                    style={styles.textInput}
                    mode="outlined"
                    label="Password"
                    value={password}
                    onChangeText={(text) => onPasswordTextChaned(text)}
                    right={<TextInput.Icon name={passwordVisivle ? "eye" : "eye-off" } onPress={() => setPasswordVisible(!passwordVisivle)}/>}
                    secureTextEntry={!passwordVisivle}
                />
                <HelperText type={!validPassword ? "error" : "info"}>{passwordMessage}</HelperText>
                <TextInput
                    style={styles.textInput}
                    mode="outlined"
                    label="Repeat password"
                    value={repeatPassword}
                    onChangeText={(text) => onRepeatPasswordTextChanged(text)}
                    right={<TextInput.Icon name={repeatPasswordVisible ? "eye" : "eye-off" } onPress={() => setRepeatPasswordVisible(!repeatPasswordVisible)}/>}
                    secureTextEntry={!repeatPasswordVisible}
                />
                <HelperText type={!repeatValidPassword ? "error" : "info"}>{repeatPasswordMessage}</HelperText>
                <View style={styles.line} />
                <Button
                    mode='outlined'
                    onPress={() => onCreateAccountButtonPressed()}>CREATE ACCOUNT
                </Button>
                </Card.Content>
            </Card>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
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
    textInput: {
        height: 45
    }
});

export default AppSignUp;