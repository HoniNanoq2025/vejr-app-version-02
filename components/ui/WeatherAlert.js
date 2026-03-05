import { View, StyleSheet, Text } from "react-native";

export default function WeatherAlert() {
  return (
    <View style={styles.alertContainer}>
      <View style={styles.alertBox}>
        <Text style={styles.alertMessage}>Severe thunderstorm</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  alertContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  alertBox: {
    width: "85%",
    alignItems: "center",
    justifyContent: "center",
    height: 72,
    borderRadius: 20,
    backgroundColor: "#C8FF00",
  },
  alertMessage: {
    fontFamily: "Inter",
    fontWeight: "900",
    fontSize: 20,
    textTransform: "uppercase",
    letterSpacing: -1,
  },
});
