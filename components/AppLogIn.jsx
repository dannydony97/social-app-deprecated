import { StyleSheet } from "react-native";
import { Button, Card, Text, Title } from "react-native-paper";

const AppLogIn = () => {
    return (
        <Card style={styles.cardStyle} >
            <Card.Title title="Social App" subtitle="Log In"/>
            <Card.Content>
                <Button>Press me</Button>
            </Card.Content>
        </Card>
    );
};

const styles = StyleSheet.create({
    cardStyle: {
        width: '95%',
    }
});

export default AppLogIn;