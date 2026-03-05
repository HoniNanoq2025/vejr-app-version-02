import { StyleSheet, Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import WeatherAccordionList from "../../components/features/WeatherAccordionList";

export default function Forecast() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>7-day forecast</Text>
        </View>
        <WeatherAccordionList />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
  },
  header: {
    width: "100%",
    height: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "Inter",
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 4,
    color: "#fff",
    textTransform: "uppercase",
    alignSelf: "center",
  },
});
