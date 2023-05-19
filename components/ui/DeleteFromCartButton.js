import { View, Text, Pressable, StyleSheet } from "react-native";

function DeleteFromCartButton({ children, onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={
          ({ pressed }) =>
            pressed
              ? [styles.buttonInnerContainer, styles.pressed] //actvates both styles when pressed
              : styles.buttonInnerContainer //Activate onlly this style when not pressed
        }
        onPress={onPress} // When pressing onPress at StartGameScree, activates function {onPress}
        android_ripple={{ color: "white" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default DeleteFromCartButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 1,
    margin: 1,
    overflow: "hidden",
    padding: 0,
    backgroundColor: "white",
  },
  buttonInnerContainer: {
    backgroundColor: "red",
    paddingVertical: 1,
    paddingHorizontal: 1,
    elevation: 2,
  },
  buttonText: {
    color: "black",
    textAlign: "center",
    padding: 1,
    fontWeight: "bold",
    fontSize: 15,
  },
  pressed: {
    opacity: 0.75, //opacity 0~1
  },
});
