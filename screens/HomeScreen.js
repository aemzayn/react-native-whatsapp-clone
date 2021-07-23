import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet } from "react-native";
import ChatList from "../components/ChatList";
import Layout from "../components/Layout";
import FloatButton from "../shared/FloatButton";

export default function HomeScreen() {
  return (
    <Layout>
      <ChatList />
      <FloatButton>
        <MaterialIcons name="chat" size={24} color="#fff" />
      </FloatButton>
    </Layout>
  );
}

const styles = StyleSheet.create({});
