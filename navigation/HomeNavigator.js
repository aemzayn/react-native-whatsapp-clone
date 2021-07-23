import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import CustomTabBar from "../components/CustomTabBar";
import {
  CallScreen,
  CameraScreen,
  ChatsScreen,
  StatusScreen,
} from "../screens";

const Tab = createMaterialTopTabNavigator();

export default function HomeNavigator({ navigation }) {
  return (
    <Tab.Navigator initialRouteName="Chats" tabBar={CustomTabBar}>
      <Tab.Screen name="Camera" component={CameraScreen} />
      <Tab.Screen
        name="Chats"
        children={() => <ChatsScreen stackNavigation={navigation} />}
      />
      <Tab.Screen name="Status" component={StatusScreen} />
      <Tab.Screen name="Calls" component={CallScreen} />
    </Tab.Navigator>
  );
}
