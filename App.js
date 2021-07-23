import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, ActivityIndicator, StatusBar } from "react-native";
import { useFonts, Roboto_500Medium } from "@expo-google-fonts/roboto";
import { SafeAreaProvider } from "react-native-safe-area-context";
import RootNavigator from "./navigation";
import theme from "./constants/theme";

export default function App() {
  let [fontsLoaded] = useFonts({
    "roboto-medium": Roboto_500Medium,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <SafeAreaProvider>
      <RootNavigator />
      <StatusBar backgroundColor={theme.colors.tealGreenDark} />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});
