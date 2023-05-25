import { Animated, StyleSheet, View } from 'react-native'
import React, { useEffect } from 'react'

const SplashScreen = () => {
  const width = new Animated.Value(250);
  const height = new Animated.Value(250);

  useEffect(() => {
    Animated.timing(
      width, // The animated value to drive
      {
        toValue: 700, // Animate to opacity: 1 (opaque)
        duration: 4000, // Make it take a while
        useNativeDriver: false,
      },
    ).start(); // Starts the animation
    Animated.timing(
      height, // The animated value to drive
      {
        toValue: 2000, // Animate to opacity: 1 (opaque)
        duration: 5000, // Make it take a while
        useNativeDriver: false,
      },
    ).start(); //Starts the animation
  }, []);
  return (
    <View style={styles.container}>
     <Animated.Image
        source={{uri:"data:image/png;base64,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" }}
        style={{
          width: width,
          height: height,
          position: 'absolute',

        }}/>
    
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    container:{
          backgroundColor:"#fff",
          flex: 1,
          justifyContent:"center",
          alignItems:"center",
    },
})