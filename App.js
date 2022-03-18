import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native-ui-lib";
import AppAuthentication from "./screens/AppAuthentication";

export default function App() {
  return (
    <View flex>
      <NavigationContainer>
        <AppAuthentication />
      </NavigationContainer>

      <StatusBar style="auto" />
    </View>
  );
}
