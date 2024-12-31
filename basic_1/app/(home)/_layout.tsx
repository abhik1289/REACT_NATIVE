import { Stack } from 'expo-router';

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
        }
      }}/>
      <Stack.Screen name="explore" />
    </Stack>
  )
}