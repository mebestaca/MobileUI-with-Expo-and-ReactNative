import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomNavSection from "./components/BottomNav/BottomNavSection";
import CurrencySection from "./components/currency/CurrencySection";
import LabSection from "./components/lab/LabSection";
import ResearchSection from "./components/research/ResearchSection";
import ReasearchCard from "./components/research/ResearchCard"

export default function Index() {
  return (
    <SafeAreaView>
      <CurrencySection />
      <LabSection />
      <ScrollView>
        <ResearchSection />
      </ScrollView>
      <BottomNavSection />
    </SafeAreaView>
  );
}
