import React from "react";
import { Pressable, StyleSheet } from "react-native";
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
    <Pressable
      android_ripple={{
        color: rippleColor ?? theme.colors.lightGray,
        radius: rippleRadius,
      }}
      style={[
        styles.button,
        globalStyle.rowCenter,
        {
          position: relative ? "relative" : "absolute",
          bottom: relative ? 0 : 20,
          right: relative ? 0 : 20,
        },
        extendStyle,
      ]}
    >
      {children}
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
  },
});
