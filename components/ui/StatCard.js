import { View, Text, StyleSheet } from "react-native";

export default function StatCard({ title, icon, data, text }) {
  return (
    <View style={styles.card}>
      <View style={styles.alignData}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.icon}>{icon}</View>
      </View>
      <View style={styles.dataAlign}>
        <Text style={styles.data}>{data}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    maxWidth: 180,
    minWidth: 140,
    height: 128,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#1A1C1E",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#FFFFFF1A",
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  alignData: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontFamily: "Inter",
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 1.5,
    color: "#888888",
    textTransform: "uppercase",
  },
  dataAlign: {
    width: "90%",
    flexDirection: "row",
    alignItems: "baseline",
    gap: 5,
  },
  data: {
    fontFamily: "Inter",
    fontSize: 48,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  text: {
    fontFamily: "Inter",
    fontSize: 15,
    fontWeight: "500",
    color: "#888888",
    textTransform: "uppercase",
  },
});
