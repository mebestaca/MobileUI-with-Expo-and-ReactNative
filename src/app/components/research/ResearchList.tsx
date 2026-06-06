import { researchdata } from "@/data/researchdata";
import { View } from "react-native";
import ResearchCard from "./ResearchCard";

export default function ResearchList() {
  return (
    <View>
      {researchdata.map((res) => (
        <ResearchCard resource={res} key={res.id} />
      ))}
    </View>
  );
}
