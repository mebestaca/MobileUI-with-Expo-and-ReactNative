import { StyleSheet, Text, View } from "react-native";

export default function BottomNavSection() {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>Persistent Footer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    height: 60,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
  },
});
