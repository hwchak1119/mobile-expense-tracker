import { StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.sm,
    marginBottom: SIZES.sm / 2,
  },
  btn: (name, activeTab) => ({
    paddingVertical: SIZES.md,
    paddingHorizontal: SIZES.xl,
    backgroundColor: name === activeTab ? COLORS.primary : "#F3F4F8",
    borderRadius: SIZES.md,
    marginLeft: 2,
    ...SHADOWS.md,
    shadowColor: COLORS.white,
  }),
  btnText: (name, activeTab) => ({
    fontFamily: "DMMedium",
    fontSize: SIZES.sm,
    color: name === activeTab ? "#C3BFCC" : "#AAA9B8",
  }),
});

export default styles;
