import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome';
const Tabslayout = () => {
  return (
    <Tabs screenOptions={{
      // headerShown: false,
      tabBarActiveTintColor: 'tomato',
    }}>
      <Tabs.Screen options={{
        // headerShown: true,
        title: "Home",
        tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />
      }}
        name="index"
      />
      <Tabs.Screen options={{
        title: "Explore",
        tabBarIcon: ({ color }) => <FontAwesome size={28} name="search" color={color} />
      }}
        name="explore"
      />
      <Tabs.Screen options={{
        title: "Profile",
        tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />
      }}
        name="profile"
      />
      <Tabs.Screen options={{
        headerShown: false,
        title: "Messages",
        tabBarIcon: ({ color }) => <FontAwesome size={28} name="envelope" color={color} />
      }}
        name="message"
      />
    </Tabs>

  )
}

export default Tabslayout