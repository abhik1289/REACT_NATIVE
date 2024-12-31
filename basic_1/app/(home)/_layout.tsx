import { Stack } from 'expo-router';
import { Alert, Button, Text } from "react-native"
export default function RootLayout() {
  return (
    <Stack

      screenOptions={{
        // title:"Home",
        // headerTintColor:"yellow",
        // headerShown: false,
        headerStyle: {
          backgroundColor: 'white'
        }
      }}
    >
      <Stack.Screen name="index" options={{
        title: "Home",
        headerTintColor: "blue",
        // headerShown: false,
        headerStyle: {
          backgroundColor: 'white'
        },
        headerRight: () => {
          return (
            <Button onPress={() => Alert.alert("Hi Bro !!")} title='He' />
          )
        }
      }} />
      <Stack.Screen name="explore" />
      <Stack.Screen name="model" options={{
        presentation:"modal"
      }} />
    </Stack>
  )
}