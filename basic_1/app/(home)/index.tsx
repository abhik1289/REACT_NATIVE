import { Link, useNavigation } from 'expo-router';
import { Text, View, StyleSheet, TextInput, Image, Button } from 'react-native';

export default function Home({  }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
     <Text style={styles.text}>
      This is Home Screen
     </Text>
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
