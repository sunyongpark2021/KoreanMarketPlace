import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import { useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import ChargeBerry from "./ChargeBerry";

import Market from "./Market";
import Account from "./Account";
import Main from "./Main";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#cccccc" },
        headerTintColor: "white",
        drawerContentStyle: { backgroundColor: "yellow" },
        drawerInactiveTintColor: "black",
        drawerActiveTintColor: "#351401",
        drawerActiveBackgroundColor: "#e4baa1",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={Main}
        options={{
          title: "Main Page",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="To Market"
        component={Market}
        options={{
          drawerIcon: ({ color, size }) => <Ionicons name="barcode" />,
        }}
      />
      <Drawer.Screen
        name="Account"
        component={Account}
        options={{
          drawerIcon: ({ color, size }) => <Ionicons name="bulb" />,
        }}
      />
      <Drawer.Screen
        name="Charge Berry"
        component={ChargeBerry}
        options={{
          drawerIcon: ({ color, size }) => <Ionicons name="ios-open" />,
        }}
      />
    </Drawer.Navigator>
  );
}

function LoggedInMain({ user, pw, ReturnToMainPage }) {
  const [chargeBerryPage, setChargeBerryPage] = useState(false);

  return chargeBerryPage ? (
    <ChargeBerry
      goBackToMain={setChargeBerryPage}
      toMainPage={ReturnToMainPage}
    />
  ) : (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Drawer"
          component={DrawNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="Market" component={Market} />
        <Stack.Screen name="ChargeBerry" component={ChargeBerry} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default LoggedInMain;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 10,
    alignItems: "center",
  },
  flextorow: {
    flexDirection: "row",
  },
  image: {
    width: 39.88,
    height: 45.66,
    margin: 3,
    alignItems: "flex-start",
  },
  imageclick: {
    width: 39.88,
    height: 44.66,
    marginTop: 1,
    alignItems: "flex-start",
  },
  bolded: {
    fontWeight: "bold",
    fontSize: 20,
    alignItems: "flex-start",
    color: "#cccccc",
  },
  textInput: {
    borderWidth: 2,
    backgroundColor: "#ffffff",
    borderRadius: 5,
    width: "66%",
    padding: 5,
    marginTop: 5,
    marginBottom: 15,
  },
  header: {
    flexDirection: "row",
  },
  boldText: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 17,
  },
  flex1: {
    flex: 1,
  },
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.55,
  },
});
