import { SafeAreaView } from "react-native-safe-area-context";
import CurrencySection from "./components/currency/CurrencySection";
import LabSection from "./components/lab/LabSection";
import ResearchSection from "./components/research/ResearchSection";

export default function Index() {
  return (
    <SafeAreaView>
      <CurrencySection />
      <LabSection />
      <ResearchSection />
    </SafeAreaView>
  );
}
