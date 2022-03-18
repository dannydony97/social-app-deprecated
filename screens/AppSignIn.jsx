import React from "react";
import {
  Keyboard,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import { TextField, Checkbox, Button, Text } from "react-native-ui-lib";

const AppSignIn = ({ navigation }) => {
  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [keepSignedIn, setKeepSignedIn] = React.useState(false);

  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.logInView}>
          <View style={styles.innerView}>
            <Text text30 marginT-30 marginB-10>Social App</Text>
            <TextField
              text65
              placeholder="Email address"
              floatingPlaceholder
              value={emailAddress}
              onChangeText={(text) => setEmailAddress(text)}
            />
            <TextField
              text65
              placeholder="Password"
              floatingPlaceholder
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry
            />
            <Checkbox
              label="Keep me signed in"
              value={keepSignedIn}
              onValueChange={() => setKeepSignedIn(!keepSignedIn)}
            />
            <View style={styles.line} />
            <Button
              label="SIGN IN"
              enableShadow
              onPress={() => console.log("Button pressed")}
            />
            <Button
              style={styles.forgotTextButton}
              label="Forgot password?"
              link
            />
            <Text text80T marginT-10 marginB-10>Don't have an account?</Text>
            <Button
              label="SIGN UP"
              enableShadow
              outline
              outlineWidth={2}
              onPress={() => navigation.navigate("SignUp")}
            />
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
  textInput: {
    marginBottom: 20,
  },
  line: {
    height: 1,
    backgroundColor: "gray",
    marginTop: 15,
    marginBottom: 15,
  },
  forgotTextButton: { 
    marginTop: 10,
    marginLeft: "auto", 
    marginRight: 0
  },
  joinText: {
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 10,
  },
});

export default AppSignIn;
