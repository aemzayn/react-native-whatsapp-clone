import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ChatRoom() {
  return (
    <View style={styles.container}>
      <Text>Chat Room</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
