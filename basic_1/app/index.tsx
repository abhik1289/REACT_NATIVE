import { View, Text, Button } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const MainPage = () => {
    const router = useRouter()
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

            <View style={{ width: 150 }}>
                <Button title="Go to Profile" onPress={() => router.push("/Profile")} />

            </View>
        </View>
    )
}

export default MainPage