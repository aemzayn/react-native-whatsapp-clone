import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import theme from "../constants/theme";

function Tab({ label, active = false }) {
  return (
    <View style={[styles.tab, active && styles.activeTab]}>
      <Text style={[styles.tabLabel, active && styles.activeLabel]}>
        {label}
      </Text>
      {label === "Chats" && (
        <View
          style={{
            marginLeft: 6,
            width: 20,
            height: 20,
            borderRadius: 99,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
          }}
        >
          <Text
            style={{
              color: theme.colors.tealGreenDark,
              fontSize: 13,
              fontWeight: "700",
            }}
          >
            3
          </Text>
        </View>
      )}
      {label === "Status" && <View style={styles.newStatusIndicator} />}
      {active && <View style={styles.activeBorder} />}
    </View>
  );
}

export default function Tabs() {
  return (
    <View style={styles.tabContainer}>
      <View>
        <MaterialIcons
          style={{
            paddingHorizontal: 12,
          }}
          name="photo-camera"
          size={24}
          color={theme.colors.paleGreen}
        />
      </View>
      <Tab label="Chats" active />
      <Tab label="Status" />
      <Tab label="Calls" />
    </View>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    backgroundColor: theme.colors.tealGreen,
    flexDirection: "row",
    alignItems: "center",
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    paddingVertical: 20,
    flexDirection: "row",
  },
  activeTab: {},
  activeBorder: {
    height: 3,
    width: 110,
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
  },
  tabLabel: {
    fontSize: 16,
    color: theme.colors.paleGreen,
    textTransform: "uppercase",
    fontFamily: "roboto-medium",
    letterSpacing: 0.3,
  },
  activeLabel: {
    color: "white",
  },
  newStatusIndicator: {
    width: 7,
    height: 7,
    borderRadius: 99,
    backgroundColor: theme.colors.paleGreen,
    marginLeft: 5,
  },
});
