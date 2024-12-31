import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Stack, useRouter } from 'expo-router'
import { useSearchParams } from 'expo-router/build/hooks';

const explore = () => {
  const router = useRouter();
  const params = useSearchParams();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "white" }}>
      <Stack.Screen name="explore" options={{ title: "Explore",headerBackButtonMenuEnabled:true }}  />
      <Text>
        <Pressable onPress={() => router.back()}>
          <View style={{ backgroundColor: "blue", paddingHorizontal: 10, paddingVertical: 10, width: 150, borderRadius: 10 }}>
            <Text style={{ color: "white", textAlign: "center" }}>Go Back</Text>

          </View>
        </Pressable>
        <Text>
          Hello {params.get('name')} {params.get('surname')}
        </Text>
      </Text>
    </View>
  )
}

export default explore