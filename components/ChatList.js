import React from "react";
import { FlatList } from "react-native";
import Chat from "./Chat";

const DATA = [
  {
    message: "🤣",
    chatName: "🏡🚀",
    id: "1",
    isMuted: true,
    unread: 12,
    avatar: "https://placekitten.com/201/201",
    type: "group",
    time: "7:48 PM",
  },
  {
    message: "halo1",
    chatName: "Bob",
    id: "2",
    isMuted: true,
    unread: 0,
    avatar: "https://placekitten.com/202/202",
    type: "personal",
    time: "7:00 PM",
  },
  {
    message: "Lorem ipsum dolor sit amet.",
    chatName: "John Doe",
    id: "3",
    isMuted: false,
    unread: 0,
    avatar: "https://placekitten.com/203/203",
    type: "personal",
    time: "10:31 AM",
  },
  {
    message: "P",
    chatName: "Sinau",
    id: "4",
    isMuted: true,
    unread: 99,
    avatar: "https://placekitten.com/204/204",
    type: "personal",
    time: "06:48 AM",
  },
  {
    message: "Bunun cevabı bilen var mı",
    chatName: "UÜ|BilgisayarMüh. 2.Sınıf",
    id: "5",
    isMuted: false,
    unread: 2,
    avatar: "https://placekitten.com/205/205",
    type: "group",
    time: "Yesterday",
  },
  {
    message: "🤣",
    chatName: "🏡🚀",
    id: "6",
    isMuted: true,
    unread: 12,
    avatar: "https://placekitten.com/201/201",
    type: "group",
    time: "7:48 PM",
  },
  {
    message: "halo1",
    chatName: "Bob",
    id: "7",
    isMuted: true,
    unread: 0,
    avatar: "https://placekitten.com/202/202",
    type: "personal",
    time: "7:00 PM",
  },
  {
    message: "Lorem ipsum dolor sit amet.",
    chatName: "John Doe",
    id: "8",
    isMuted: false,
    unread: 0,
    avatar: "https://placekitten.com/203/203",
    type: "personal",
    time: "10:31 AM",
  },
  {
    message: "P",
    chatName: "Sinau",
    id: "9",
    isMuted: true,
    unread: 99,
    avatar: "https://placekitten.com/204/204",
    type: "personal",
    time: "06:48 AM",
  },
  {
    message: "Bunun cevabı bilen var mı",
    chatName: "UÜ|BilgisayarMüh. 2.Sınıf",
    id: "10",
    isMuted: false,
    unread: 2,
    avatar: "https://placekitten.com/205/205",
    type: "group",
    time: "Yesterday",
  },
  {
    message: "Lorem ipsum dolor sit amet.",
    chatName: "John Doe",
    id: "11",
    isMuted: false,
    unread: 0,
    avatar: "https://placekitten.com/203/203",
    type: "personal",
    time: "10:31 AM",
  },
  {
    message: "P",
    chatName: "Sinau",
    id: "12",
    isMuted: true,
    unread: 99,
    avatar: "https://placekitten.com/204/204",
    type: "personal",
    time: "06:48 AM",
  },
  {
    message: "Bunun cevabı bilen var mı",
    chatName: "UÜ|BilgisayarMüh. 2.Sınıf",
    id: "13",
    isMuted: false,
    unread: 2,
    avatar: "https://placekitten.com/205/205",
    type: "group",
    time: "Yesterday",
  },
];

export default function ChatList() {
  return (
    <FlatList
      data={DATA}
      renderItem={({ item }) => <Chat item={item} />}
      keyExtractor={(item) => item.id}
    />
  );
}
