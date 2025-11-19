import { Text, View } from "react-native";

import { styles } from "./styles";
import { ButtonCustom } from "../Button";

type Props ={
  name:string;
  deleteUser:(id:number)=>void;
  id:number;
}
export function CardParticipant({name,id, deleteUser}:Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.textNameParticipant}>{name}</Text>
      <ButtonCustom icon="Trash" variant="secondary" onPress={()=>deleteUser(id)}/>
    </View>
  );
}
