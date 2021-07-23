import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeNavigator from "./HomeNavigator";
import CustomHeader from "../components/CustomHeader";
import { Text, View } from "react-native";
import { ChatRoom } from "../screens";
import ChatHeader from "../shared/ChatHeader";

const Stack = createStackNavigator();

const Home = () => (
  <View>
    <Text>Hello World</Text>
  </View>
);

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ChatRoom">
        <Stack.Screen
          options={{
            header: CustomHeader,
          }}
          name="Home"
          component={HomeNavigator}
        />
        <Stack.Screen
          name="ChatRoom"
          component={ChatRoom}
          options={{
            header: ChatHeader,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
