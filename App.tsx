import { RegisterParticipant } from "./src/screens/RegisterParticipant";
import {useFonts,Roboto_400Regular,Roboto_700Bold,Roboto_800ExtraBold} from '@expo-google-fonts/roboto'
export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Roboto_800ExtraBold
  });
  
  if (!fontsLoaded) {
    return null;
  }
  return <RegisterParticipant />;
}
