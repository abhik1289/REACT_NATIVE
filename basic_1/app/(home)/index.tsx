import { Link, Stack, useNavigation } from 'expo-router';
import { Text, View, StyleSheet, TextInput, Image, Button } from 'react-native';

export default function Home({ }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>

    
      <Text style={styles.text}>This is Home Screen</Text>
      {/* way 1 */}
      {/* <Link style={{ fontSize: 20,color:"white",marginVertical:10 }} href="/explore?name=Avik&surname=Patra">Go to explore</Link> */}
      {/* way 2 send data */}
      <Link style={{ fontSize: 20, color: "white", marginVertical: 10 }} 
      href={{
        pathname: '/explore',
        params:{
          name:"Avik",
          surname:"Patra"
        }
      }}
      >Go to explore</Link>
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
