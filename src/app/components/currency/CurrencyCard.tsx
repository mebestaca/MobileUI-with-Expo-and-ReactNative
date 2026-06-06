import { Currency } from "@/types/currency";
import { Text } from "react-native";

type Props = {
  resource: Currency;
};

export default function CurrencyCard({ resource }: Props) {
  const { name, value } = resource;
  return <Text> {value} </Text>;
}
