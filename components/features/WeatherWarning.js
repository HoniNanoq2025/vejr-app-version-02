import { View, StyleSheet, Text } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";

export default function WeatherWarning() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>ACTIVE ADVISORIES</Text>
      </View>
      <LinearGradient
        colors={["#C8FF00", "transparent"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0.5, y: 2 }}
        style={styles.alertBox}
      >
        <View style={styles.leftSide}>
          <View style={styles.iconBackground}>
            <MaterialCommunityIcons
              name="alert-octagon"
              size={24}
              color="black"
            />
          </View>
        </View>
        <View style={styles.rightSide}>
          <Text style={styles.warningEvent}>Flood warning</Text>
          <Text style={styles.warningDescription}>
            Excessive rainfall potential through Wednesday night. Creeks and
            low-lying areas may become impassable.
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 20,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  header: {
    alignSelf: "flex-start",
    marginBottom: 10,
  },
  title: {
    fontFamily: "Inter",
    fontSize: 10,
    fontWeight: "700",
    lineHeight: 15,
    letterSpacing: 2,
    textTransform: "uppercase",
    color: "#888888",
  },
  alertBox: {
    flexDirection: "row",
    width: "100%",
    minHeight: 133,
    padding: 20,
    height: "auto",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#C8FF00",
  },
  leftSide: {
    width: "20%",
  },
  iconBackground: {
    height: 40,
    width: 40,
    borderRadius: 16,
    backgroundColor: "#C8FF00",
    alignItems: "center",
    justifyContent: "center",
  },
  rightSide: {
    width: "80%",
  },
  warningEvent: {
    fontFamily: "Inter",
    fontSize: "14",
    fontWeight: "900",
    textTransform: "uppercase",
    lineHeight: 20,
    letterSpacing: -0.35,
    color: "#C8FF00",
  },
  warningDescription: {
    marginTop: 5,
    fontFamily: "Inter",
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 19.5,
    letterSpacing: 0,
    color: "#FFFFFF",
  },
});
