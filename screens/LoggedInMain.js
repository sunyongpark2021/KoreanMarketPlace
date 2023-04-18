import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

import Font1 from "../components/ui/Font1.js";
import Card from "../components/ui/Card.js";

function LoggedInMain({ id, pw }) {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setLogIn(false)}>
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
              width: "20%",
              height: "68%",
              marginTop: 5,
              marginHorizontal: 2,
              borderRadius: 7,
              borderWidth: 2,
              backgroundColor: "#3cb371",
            },
          ]}
        >
          <Button title="Search" color="#3cb371" />
        </View>
      </View>
      <View style={styles.flextorow}>
        <Font1 style={styles.bolded}>Welcome Back User: {id}</Font1>
      </View>
      <Card>
        <Text>
          New users Promotion: Buy your Berry by 12/31 and get{" "}
          <Text style={styles.boldText}>50%</Text> OFF on your next purchase.{" "}
          {"\n"}
          Charge your Berry now ➡️{"    "}
          <TouchableOpacity>
            <Image //how to move the logo downer?
              style={styles.imageclick}
              source={require("../assets/images/berry1.png")}
              onPress // upon onpress, direct user to charging Berry page
            />
          </TouchableOpacity>
        </Text>
      </Card>
    </View>
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
});
