import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Alert, View, Button } from 'react-native';

export default function App() {
  let x = 1;
  return (
    <View style={styles.container}>
      <Button
        title="Click me"
        onPress={() => Alert.prompt('title', 'subtitle', (text) => console.log(text))}
        accessibilityLabel="Learn more about this purple button"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
