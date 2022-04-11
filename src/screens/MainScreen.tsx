import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TestScreen from 'compons/TestScreen';

const MainScreen = () => {
  return (
    <View>
      <Text>MainScreen</Text>
      <TestScreen />
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({});
