import React from "react";
import {
  Keyboard,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import { TextField, Text, Button } from "react-native-ui-lib";
import DefaultDefines from "../common/DefaultDefines";
import TextHelper from "../components/TextHelper";

const AppSignUp = ({ navigation }) => {
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

    if (text.length === 0) {
      setValidPassword(false);
      setPasswordMessage("Password cannot be empty!");
    } else if (text.length < DefaultDefines.passwordMinLength) {
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
    if (!repeatPassword.length) return;

    if (password !== repeatedPassword) {
      setRepeatValidPassword(false);
      setRepeatPasswordMessage("Password does not match!");
    } else {
      setRepeatValidPassword(true);
      setRepeatPasswordMessage("Password matched!");
    }
  };

  const validateUserName = () => {
    return true;
  };

  const validateEmail = () => {
    if (!emailAddress.length) {
      setEmailAddressMessage("Email address cannot be empty");
      return false;
    }

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailAddress)) {
      setEmailAddressMessage("");
      return true;
    }

    setEmailAddressMessage("Invalid email address format!");
    return false;
  };

  const onCreateAccountButtonPressed = () => {
    if (!validateUserName()) return;

    if (!validateEmail()) return;

    if (!validPassword || !repeatValidPassword) return;

    fetch("http://localhost:5000/create-account/", {
      method: "POST",
      body: JSON.stringify({
        userName: userName,
        emailAddress: emailAddress,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((content) => {});
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.signUpView}>
          <View style={styles.innerView}>
            <Text style={styles.title}>Let's get started!</Text>
            <Text style={styles.subtitle}>Create an account to social app</Text>
            <TextField
              fieldStyle={{backgroundColor: 'orange'}}
              placeholder="User name"
              floatingPlaceholder
              value={userName}
              onChangeText={(text) => setUserName(text)}
            />
            <TextHelper>{userNameMessage}</TextHelper>
            <TextField
              placeholder="Email Address"
              floatingPlaceholder
              value={emailAddress}
              onChangeText={(text) => setEmailAddress(text)}
            />
            <Text type="error">{emailAddressMessage}</Text>
            <TextField
              placeholder="Password"
              floatingPlaceholder
              value={password}
              onChangeText={(text) => onPasswordTextChaned(text)}
              secureTextEntry={!passwordVisivle}
            />
            <Text type={!validPassword ? "error" : "info"}>{passwordMessage}</Text>
            <TextField
              placeholder="Repeat password"
              floatingPlaceholder
              value={repeatPassword}
              onChangeText={(text) => onRepeatPasswordTextChanged(text)}
              secureTextEntry={!repeatPasswordVisible}
            />
            <Text type={!repeatValidPassword ? "error" : "info"}>{repeatPasswordMessage}</Text>
            <View style={styles.line} />
            <Button
              label="CREATE ACCOUNT"
              onPress={() => onCreateAccountButtonPressed()}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  signUpView: {
    alignItems: "center",
    flex: 1,
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 20,
  },
  subtitle: {
    marginBottom: 30,
  },
  innerView: {
    width: "90%",
  },
  line: {
    height: 1,
    backgroundColor: "gray",
    marginTop: 20,
    marginBottom: 10,
  },
  textInput: {
    height: 45,
  },
});

export default AppSignUp;
