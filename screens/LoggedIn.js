import { Text } from "react-native";

function LoggedIn(props) {
  console.log("you are loggedin", "ID entered:", props.id, props.pw);

  return (
    <>
      <Text>Hello you areasdasd logged in</Text>
      <Text>ID Entered is: {props.id}</Text>
      <Text>Password Entered is: {props.pw}</Text>
    </>
  );
}

export default LoggedIn;
