import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    marginHorizontal: 8,
    marginVertical: 6,

    borderWidth: 2,
    borderColor: "#00D6C7",

    backgroundColor: "#031B2E",
  },

  header: {
    height: 40,

    backgroundColor: "#013B32",

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingHorizontal: 10,
  },

  labText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
  },

  headerRight: {
    flexDirection: "row",
    alignItems: "center",
  },

  timer: {
    color: "#7FFF55",
    fontSize: 18,
    fontWeight: "700",
    marginRight: 12,
  },

  multiplier: {
    color: "#7FFF55",
    fontSize: 18,
    fontWeight: "700",
    marginLeft: 20
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: 10
  },

  titleBlock: {
    flex: 1
  },

  bottomRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 7
  },

  timerBox: {
    width: 80,
    height: 45,
    borderWidth: 1,
    borderColor: "#00D6C7",
    backgroundColor: "#031B2E",
    justifyContent: "center",
    alignItems: "center"
  },

  timerIcon: {
    fontSize: 18,
    color: "#FFFFFF", 
    fontWeight: "700",
  },

  title: {
    color: "#FFFFFF",
    fontSize: 19,
    fontWeight: "700",
  },

  value: {
    color: "#FFFFFF",
    fontSize: 18,
    marginTop: 8,
  },

  contentRow: {
    flexDirection: "row",
    marginTop: 22,
  },

  progressSection: {
    flex: 1,
    marginHorizontal: 8,
  },

  progressBar: {
    height: 45,

    borderWidth: 1,
    borderColor: "#7FFFF7",

    backgroundColor: "#071018",

    overflow: "hidden",
    justifyContent: "center",
  },

  progressFill: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,

    backgroundColor: "#2DE3C0",
  },

  progressText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "700",
  },

  rushBox: {
    width: 110,

    borderWidth: 2,
    borderColor: "#1CA8FF",

    backgroundColor: "#20265E",

    justifyContent: "flex-start",
    alignItems: "center",

    paddingVertical: 6
  },

  rushTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
  },

  rushCost: {
    color: "#FFFFFF",
    fontSize: 16,
    marginTop: 6,
    fontWeight: "700",
  },

  speedButton: {
    width: 90,
    height: 45,
 
    borderWidth: 1,
    borderColor: "#59E6FF",

    backgroundColor: "#16296B",

    justifyContent: "center",
    alignItems: "center",
  },

  speedText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },
});