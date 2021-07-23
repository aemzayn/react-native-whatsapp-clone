import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import theme from "../constants/theme";
import globalStyle from "../style/globalStyle";

export default function ChatHeader({}) {
  return (
    <View style={styles.container}>
      <Pressable style={globalStyle.rowCenter}>
        <MaterialIcons
          name="arrow-back"
          size={theme.sizes.bigIcon}
          color="white"
        />
      </Pressable>
      <Image
        source={{ uri: "https://placekitten.com/222/222" }}
        style={{ height: 40, width: 40, borderRadius: 99, marginHorizontal: 5 }}
      />
      <View style={{ flex: 1 }}>
        <Text
          style={{ color: "white", fontSize: 16, fontFamily: "roboto-medium" }}
        >
          +62 858-9036-9439
        </Text>
        <Text style={{ color: theme.colors.lightGray }}>Online</Text>
      </View>
      <View style={globalStyle.rowSpaced}>
        <MaterialIcons
          name="videocam"
          size={theme.sizes.icon}
          color={theme.colors.paleGreen}
        />
        <MaterialIcons
          name="call"
          size={theme.sizes.icon}
          color={theme.colors.paleGreen}
          style={{ marginHorizontal: 20 }}
        />
        <MaterialCommunityIcons
          name="dots-vertical"
          size={theme.sizes.icon}
          color="white"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    flexDirection: "row",
    backgroundColor: theme.colors.tealGreen,
  },
});
