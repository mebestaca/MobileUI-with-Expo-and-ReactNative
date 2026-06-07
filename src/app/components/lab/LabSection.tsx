import { Image, StyleSheet, Text, View } from "react-native";

export default function LabSection() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>LAB</Text>
      <View style={styles.stoneContainer}>
        <Image
          source={require("../../assets/cells_image.png")}
          style={{ height: 22, width: 22, marginRight: 10 }}
        ></Image>
        <Text style={styles.textStyle}>1.18M</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#353172",
    alignItems: "center",
    paddingLeft: 13,
    paddingRight: 12,
  },
  stoneContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  textStyle: {
    color: "white",
    fontSize: 18,
  },
});
