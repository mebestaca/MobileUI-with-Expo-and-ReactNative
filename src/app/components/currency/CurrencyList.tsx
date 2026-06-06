import { currencies } from "@/data/currencies";
import { View } from "react-native";
import CurrencyCard from "./CurrencyCard";

export default function CurrencyList() {
  return (
    <View>
      {currencies.map((res) => (
        <CurrencyCard resource={res} key={res.id} />
      ))}
    </View>
  );
}
