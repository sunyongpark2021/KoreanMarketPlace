import { View, StyleSheet } from "react-native";

function MapFrame({ children }) {
  return <View style={styles.MapFrame}>{children}</View>;
}

export default MapFrame;

const styles = StyleSheet.create({
  MapFrame: {
    flex: 1,
    margin: 30,
    borderRadius: 10,
    borderColor: "grey",
    padding: 5,
    elevation: 4, //setting shadow for android
    shadowColor: "black", //shadow setting for IOS
    shadowOffset: { width: 0, height: 2 }, //shadow setting for IOS
    shadowRadius: 6, //shadow setting for IOS
    shadowOpacity: 0.25, //shadow setting for IOS
  },
});
