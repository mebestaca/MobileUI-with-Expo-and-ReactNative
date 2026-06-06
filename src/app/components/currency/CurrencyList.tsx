import { currencies } from "@/data/currencies";
import { StyleSheet, View } from "react-native";
import CurrencyCard from "./CurrencyCard";

export default function CurrencyList() {
  return (
    <View style={styles.container}>
      {currencies.map((res) => (
        <CurrencyCard resource={res} key={res.id} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
});
