import React from 'react';
import { Text, StyleSheet } from 'react-native';

const ComponentScreen= (props) => {
  return <Text style={styles.text}>This is compnents Screen</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});
 
export default ComponentScreen;
