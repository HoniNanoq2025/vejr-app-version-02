import { View, StyleSheet } from "react-native";
import StatCard from "../ui/StatCard";
import { FontAwesome5 } from "@expo/vector-icons";
import Fontisto from "@expo/vector-icons/Fontisto";

export default function Stats() {
  const stats = [
    {
      title: "Wind",
      icon: <FontAwesome5 name="wind" size={16} color="#888888" />,
      data: 24,
      text: "MPH NW",
    },
    {
      title: "Humidity",
      icon: <FontAwesome5 name="tint" size={16} color="#888888" />,
      data: 82,
      text: "%",
    },
    {
      title: "UV INDEX",
      icon: <Fontisto name="day-sunny" size={16} color="#888888" />,
      data: 8,
      text: "very high",
    },
    {
      title: "Air Quality",
      icon: <FontAwesome5 name="leaf" size={16} color="#888888" />,
      data: 42,
      text: "good",
    },
  ];

  return (
    <View style={styles.container}>
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          title={stat.title}
          icon={stat.icon}
          data={stat.data}
          text={stat.text}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    gap: 10,
    padding: 16,
    marginVertical: 10,
  },
});
