import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xl,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: SIZES.lg,
    fontFamily: FONT.md,
    color: COLORS.primary,
  },
  headerBtn: {
    fontSize: SIZES.md,
    fontFamily: FONT.md,
    color: COLORS.gray,
  },
  cardsContainer: {
    marginTop: SIZES.md,
  },
});

export default styles;
