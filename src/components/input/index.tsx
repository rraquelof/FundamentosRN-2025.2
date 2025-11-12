import { TextInput, TextInputProps } from "react-native";
import { styles } from "./style";

type Props = TextInputProps & {
  icon?: "EnvelopeSimple" | "LockSimple";
  namePlaceholder: string;
};
export function Input({ namePlaceholder, ...rest }: Props) {
  return (
    <TextInput placeholder={namePlaceholder} style={styles.input} {...rest} />
  );
}
