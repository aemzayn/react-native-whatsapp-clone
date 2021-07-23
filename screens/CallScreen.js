import React from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import theme from "../constants/theme";
import Layout from "../components/Layout";
import FloatButton from "../shared/FloatButton";

const CALLS = [
  {
    username: "Rylie Jaymes",
    id: "1",
    callTime: "Today, 11:59 AM",
    image: "https://placekitten.com/215/215",
    videoCall: false,
    iotype: "out",
    times: 1,
    isRejected: false,
  },
  {
    username: "John Doe",
    id: "2",
    callTime: "Today, 09:21 AM",
    image: "https://placekitten.com/211/211",
    videoCall: false,
    iotype: "in",
    times: 2,
    isRejected: true,
  },
  {
    username: "Marla Lennox",
    id: "3",
    callTime: "Yesterday, 10:01 PM",
    image: "https://placekitten.com/212/212",
    videoCall: true,
    iotype: "out",
    times: 1,
    isRejected: false,
  },
  {
    username: "Leah Hailee",
    id: "4",
    callTime: "Yesterday, 07:08 PM",
    image: "https://placekitten.com/213/213",
    videoCall: false,
    iotype: "in",
    times: 2,
    isRejected: true,
  },
  {
    username: "Pearle Tad",
    id: "5",
    callTime: "Yesterday, 03:11 AM",
    image: "https://placekitten.com/216/216",
    videoCall: true,
    iotype: "in",
    times: 16,
    isRejected: true,
  },
];

function CallHistory({
  username,
  image,
  callTime,
  times,
  videoCall,
  isRejected,
  iotype,
}) {
  return (
    <Pressable
      style={styles.callHistoryItem}
      android_ripple={{ color: theme.colors.lightGray }}
      android_disableSound
    >
      <Image source={{ uri: image }} style={styles.userImage} />
      <View style={{ flex: 1, marginLeft: 15 }}>
        <Text style={{ fontFamily: "roboto-medium", fontSize: 18 }}>
          {username}
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <MaterialCommunityIcons
            name={iotype === "in" ? "arrow-bottom-left" : "arrow-top-right"}
            size={theme.sizes.smallIcon}
            color={!isRejected ? theme.colors.lightGreen : theme.colors.red}
          />
          <Text style={{ color: theme.colors.darkGray, marginLeft: 5 }}>
            {times > 1 && `(${times})`} {callTime}
          </Text>
        </View>
      </View>
      <View>
        <MaterialIcons
          name={videoCall ? "videocam" : "call"}
          size={theme.sizes.icon}
          color={theme.colors.tealGreenDark}
        />
      </View>
    </Pressable>
  );
}

export default function CallScreen() {
  return (
    <Layout>
      <FlatList
        data={CALLS}
        renderItem={({ item }) => <CallHistory {...item} />}
        keyExtractor={(item) => item.id}
      />
      <FloatButton>
        <MaterialIcons
          name="add-call"
          size={theme.sizes.bigIcon}
          color="white"
        />
      </FloatButton>
    </Layout>
  );
}

const styles = StyleSheet.create({
  callHistoryItem: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 99,
  },
});
