import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button, TextInput } from "react-native";
import { useState } from "react";
import berryLogo from "./assets/berry.png";
import { Padding } from "@mui/icons-material";

export default function App() {
  return (
    <>
      <StatusBar style="white" />
      <View style={styles.appContainer}>
        <Image style={styles.image} source={require("./assets/berry1.png")} />
        <Image
          style={styles.screenbars}
          source={require("./assets/screenbars.png")}
        />
        <View
          style={{ position: "absolute", top: 400, right: 70, padding: 10 }}
        >
          <Text style={{ color: "#B1B9FC", fontSize: 25, marginBottom: 8 }}>
            {"         "}
            SIGN IN{" "}
          </Text>

          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Email or Phone Number
          </Text>
          <TextInput style={styles.textInput} placeholder="ID" />
          <TextInput style={styles.textInput} placeholder="PASSWORD" />
          <View style={{ marginTop: 20, marginBottom: 10 }}>
            <Button title="LOGIN" color="#b1b9fc" />
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#e4d0ff",
  },
  image: {
    width: 139.88,
    height: 144.66,
    margin: 20,
  },
  screenbars: {
    width: 310,
    height: 460,
  },
  textInput: {
    borderWidth: 1,
    backgroundColor: "#ffffff",
    borderRadius: 6,
    width: "100%",
    padding: 5,
    marginTop: 10,
    marginBottom: 15,
  },
});
