import { researchdata } from "@/data/researchdata";
import { View } from "react-native";
import ResearchCard from "./ResearchCard";

export default function ResearchList() {
  return (
    <View style={{ backgroundColor: "#111F2C" }}>
      {researchdata.map((res) => (
        <ResearchCard resource={res} key={res.id} />
      ))}
    </View>
  );
}
