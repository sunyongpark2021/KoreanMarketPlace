
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableWithoutFeedback, TouchableOpacity,
TouchableHighlight, Alert, Dimensions, Button} from 'react-native';
import {useState} from 'react'

export default function App() {

  [color, setColor] = useState('yellow')

  const changeColor = (backgroundColor) => {
    if (backgroundColor === 'yellow') {
      setColor('dodgerblue')
    } else {
      setColor('yellow')
    }
  }
  // const showlogo = () => {
  //   <View style={styles.container}>
  //     return (

  //     )
  //   </View>>
  // }
  return (
    <SafeAreaView style={styles(color).container}>
      <Text>HIHIHHI</Text>
      <Button 
        onPress={() => changeColor(color)}
        title={'Click Me'}
        style={{
        backgroundColor: 'dodgerblue',
        width: '50%',
        height: 70
      }} />

      <Button 
        onPress={() => showlogo()}
        title={'Show Berry Logo'}
        style={{
        backgroundColor: 'green',
        width: '50%',
        height: 50
      }} />

    </SafeAreaView>
  );
}

const styles = (color) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
