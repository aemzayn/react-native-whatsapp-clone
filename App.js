import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, ActivityIndicator } from "react-native";
import { useFonts, Roboto_500Medium } from "@expo-google-fonts/roboto";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import HomeScreen from "./screens/HomeScreen";
import StatusScreen from "./screens/StatusScreen";
import { NavigationContainer } from "@react-navigation/native";
import CustomTabBar from "./components/CustomTabBar";
import CallScreen from "./screens/CallScreen";
import CameraScreen from "./screens/CameraScreen";

const Tab = createMaterialTopTabNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    "roboto-medium": Roboto_500Medium,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
        <Tab.Screen name="Camera" component={CameraScreen} />
        <Tab.Screen name="Chats" component={HomeScreen} />
        <Tab.Screen name="Status" component={StatusScreen} />
        <Tab.Screen name="Calls" component={CallScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
