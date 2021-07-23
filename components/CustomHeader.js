import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import theme from "../constants/theme";

export default function CustomHeader() {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.header}>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>WhatsApp</Text>
        </View>
        <View style={styles.settings}>
          <Pressable>
            <MaterialIcons
              name="search"
              style={styles.searchIcon}
              size={theme.sizes.icon}
              color="white"
            />
          </Pressable>
          <Pressable>
            <MaterialCommunityIcons
              name="dots-vertical"
              size={theme.sizes.icon}
              color="white"
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  header: {
    backgroundColor: theme.colors.tealGreen,
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTitleContainer: {},
  headerTitle: {
    fontSize: 22,
    color: "#fff",
    fontFamily: "roboto-medium",
    letterSpacing: 0.3,
  },
  settings: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchIcon: {
    marginRight: 12,
  },
});
