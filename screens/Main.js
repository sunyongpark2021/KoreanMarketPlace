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
import MapView from "react-native-maps";

import ChargeBerry from "./ChargeBerry";
import Font1 from "../components/ui/Font1.js";
import Card from "../components/ui/Card.js";
import MapFrame from "../components/ui/MapFrame.js";

function Main({ user, pw, ReturnToMainPage, navigation }) {
  return (
    <ImageBackground
      source={require("../assets/images/backgroundImage.png")}
      resizeMode="cover"
      style={styles.rootScreen}
      imageStyle={styles.backgroundImage}
    >
      <SafeAreaView style={styles.flex1}>
        <Button
          title="GoToChargeBerry"
          onPress={() => navigation.navigate("ChargeBerry")}
        />
        <View style={styles.rootContainer}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => ReturnToMainPage()}>
              <Image
                style={styles.image}
                source={require("../assets/images/berry1.png")}
              />
            </TouchableOpacity>

            <TextInput
              style={styles.textInput}
              placeholder="🔍 Search for anything "
            />
            <View
              style={[
                {
                  width: "auto",
                  height: "68%",
                  marginTop: 5,
                  marginHorizontal: 2,
                  borderRadius: 7,
                  borderWidth: 2,
                  backgroundColor: "#5f9678",
                },
              ]}
            >
              <Button title="Search" color="#3cb371" />
            </View>
          </View>
          <View style={styles.flextorow}>
            <Font1 style={styles.bolded}>Welcome Back User: {user}</Font1>
          </View>
          <Card>
            <Text>
              New users Promotion: Buy your Berry by 12/31 and get{" "}
              <Text style={styles.boldText}>50%</Text> OFF on your next
              purchase. {"\n"}
              Charge your Berry now ➡️{"    "}
              <TouchableOpacity
                onPress={() => navigation.navigate("ChargeBerry")}
              >
                <Image
                  style={styles.imageclick}
                  source={require("../assets/images/berry1.png")}
                />
              </TouchableOpacity>
            </Text>
          </Card>
        </View>
        <MapFrame>
          <MapView
            style={{ flex: 1 }}
            initialRegion={{
              latitude: 21.4666648,
              longitude: -157.9833294,
              latitudeDelta: 0.922,
              longitudeDelta: 0.421,
            }}
          />
        </MapFrame>
      </SafeAreaView>
    </ImageBackground>
  );
}

export default Main;

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
