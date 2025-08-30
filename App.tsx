import React from 'react';
import { StatusBar, StyleSheet, Text, View, Button, Image, TouchableWithoutFeedback, TouchableOpacity, TouchableNativeFeedback, Alert} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function App(){


  return(
    <SafeAreaProvider style={styles.container}>
    <Button 
      title="Touch Now" 
      onPress = {() => Alert.alert("Hello Mr. Perera ", "Jeevitham okke yengane ponu...", 
        [{text: "Yes", onPress: () => console.log("YES")},
         {text: "No", onPress: () => console.log("NO")}
        ])}
    />
  </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#607fbdff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 12,
    borderRadius: 5,
  },
  img:{
    width:200,
    height:200,
    borderRadius: 10,
    marginVertical: 12,
  }
})