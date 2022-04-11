//test1
import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import Animated, {
  withSpring,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

function Box() {
  const offset = useSharedValue(0);

  const defaultSpringStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateX: withSpring(offset.value * 255)}],
    };
  });

  const customSpringStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(offset.value * 255, {
            damping: 20,
            stiffness: 90,
          }),
        },
      ],
    };
  });

  return (
    <>
      <Animated.View style={[styles.box, defaultSpringStyles]} />
      <Animated.View style={[styles.box, customSpringStyles]} />
      <Button onPress={() => (offset.value = Math.random())} title="Move" />
    </>
  );
}

const App = () => {
  return (
    <View>
      <Box />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  box: {
    height: 50,
    width: 50,
    backgroundColor: 'blue',
  },
});
