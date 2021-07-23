import React from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import theme from "../constants/theme";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import FloatButton from "../shared/FloatButton";

const STATUS = [
  {
    username: "Rylie Jaymes",
    id: "1",
    publishTime: "Today, 11:59 AM",
    image: "https://placekitten.com/215/215",
  },
  {
    username: "John Doe",
    id: "2",
    publishTime: "Today, 09:21 AM",
    image: "https://placekitten.com/211/211",
  },
  {
    username: "Marla Lennox",
    id: "3",
    publishTime: "Yesterday, 10:01 PM",
    image: "https://placekitten.com/212/212",
  },
  {
    username: "Leah Hailee",
    id: "4",
    publishTime: "Yesterday, 07:08 PM",
    image: "https://placekitten.com/213/213",
  },
];

function Status({ myStatus, image, publishTime, username }) {
  return (
    <Pressable
      style={styles.statusItem}
      android_ripple={{ color: theme.colors.lightGray }}
      android_disableSound
    >
      <Image source={{ uri: image }} style={styles.statusImage} />
      <View style={{ flex: 1, marginLeft: 15 }}>
        <Text style={{ fontFamily: "roboto-medium", fontSize: 18 }}>
          {myStatus ? "My Status" : username}
        </Text>
        <Text style={{ color: theme.colors.darkGray }}>{publishTime}</Text>
      </View>
      {myStatus && (
        <MaterialCommunityIcons
          name="dots-horizontal"
          size={theme.sizes.icon}
          color={theme.colors.tealGreenDark}
        />
      )}
    </Pressable>
  );
}

export default function StatusScreen() {
  return (
    <View style={{ flex: 1, position: "relative", backgroundColor: "white" }}>
      <View style={{ paddingTop: 5 }}>
        <Status
          myStatus
          image="https://placekitten.com/210/210"
          publishTime="Today, 08:00 AM"
        />
      </View>
      <View style={styles.viewedUpdateContainer}>
        <Text style={styles.viewedUpdateText}>Viewed Updates</Text>
      </View>
      <FlatList
        data={STATUS}
        renderItem={({ item }) => <Status {...item} />}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.actionButtonsContainer}>
        <View style={{ marginBottom: 20 }}>
          <FloatButton
            relative
            extendStyle={{
              width: 55,
              height: 55,
              backgroundColor: "#EDF5F7",
            }}
          >
            <MaterialCommunityIcons
              name="pencil"
              size={theme.sizes.icon}
              color="#476A6E"
            />
          </FloatButton>
        </View>
        <FloatButton relative rippleRadius={35}>
          <MaterialIcons
            name="camera-alt"
            size={theme.sizes.bigIcon}
            color="white"
          />
        </FloatButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  statusItem: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  statusImage: {
    width: 50,
    height: 50,
    borderRadius: 99,
  },
  viewedUpdateContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#EEEEEE",
  },
  viewedUpdateText: {
    color: theme.colors.darkGray,
    fontFamily: "roboto-medium",
  },
  actionButtonsContainer: {
    position: "absolute",
    bottom: 20,
    right: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
