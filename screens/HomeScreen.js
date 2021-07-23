import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import ChatList from "../components/ChatList";
import NewMessageButton from "../components/NewMessageButton";
import Layout from "../components/Layout";

export default function HomeScreen() {
  return (
    <Layout>
      <ChatList />
      <NewMessageButton />
    </Layout>
  );
}

const styles = StyleSheet.create({});
