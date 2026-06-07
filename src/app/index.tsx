import { SafeAreaProvider } from "react-native-safe-area-context";
import LabScreen from "./screens/LabScreen";

export default function index() {
  return (
    <SafeAreaProvider>
      <LabScreen />
    </SafeAreaProvider>
  );
}