import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function App() {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Hello World</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 42,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    backgroundColor: 'red',
    color: 'yellow',
    textAlign: 'center',
  },
});

export default App;
