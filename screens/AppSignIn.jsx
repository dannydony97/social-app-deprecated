import React from "react";
import {
  Keyboard,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import { Button, Checkbox, TextInput, Text } from "react-native-paper";
import theme from "../common/themes";

const AppSignIn = ({ navigation }) => {
  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [keepSignedIn, setKeepSignedIn] = React.useState(false);

  const [passwordVisible, setPasswordVisible] = React.useState(false);

  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.logInView}>
          <View style={styles.innerView}>
            <Text style={styles.title}>Social App</Text>
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
              right={
                <TextInput.Icon
                  name={passwordVisible ? "eye" : "eye-off"}
                  onPress={() => setPasswordVisible(!passwordVisible)}
                />
              }
              secureTextEntry={!passwordVisible}
            />
            <Checkbox.Item
              label="Keep me signed in"
              status={keepSignedIn ? "checked" : "unchecked"}
              onPress={() => setKeepSignedIn(!keepSignedIn)}
            />
            <View style={styles.line} />
            <Button
              mode="contained"
              onPress={() => console.log("Button pressed")}
            >
              SIGN IN
            </Button>
            <Text style={styles.forgotText}>Forgot password?</Text>
            <Text style={styles.joinText}>Don't have an account?</Text>
            <Button
              mode="outlined"
              onPress={() => navigation.navigate("SignUp")}
            >
              SIGN UP
            </Button>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  logInView: {
    alignItems: "center",
    flex: 1,
  },
  innerView: {
    width: "90%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 40,
    marginTop: 20,
    marginBottom: 20,
  },
  textInput: {
    marginBottom: 20,
  },
  line: {
    height: 1,
    backgroundColor: "gray",
    marginTop: 10,
    marginBottom: 10,
  },
  forgotText: {
    textAlign: "right",
    marginTop: 20,
    marginBottom: 5,
    color: theme.colors.primary,
    textDecorationLine: "underline",
  },
  joinText: {
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 10,
  },
});

export default AppSignIn;
