import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    height: 70,

    backgroundColor: "#1D1950",

    borderTopWidth: 2,
    borderTopColor: "#00D6C7",
  },

  tab: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
  },

  activeTab: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#203C7A",

    borderTopWidth: 3,
    borderTopColor: "#00D6C7",
  },

  icon: {
    fontSize: 40,
    color: "#FFFFFF",
  },

  label: {
    color: "#FFFFFF",
    fontSize: 11,
    marginTop: 2,
  },
});