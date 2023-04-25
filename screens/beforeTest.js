// import { StatusBar } from "expo-status-bar";
// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   Button,
//   TextInput,
//   ImageBackground,
// } from "react-native";
// import { useState } from "react";

// import LoggedIn from "./screens/LoggedIn";
// import { useFonts } from "expo-font";
// import AppLoading from "expo-app-loading";
// import ChargeBerry from "./screens/ChargeBerry";
// import LogInPage from "./screens/LogInPage";

// export default function App() {
//   [logIn, setLogIn] = useState(false);
//   [idEnteredText, setIdEnteredText] = useState();
//   [pwEnteredText, setPwEnteredText] = useState();
//   [chargeBerryPage, setChargeBerryPage] = useState(false);

//   let screen = <LogInPage />;
//   const [fontsLoaded] = useFonts({
//     "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
//     "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
//   });
//   if (!fontsLoaded) {
//     return <AppLoading />;
//   }

//   function goToLoggedInScreen() {
//     setLogIn(true);
//   }
//   function idEntered(enteredText) {
//     setIdEnteredText(enteredText);
//   }
//   function pwEntered(enteredText) {
//     setPwEnteredText(enteredText);
//   }

//   if (logIn) {
//     return <LoggedIn id={idEnteredText} pw={pwEnteredText} />;
//   }
//   if (chargeBerryPage) {
//     return <ChargeBerry />;
//   }
//   return (
//     <>
//       <StatusBar style="white" />
//       <View style={styles.appContainer}>
//         <Image
//           style={styles.image}
//           source={require("./assets/images/berry1.png")}
//         />
//         <Image
//           style={styles.screenbars}
//           source={require("./assets/screenbars.png")}
//         />
//         <View
//           style={{ position: "absolute", top: 400, right: 70, padding: 10 }}
//         >
//           <Text style={{ color: "#B1B9FC", fontSize: 25, marginBottom: 8 }}>
//             {"         "}
//             SIGN IN{" "}
//           </Text>

//           <Text style={{ fontSize: 20, fontWeight: "bold" }}>
//             Email or Phone Number
//           </Text>
//           <TextInput
//             onChangeText={idEntered}
//             style={styles.textInput}
//             placeholder="ID"
//           />
//           <TextInput
//             onChangeText={pwEntered}
//             style={styles.textInput}
//             placeholder="PASSWORD"
//           />
//           <View style={{ marginTop: 20, marginBottom: 10 }}>
//             <Button
//               onPress={goToLoggedInScreen}
//               title="LOGIN"
//               color="#b1b9fc"
//             />
//           </View>
//         </View>
//       </View>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   rootScreen: {
//     flex: 1,
//   },
//   backgroundImage: {
//     opacity: 0.15,
//   },
//   appContainer: {
//     flex: 1,
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     // backgroundColor: "#e4d0ff",
//   },
//   image: {
//     width: 139.88,
//     height: 144.66,
//     margin: 20,
//   },
//   screenbars: {
//     width: 310,
//     height: 460,
//   },
//   textInput: {
//     borderWidth: 1,
//     backgroundColor: "#ffffff",
//     borderRadius: 6,
//     width: "100%",
//     padding: 5,
//     marginTop: 10,
//     marginBottom: 15,
//   },
// });
