import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: 'white'
        }
      }}
    >
      <Stack.Screen name="Home" />
      <Stack.Screen name="settings" />
    </Stack>
  )
}