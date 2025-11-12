import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import { UserPlus, Trash } from "phosphor-react-native";

import { styles } from "./styles";

type Props = TouchableOpacityProps & {
  icon: "UserPlus" | "Trash";
  variant: "primary" | "secondary";
};
export function ButtonCustom({ icon, variant, ...rest }: Props) {
  const colorCustomButton = variant === "primary" ? "#00A63E" : "#EC1F1F";

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: colorCustomButton }]}
      activeOpacity={0.7}
      {...rest}
    >
      {icon === "UserPlus" ? (
        <Text style={styles.textButton}>+</Text>
      ) : (
        <Text style={styles.textButton}>-</Text>
      )}
    </TouchableOpacity>
  );
}
