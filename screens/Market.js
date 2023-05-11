import { Text, View, SafeAreaView, StyleSheet, Button } from "react-native";
import Card from "../components/ui/Card.js";
import shoppingList from "../assets/data/shoppingList.js";

import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../redux/CartEdit.js";

function Market() {
  function handleAddToCart(itemList) {
    dispatch(addToCart({ id: itemList }));
  }
  function handleDeleteFromCart(itemList) {
    dispatch(deleteFromCart({ id: itemList }));
  }
  const dispatch = useDispatch();
  return (
    <SafeAreaView>
      <View>
        <View style={styles.header}>
          <Card>
            <Text>{shoppingList[0]}</Text>
          </Card>
          <Button
            title="Add to Cart"
            onPress={() => handleAddToCart(shoppingList[0])} //putting () will invoke the function immediately. so () => is placed.
          />
          <Button
            title="Delete from Cart"
            onPress={() => handleDeleteFromCart(shoppingList[0])}
          />
        </View>
        <View style={styles.header}>
          <Card>
            <Text>{shoppingList[1]}</Text>
          </Card>
          <Button
            title="Add to Cart"
            onPress={() => handleAddToCart(shoppingList[1])} //putting () will invoke the function immediately. so () => is placed.
          />
          <Button
            title="Delete from Cart"
            onPress={() => handleDeleteFromCart(shoppingList[1])}
          />
        </View>
        <View style={styles.header}>
          <Card>
            <Text>{shoppingList[2]}</Text>
          </Card>
          <Button
            title="Add to Cart"
            onPress={() => handleAddToCart(shoppingList[2])} //putting () will invoke the function immediately. so () => is placed.
          />
          <Button
            title="Delete from Cart"
            onPress={() => handleDeleteFromCart(shoppingList[2])}
          />
        </View>
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
