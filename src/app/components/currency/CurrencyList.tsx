import { currencies } from "@/data/currencies";
import { Image, StyleSheet, View } from "react-native";
import CurrencyCard from "./CurrencyCard";

export default function CurrencyList() {
  return (
    <View style={styles.currencyContainer}>
      {currencies.map((res) => (
        <CurrencyCard resource={res} key={res.id} />
      ))}
      <Image
        source={require("../../assets/currencies_image.png")}
        style={{ height: 18, width: 22, marginTop: 3, marginRight: 13 }}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  currencyContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 25,
    backgroundColor: "#353172",
  },
});
