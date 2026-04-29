import { useState, useEffect } from "react";
import { View, Text, Alert, ScrollView, FlatList } from "react-native";

import { Input } from "../../components/input";
import { ButtonCustom } from "../../components/Button";
import { CardParticipant } from "../../components/cardParticipant";

import { styles } from "./styles";

type Participant = {
  id: number;
  name: string;
};
export function RegisterParticipant() {
  const [name, setName] = useState("");
  const [listParticipant, setListParticipant] = useState<Participant[]>([]);

  function handleRegisterParticipant() {
    if (name !== "") {
      const newParticipant = {
        id: new Date().getTime(),
        name,
      };
      setListParticipant((listaAntiga) => [...listaAntiga, newParticipant]);
      setName("");
    }
  }
  function deleteUser(id: number) {
    const novaLista = listParticipant.filter(
      (participant) => participant.id !== id
    );
    setListParticipant(novaLista);
  }
  function handleRemoveUser(id: number) {
    Alert.alert("Remoção do usuário", "DEseja remover o participante?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "remova", onPress: () => deleteUser(id) },
    ]);
  }
 /*  useEffect(() => {
    //acessar a api
    Alert.alert("efeito colateral executado");
  },[]); */
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
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <ButtonCustom
          icon="UserPlus"
          variant="primary"
          onPress={handleRegisterParticipant}
        />
      </View>

      <Text style={styles.titleParticipant}>Participantes</Text>

      <FlatList
        data={listParticipant}
        keyExtractor={(item) => `${item.id}`}
        contentContainerStyle={styles.listParticipant}
        renderItem={({ item }) => (
          <CardParticipant
            name={item.name}
            id={item.id}
            deleteUser={() => handleRemoveUser(item.id)}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.textListEmpty}>
            Nenhum participante {"\n"} cadastrado no evento sertaoComp
          </Text>
        )}
      />
    </View>
  );
}

/* 

<ScrollView contentContainerStyle={styles.listParticipant}>
        {listParticipant.length > 0 ? (
          listParticipant.map((participant) => (
            <CardParticipant
              key={participant.id}
              name={participant.name}
              id={participant.id}
              deleteUser={() => handleRemoveUser(participant.id)}
            />
          ))
        ) : (
          <Text style={styles.textListEmpty}>
            Nenhum participante {"\n"} cadastrado no evento sertaoComp
          </Text>
        )}
      </ScrollView>
*/
