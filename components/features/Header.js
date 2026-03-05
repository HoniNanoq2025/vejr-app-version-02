import { View, Text, StyleSheet } from "react-native";
import Octicons from "@expo/vector-icons/Octicons";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>OKLAHOMA CITY</Text>
      <View style={styles.subHeader}>
        <Text style={styles.date}>MON 03 MAR</Text>
        <Octicons
          name="dot-fill"
          size={12}
          color="#888888"
          style={{ marginHorizontal: 5 }}
        />
        <Text style={styles.position}>35.4676° N, 97.5164° W</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    /* marginTop: 40, */
  },
  header: {
    fontFamily: "Inter",
    fontSize: 30,
    fontWeight: "700",
    color: "#FFFFFF",
    textTransform: "uppercase",
  },
  subHeader: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  date: {
    color: "#888888",
    textTransform: "uppercase",
  },
  position: {
    color: "#888888",
    textTransform: "uppercase",
  },
});
