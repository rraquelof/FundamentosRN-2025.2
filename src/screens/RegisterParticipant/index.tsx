import { View, Text } from "react-native";

import { Input } from "../../components/input";
import { ButtonCustom } from "../../components/Button";
import { CardParticipant } from "../../components/cardParticipant";

import { styles } from "./styles";

let participants = [
  {
    id: "1",
    name: "jose malandro",
  },
  {
    id: "2",
    name: "gustavo bala",
  },
  {
    id: "3",
    name: "chico velho",
  },
];

export function RegisterParticipant() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titleHeader}>SertaoComp</Text>
        <Text style={styles.dateHeader}>Sexta, 4 de Novembro de 2022.</Text>
      </View>

      <View style={styles.form}>
        <Input
          namePlaceholder="digite o nome do participante"
          placeholderTextColor="#F4F4F5"
        />
        <ButtonCustom icon="UserPlus" variant="primary" />
      </View>

      <Text style={styles.titleParticipant}>Participantes</Text>

      <View style={styles.listParticipant}>
        {participants.length < 0 ? (
          <></>
        ) : (
          <Text style={styles.textListEmpty}>
            Nenhum participante {"\n"} cadastrado no evento sertaoComp
          </Text>
        )}
      </View>
    </View>
  );
}
