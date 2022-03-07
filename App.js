import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>PickUp</Text>
        <Image
            style={styles.tinyLogo}
            source={require('./bodia.jpg')}
        />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    tinyLogo: {
        width: '100%',
        height: 800,
    },
    logo: {
        width: 66,
        height: 58,
    },
});
