import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import theme from "../constants/theme";
import Header from "./Header";
import { MaterialIcons } from "@expo/vector-icons";

export default function CustomTabBar({
  state,
  descriptors,
  navigation,
  position,
}) {
  return (
    <View>
      <Header />
      <View style={{ flexDirection: "row", position: "relative" }}>
        {state?.routes?.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <Pressable
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={[styles.tabItem, { flex: label !== "Camera" ? 1 : 0 }]}
              android_ripple={{ color: theme.colors.paleGreen }}
              android_disableSound
            >
              {label === "Camera" ? (
                <View>
                  <MaterialIcons
                    name="photo-camera"
                    size={24}
                    color={theme.colors.paleGreen}
                    style={{
                      paddingHorizontal: 12,
                    }}
                  />
                </View>
              ) : (
                <Text style={[styles.tabLabel, isFocused && styles.focusedTab]}>
                  {label}
                </Text>
              )}
              {isFocused && <View style={styles.activeBorder} />}
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tabsContainer: {
    backgroundColor: theme.colors.tealGreen,
    flexDirection: "row",
    alignItems: "center",
  },
  tabItem: {
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    paddingVertical: 15,
    flexDirection: "row",
    backgroundColor: theme.colors.tealGreen,
  },
  tabLabel: {
    fontSize: 16,
    color: theme.colors.paleGreen,
    textTransform: "uppercase",
    fontFamily: "roboto-medium",
    letterSpacing: 0.3,
  },
  focusedTab: {
    color: "white",
  },
  activeBorder: {
    height: 3,
    width: 110,
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
  },
});
