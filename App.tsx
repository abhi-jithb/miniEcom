import React from 'react';
import { StatusBar, StyleSheet, Text, View, Button, Image, TouchableWithoutFeedback, TouchableOpacity, TouchableNativeFeedback} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function App(){
  const handlePress = () => {
    console.log("shop now pressed");
  }

  return(
    <SafeAreaProvider>
      <View style={styles.container}>
        <Text style={styles.text}  numberOfLines={1}>Welcome to our store! Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, ipsam. Ex dignissimos porro, provident consectetur, asperiores vel voluptatum minima ab velit, similique deserunt tempore. Rem magni iste velit eos facere.</Text>
        <Button title="Shop Now" onPress={handlePress} />
        {/* <Image style={styles.img} source={require('./assets/me.jpg')}/> */}

         <TouchableOpacity onPress={() => {console.log("Tapped")}}>
         <Image
         blurRadius={10}
         fadeDuration={1000}
         source={{
           uri: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQI8bWuVba85BS31KFo7umUVg02bcYTvvs4zvfpkxt9cqGJx345uKJEw2pVHMGv5f5xz19r6PmjLeOJ2gFoD4g-fU7hHjPvPcR-OwVKhSDBYfXS5-yV8-f-',
           width: 200,
           height: 200,
         }}/>
         </TouchableOpacity>


        <TouchableNativeFeedback onPress={() => {console.log("Native Effect")}}>
          <View style={{width:100, height:50, backgroundColor:'dodgerblue'}}>
          </View>
        </TouchableNativeFeedback>

         </View>
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