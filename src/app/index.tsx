import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomNavSection from "./components/BottomNav/BottomNavSection";
import CurrencySection from "./components/currency/CurrencySection";
import LabSection from "./components/lab/LabSection";
import ResearchSection from "./components/research/ResearchSection";

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CurrencySection />
      <LabSection />
      <ScrollView style={{ flex: 1 }}>
        <ResearchSection />
      </ScrollView>
      <BottomNavSection />
    </SafeAreaView>
  );
}
