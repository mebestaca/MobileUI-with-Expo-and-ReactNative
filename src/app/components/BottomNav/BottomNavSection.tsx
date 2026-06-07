import { Image, View } from "react-native";

export default function BottomNavSection() {
  return (
    <View
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Image
        style={{ height: 50, width: 50, flex: 1 }}
        source={require("../../assets/attack_image.png")}
      />
      <Image
        style={{ height: 50, width: 50, flex: 1 }}
        source={require("../../assets/build_image.png")}
      />
      <Image
        style={{ height: 50, width: 50, flex: 1 }}
        source={require("../../assets/card_image.png")}
      />
      <Image
        style={{ height: 50, width: 50, flex: 1 }}
        source={require("../../assets/module_image.png")}
      />
      <Image
        style={{ height: 50, width: 50, flex: 1 }}
        source={require("../../assets/lab_image.png")}
      />
      <Image
        style={{ height: 50, width: 50, flex: 1 }}
        source={require("../../assets/shop_image.png")}
      />
    </View>
  );
}
