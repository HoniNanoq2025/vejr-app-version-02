import { View, StyleSheet, Text } from "react-native";

export default function HourlyCard({ hour, icon, temperature, isNow = false }) {
  return (
    <View style={[styles.container, isNow && styles.containerNow]}>
      <Text style={[styles.time, isNow && styles.timeNow]}>
        {isNow ? "NOW" : hour}
      </Text>
      <View>{icon}</View>
      <Text style={[styles.temp, isNow && styles.tempNow]}>{temperature}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 55,
    height: 110,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#FFFFFF33",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#1A1C1E",
  },
  containerNow: {
    backgroundColor: "#C8FF00",
    borderColor: "#C8FF00",
  },
  time: {
    fontFamily: "Inter",
    fontSize: 12,
    fontWeight: "500",
    color: "#888888",
    lineHeight: 16,
    letterSpacing: 0,
  },
  timeNow: {
    color: "#000000",
    fontWeight: "700",
  },
  temp: {
    fontFamily: "Inter",
    fontSize: 18,
    fontWeight: "700",
    color: "#FFFFFF",
    lineHeight: 28,
    letterSpacing: 0,
  },
  tempNow: {
    color: "#000000",
  },
});
