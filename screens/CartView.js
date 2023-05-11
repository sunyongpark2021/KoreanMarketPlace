import { Text, View } from "react-native";
import { useSelector } from "react-redux";

function CartView() {
  const listOfCart = useSelector((state) => state.cartList.inCart);
  return (
    <View>
      <Text>CartView info screen</Text>
      <Text>{listOfCart}</Text>
    </View>
  );
}

export default CartView;
