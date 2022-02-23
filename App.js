import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js bodialorem1   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium commodi delectus dolorum id ipsa. A consequatur distinctio dolores eos error excepturi in, laborum minus natus repellat repellendus sapiente vero voluptatem?  to start working on your app!</Text>
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
