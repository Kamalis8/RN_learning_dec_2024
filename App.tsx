
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import GoogleMap from './src/screens/google_map';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <GoogleMap />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
