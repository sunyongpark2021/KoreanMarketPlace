import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Button,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";
import Card1 from "../components/ui/Card1.js";
import shoppingList from "../assets/data/shoppingList.js";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../redux/CartEdit.js";
import { loadShoppingList } from "../redux/MarketReducer.js";
import { useEffect, useState } from "react";
import AddToCartButton from "../components/ui/AddToCartButton.js";
import DeleteFromCartButton from "../components/ui/DeleteFromCartButton.js";
function Market() {
  const cartItems = useSelector((state) => state.cartList.inCart);
  console.log(cartItems);
  // const [addedToCartState, setAddedToCartState] = useState(false);
  useEffect(() => {
    initializeShoppingList(shoppingList);
  }, []); //[] makes it render only once in the beginning
  const shoppingItems = useSelector((state) => state.shopList.inMarket);

  function initializeShoppingList(itemList) {
    dispatch(loadShoppingList({ list: itemList }));
  }
  function handleAddToCart(itemList) {
    dispatch(addToCart({ id: itemList })); //id = shoppingList[0]
  }
  function handleDeleteFromCart(itemList) {
    dispatch(deleteFromCart({ id: itemList }));
  }
  const dispatch = useDispatch();
  return (
    <ImageBackground
      source={require("../assets/images/backgroundImage.png")}
      resizeMode="cover"
      style={styles.rootScreen}
      imageStyle={styles.backgroundImage}
    >
      <ScrollView style={styles.rootContainer}>
        <View style={styles.rootContainer}>
          {shoppingItems.length
            ? shoppingItems.map((item, index) => {
                const itemAddedToCart = cartItems.includes(item);
                return (
                  <View style={styles.box}>
                    <View style={styles.header} key={index}>
                      <Image
                        source={{ uri: item.imageUrl }}
                        style={styles.image}
                      />
                      <Card1
                        id={item.id}
                        name={item.name}
                        description={item.description}
                        price={item.price}
                        location={item.location}
                      ></Card1>
                    </View>
                    {!itemAddedToCart ? (
                      <View style={[styles.buttonRadius]}>
                        <AddToCartButton
                          onPress={() => [handleAddToCart(item)]}
                        >
                          ADD TO CART
                        </AddToCartButton>
                      </View>
                    ) : (
                      <View
                        style={[styles.buttonRadius, { borderColor: "red" }]}
                      >
                        <DeleteFromCartButton
                          onPress={() => handleDeleteFromCart(item.id)}
                        >
                          DELETE FROM CART
                        </DeleteFromCartButton>
                      </View>
                    )}
                  </View>
                );
              })
            : null}
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

export default Market;

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
  },
  image: {
    width: 125, // Set the desired width
    height: 125, // Set the desired height
  },
  rootContainer: {
    marginVertical: 7,
    marginHorizontal: 3,

    flex: 1,
  },
  cardContainer: {
    margin: 10,
    padding: 10,
  },
  box: {
    borderRadius: 10,
    borderColor: "grey",
    marginVertical: 5,
    borderWidth: 3,
    flex: 1,
    padding: 5,
  },
  buttonRadius: {
    borderRadius: 3,
    borderColor: "#e07116",
    marginVertical: 3,
    borderWidth: 7,
  },
  backgroundImage: {
    opacity: 0.55,
  },
  rootScreen: {
    flex: 1,
  },
});
