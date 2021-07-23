import { StyleSheet } from "react-native";

const globalStyle = StyleSheet.create({
  rowCenter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  rowSpaced: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  fullCenter: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default globalStyle;
