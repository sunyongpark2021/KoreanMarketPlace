import { Text, View, Image, StyleSheet, ImageBackground } from "react-native";
import { useSelector } from "react-redux";

function CartView() {
  const cartItems = useSelector((state) => state.cartList.inCart);
  return (
    <ImageBackground
      source={require("../assets/images/backgroundImage.png")}
      resizeMode="cover"
      style={styles.rootScreen}
      imageStyle={styles.backgroundImage}
    >
      <View>
        <Text>CartView info screen</Text>
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <View key={index}>
              <Text>{item.id}</Text>
              <Image source={{ uri: item.imageUrl }} style={styles.image} />
            </View>
          ))
        ) : (
          <Text>Your cart is empty.</Text>
        )}
      </View>
    </ImageBackground>
  );
}

export default CartView;

const styles = StyleSheet.create({
  image: {
    width: 100, // Set the desired width
    height: 100, // Set the desired height
  },
  backgroundImage: {
    opacity: 0.55,
  },
  rootScreen: {
    flex: 1,
  },
});
