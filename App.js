import { StyleSheet, SafeAreaView } from "react-native";

// import LoggedIn from "./screens/LoggedIn";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import LogInPage from "./screens/LogInPage";

export default function App() {
  let screen = <LogInPage />;
  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>;
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
