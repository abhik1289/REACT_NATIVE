import { Link } from 'expo-router';
import { Text, View, StyleSheet, TextInput, Image } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home screen</Text>
      <TextInput style={styles.textInput} defaultValue='Abhik' />
      <Image source={{ uri:'https://reactnative.dev/docs/assets/p_cat2.png'}} />
      {/* <Link to="settings">Settings</Link> */}
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderColor: 'white',
    borderWidth: 1,
    width: 200,
    borderRadius: 5,
    marginVertical: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
});
