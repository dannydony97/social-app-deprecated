import React from "react"
import { StyleSheet, View } from "react-native";
import { Card, Text, TextInput } from "react-native-paper";

const AppSignUp = ({navigation}) => {

    const [userName, setUserName] = React.useState("");
    const [emailAddress, setEmailAddress] = React.useState("");
    const [phoneNumber, setPhoneNumber] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [repeatPassword, setRepeatPassword] = React.useState("");

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
                        label="Phone number"
                        value={phoneNumber}
                        onChangeText={(text) => setPhoneNumber(text)}
                />
                <TextInput
                        style={styles.textInput}
                        mode="outlined"
                        label="Password"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                />
                <TextInput
                        style={styles.textInput}
                        mode="outlined"
                        label="Repeat password"
                        value={repeatPassword}
                        onChangeText={(text) => setRepeatPassword(text)}
                />
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
});

export default AppSignUp;