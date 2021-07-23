import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import theme from "../constants/theme";
import globalStyle from "../style/globalStyle";

export default function FloatButton({
  children,
  extendStyle = {},
  relative,
  rippleColor,
  rippleRadius,
}) {
  return (
    <View
      style={[
        styles.button,
        globalStyle.rowCenter,
        {
          position: relative ? "relative" : "absolute",
          bottom: relative ? 0 : 20,
          right: relative ? 0 : 20,
        },
      ]}
    >
      <Pressable
        android_ripple={{
          color: rippleColor ?? theme.colors.lightGray,
          radius: rippleRadius,
        }}
        style={[styles.pressable, extendStyle]}
      >
        {children}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    // backgroundColor: theme.colors.lightGreen,
    elevation: 3,
    borderRadius: 99,
    overflow: "hidden",
  },
  pressable: {
    height: 65,
    width: 65,
    backgroundColor: theme.colors.lightGreen,
    alignItems: "center",
    justifyContent: "center",
  },
});
