import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'

const MessageScreen = ({ }) => {
    // const navigation = useNavigation()
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text>
                <View style={{
                    width: 200
                }}>
                    {/* <Button title="Go to Message Room" onPress={() => navigation.toggleDrawer()} /> */}
                </View>
            </Text>
        </View>
    )
}

export default MessageScreen