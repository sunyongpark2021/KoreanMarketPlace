import { Text } from "react-native";
import {
  Button,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";

import HeaderCard from "../components/ui/HeaderCard.js";

function ChargeBerry({ goBackToMain, toMainPage }) {
  const handlePress = () => {
    goBackToMain(false);
  };

  return (
    <ImageBackground
      source={require("../assets/images/backgroundImage.png")}
      resizeMode="cover"
      style={styles.rootScreen}
      imageStyle={styles.backgroundImage}
    >
      <View style={styles.header}>
        <Button
          onPress={handlePress}
          title="🔙"
          color="#b1b9fc"
          titleStyle={styles.goBackButton}
        />
        <HeaderCard>
          <Text>Hello</Text>
        </HeaderCard>
        <TouchableOpacity onPress={() => toMainPage()}>
          <Image
            style={styles.image}
            source={require("../assets/images/berry1.png")}
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

export default ChargeBerry;

const styles = StyleSheet.create({
  goBackButton: {
    fontSize: 74,
  },
  header: {
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-between",
  },
  image: {
    width: 49.88,
    height: 55.66,
  },
  backgroundImage: {
    opacity: 0.55,
  },
  rootScreen: {
    flex: 1,
  },
});
