import { StyleSheet, Text, View } from "react-native";

export default function LabSection() {
  return (
    <View style={styles.container}>
      <Text>LAB</Text>
      <View style={styles.stoneContainer}>
        <Text>A</Text>
        <Text>1.18M</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  stoneContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
