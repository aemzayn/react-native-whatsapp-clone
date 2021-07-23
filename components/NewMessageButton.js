import React from "react";
import { Pressable, StyleSheet } from "react-native";
import theme from "../constants/theme";
import globalStyle from "../style/globalStyle";
import { MaterialIcons } from "@expo/vector-icons";

export default function NewMessageButton() {
  return (
    <Pressable style={[styles.button, globalStyle.rowCenter]}>
      <MaterialIcons name="chat" size={24} color="#fff" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 65,
    width: 65,
    backgroundColor: theme.colors.lightGreen,
    elevation: 3,
    borderRadius: 99,
    position: "absolute",
    bottom: 15,
    right: 15,
  },
});
