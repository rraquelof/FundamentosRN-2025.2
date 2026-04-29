import { Routes } from "./src/routes";
import { useFonts, Roboto_400Regular, Roboto_700Bold, Roboto_800ExtraBold } from '@expo-google-fonts/roboto';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Roboto_800ExtraBold
  });

  if (!fontsLoaded) {
    return null;
  }

  return <Routes />;
}