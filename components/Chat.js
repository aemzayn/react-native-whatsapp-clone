import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import theme from "../constants/theme";
import globalStyle from "../style/globalStyle";

export default function Chat({ item }) {
  const [pressed, setPressed] = useState(false);
  return (
    <Pressable
      style={[
        styles.chat,
        {
          backgroundColor: pressed ? "#E2E8F0" : "white",
        },
      ]}
      // onPressIn={() => setPressed(true)}
      // onPressOut={() => setPressed(false)}
      android_ripple={{ color: "#ccc" }}
      android_disableSound
    >
      <Image source={{ uri: item.avatar }} style={styles.chatImage} />
      <View style={styles.chatInfo}>
        <View style={globalStyle.rowSpaced}>
          <Text style={styles.roomName}>{item.chatName}</Text>
          <Text
            style={{
              color:
                item.unread > 0
                  ? theme.colors.lightGreen
                  : theme.colors.darkGray,
            }}
          >
            {item.time}
          </Text>
        </View>
        <View style={globalStyle.rowSpaced}>
          <Text style={{ color: theme.colors.darkGray }}>
            {item.type === "personal"
              ? item.message
              : item.message.length > 13
              ? `+90 555 123 45 45: ${item.message.substring(0, 13)}...`
              : `+90 555 123 45 45: ${item.message}`}
          </Text>
          <View style={globalStyle.rowCenter}>
            {item.isMuted && (
              <Ionicons name="ios-volume-mute" size={20} color="gray" />
            )}
            {item.unread > 0 && (
              <View
                style={[
                  styles.unreadBubble,
                  {
                    marginLeft: item.isMuted ? 10 : 0,
                  },
                ]}
              >
                <Text style={styles.unreadNumber}>{item.unread}</Text>
              </View>
            )}
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  chat: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    flexDirection: "row",
  },
  chatImage: {
    width: 50,
    height: 50,
    borderRadius: 99,
  },
  chatInfo: {
    marginLeft: 15,
    flex: 1,
  },
  roomName: {
    fontFamily: "roboto-medium",
    fontSize: 18,
  },
  unreadBubble: {
    width: 24,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 99,
    backgroundColor: theme.colors.lightGreen,
  },
  unreadNumber: {
    color: "white",
    fontSize: 12,
  },
});
