import { SafeAreaView } from "react-native-safe-area-context";
import CurrencySection from "./components/currency/CurrencySection";

export default function Index() {
  return (
    <SafeAreaView>
      <CurrencySection />
      {/* <LabSection />
      <ScrollView style={{ marginTop: 2 }}>
        <ResearchSection />
      </ScrollView>
      <BottomNavSection /> */}
    </SafeAreaView>
  );
}
