import { View, Text, StyleSheet, useWindowDimensions } from "react-native";

export default function CurrentTemperature() {
  const { width } = useWindowDimensions();

  const scale = width / 430;
  const fontSize = 128 * scale;

  return (
    <View style={styles.container}>
      <Text style={[styles.currentTemp, { fontSize }]}>70°</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  currentTemp: {
    fontFamily: "Inter",
    fontWeight: "700",
    letterSpacing: -6.4,
    color: "#FFFFFF",
    marginRight: -2,
  },
});
