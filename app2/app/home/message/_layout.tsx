import { View, Text } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { FontAwesome } from '@expo/vector-icons';
const Messagelaoyout = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer screenOptions={{
                drawerStyle: { backgroundColor: "red",width:200 },
                drawerType:"slide",
                overlayColor:"black"
            }} >
                <Drawer.Screen
                    name="index"
                    options={{
                        // drawerItemStyle: { },
                        drawerLabelStyle: { fontSize: 20 },
                        drawerLabel: "Home",
                        // drawerActiveTintColor:"tomato",
                        drawerType: "slide",
                        drawerActiveBackgroundColor: "tomato",
                        drawerActiveTintColor: "white",
                        drawerInactiveTintColor: "black",
                        drawerAllowFontScaling: true,
                        drawerContentStyle: { backgroundColor: "blue" },
                        drawerContentContainerStyle: { backgroundColor: "green" },
                        // drawerContentOptions: { activeTintColor: "red" },
                        drawerPosition: "right",
                        drawerStatusBarAnimation: "slide",
                        drawerItemStyle:{
                            borderColor:"white",
                            borderWidth:2,
                            width:150
                        },
                        drawerIcon: ({ color }) => <FontAwesome size={28} name="envelope-open-o" color={color} />,
                        title: "Messages"
                    }}
                />
                <Drawer.Screen
                    name="messageRoom"
                    options={{
                        drawerIcon: ({ color }) => <FontAwesome size={28} name="hand-rock-o" color={color} />,
                        title: "Message Room"
                    }}
                />
            </Drawer>

        </GestureHandlerRootView>
    )
}

export default Messagelaoyout