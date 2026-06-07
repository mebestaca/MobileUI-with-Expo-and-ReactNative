import { Currency } from "@/types/currency";
import { Image, StyleSheet, Text, View } from "react-native";

type Props = {
  resource: Currency;
};

export default function CurrencyCard({ resource }: Props) {
  const { name, value, image } = resource;
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 12,
        gap: 5,
      }}
    >
      <Image source={image as any} style={{ height: 18, width: 18 }}></Image>
      <Text style={styles.textStyle}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    color: "white",
    fontSize: 18,
  },
});
