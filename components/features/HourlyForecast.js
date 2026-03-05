import { View, StyleSheet, Text, FlatList } from "react-native";
import HourlyCard from "../ui/HourlyCard";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function HourlyForecast() {
  const hourlyData = [
    {
      id: 1,
      hour: "2PM",
      icon: <Ionicons name="thunderstorm-sharp" size={20} color="black" />,
      temperature: "72°",
    },
    {
      id: 2,
      hour: "3PM",
      icon: <Ionicons name="rainy-sharp" size={20} color="#FFFFFF" />,
      temperature: "71°",
    },
    {
      id: 3,
      hour: "4PM",
      icon: <Ionicons name="cloudy-sharp" size={20} color="#888888" />,
      temperature: "70°",
    },
    {
      id: 4,
      hour: "5PM",
      icon: (
        <MaterialCommunityIcons
          name="weather-sunset"
          size={20}
          color="#FFFFFF"
        />
      ),
      temperature: "68°",
    },
    {
      id: 5,
      hour: "6PM",
      icon: (
        <MaterialCommunityIcons
          name="weather-night"
          size={20}
          color="#888888"
        />
      ),
      temperature: "66°",
    },
    {
      id: 6,
      hour: "7PM",
      icon: <Ionicons name="moon-sharp" size={20} color="#888888" />,
      temperature: "64°",
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hourly forecast</Text>

      <FlatList
        data={hourlyData}
        horizontal
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ gap: 8, marginHorizontal: 20 }}
        renderItem={({ item, index }) => (
          <HourlyCard
            hour={item.hour}
            icon={item.icon}
            temperature={item.temperature}
            isNow={index === 0}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 10,
    alignItems: "center",
  },
  header: {
    fontFamily: "Inter",
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 2,
    lineHeight: 15,
    color: "#888888",
    textTransform: "uppercase",
    marginBottom: 15,
    alignSelf: "flex-start",
    marginHorizontal: 20,
  },
});
