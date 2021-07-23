import React from "react";
import { View } from "react-native";
import ChatList from "../components/ChatList";
import FloatButton from "../shared/FloatButton";
import { MaterialIcons } from "@expo/vector-icons";

function ChatsScreen({ stackNavigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ChatList stackNavigation={stackNavigation} />
      <FloatButton>
        <MaterialIcons name="chat" size={24} color="#fff" />
      </FloatButton>
    </View>
  );
}

export default ChatsScreen;
