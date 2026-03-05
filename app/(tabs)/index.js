import { StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/features/Header";
import CurrentTemperature from "../../components/ui/Temperature";
import WeatherAlert from "../../components/ui/WeatherAlert";
import Stats from "../../components/features/Stats";
import HourlyForecast from "../../components/features/HourlyForecast";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Header />
        <CurrentTemperature />
        <WeatherAlert />
        <Stats />
        <HourlyForecast />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
  },
  scrollContent: {
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
    color: "#666",
  },
  box: {
    width: 200,
    height: 100,
    backgroundColor: "#111",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    borderRadius: 50,
  },
  textBox: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  flex: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    justifyContent: "center",
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  flexBoxOne: {
    fontSize: 20,
    padding: 15,
    backgroundColor: "green",
    color: "#fff",
    borderRadius: 25,
  },
  flexBoxTwo: {
    fontSize: 20,
    padding: 15,
    backgroundColor: "purple",
    color: "#fff",
    borderRadius: 25,
  },
});
