import { Text, View, SafeAreaView, StyleSheet, Button } from "react-native";
import Card from "../components/ui/Card.js";
import shoppingList from "../assets/data/shoppingList.js";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../redux/CartEdit.js";
import { loadShoppingList } from "../redux/MarketReducer.js";
import { useEffect } from "react";

function Market() {
  useEffect(() => {
    initializeShoppingList(shoppingList);
  }, []); //[] makes it render only once in the beginning
  const shoppingItems = useSelector((state) => state.shoppingList.shoppingList);

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
  console.log(shoppingItems);
  return (
    <SafeAreaView>
      <View>
        {shoppingItems.length &&
          shoppingItems.map((item) => {
            return (
              <View style={styles.header}>
                <Card>
                  <Text>{item}</Text>
                </Card>
                <Button
                  title="Add to Cart"
                  onPress={() => handleAddToCart(item)} //putting () will invoke the function immediately. so () => is placed.
                />
                <Button
                  title="Delete from Cart"
                  onPress={() => handleDeleteFromCart(item)}
                />
              </View>
            );
          })}
      </View>
    </SafeAreaView>
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
});
