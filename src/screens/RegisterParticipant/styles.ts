import { StyleSheet } from "react-native";
import { THEME } from "../../global/themesDesign";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#18181B",
    paddingHorizontal: 20,
    paddingTop: 32,
  },
  header: {
    width: "100%",
    gap: 8,
    marginBottom: 52,
  },
  titleHeader: {
    fontSize: 36,
    color: "#00A63E",
    fontFamily: THEME.fonts.extraBold,
  },
  dateHeader: {
    fontSize: 16,
    color: "#F4F4F5",
    fontFamily: THEME.fonts.regular,
  },
  form: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    marginBottom: 80,
  },
  titleParticipant: {
    color: "#FE9A00",
    marginBottom: 20,
    fontSize: 30,
    fontFamily: THEME.fonts.bold,
  },
  listParticipant: {
    gap: 10,
  },
  textListEmpty: {
    textAlign: "center",
    color: "#F4F4F5",
    fontSize: 20,
    fontFamily: THEME.fonts.bold,
  },
});
