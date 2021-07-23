import React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import theme from "../constants/theme";

export default function Layout({ children }) {
  return (
    <SafeAreaView style={styles.androidSafeArea}>
      <StatusBar backgroundColor={theme.colors.tealGreenDark} />
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  androidSafeArea: {
    flex: 1,
    backgroundColor: "#fff",
    position: "relative",
  },
});
