import { StyleSheet, View } from "react-native";
import WeatherRow from "../ui/WeatherRow";

const FORECAST = [
  {
    day: "Tuesday",
    date: "Oct 15",
    condition: "rainy",
    high: 68,
    low: 54,
    precipitation: 90,
    wind: 20,
    uv: 2,
    sunrise: "06:48",
    sunset: "05:54",
  },
  {
    day: "Wednesday",
    date: "Oct 16",
    condition: "stormy",
    high: 74,
    low: 58,
    precipitation: 85,
    wind: 18,
    uv: 2,
    sunrise: "06:45",
    sunset: "05:57",
  },
  {
    day: "Thursday",
    date: "Oct 17",
    condition: "foggy",
    high: 65,
    low: 50,
    precipitation: 50,
    wind: 5,
    uv: 1,
    sunrise: "06:43",
    sunset: "05:59",
  },
  {
    day: "Friday",
    date: "Oct 18",
    condition: "sunny",
    high: 72,
    low: 52,
    precipitation: 10,
    wind: 14,
    uv: 6,
    sunrise: "06:40",
    sunset: "06:02",
  },
  {
    day: "Saturday",
    date: "Oct 19",
    condition: "partly-cloudy",
    high: 70,
    low: 55,
    precipitation: 20,
    wind: 10,
    uv: 3,
    sunrise: "06:38",
    sunset: "06:04",
  },
  {
    day: "Sunday",
    date: "Oct 20",
    condition: "sunny",
    high: 74,
    low: 64,
    precipitation: 5,
    wind: 6,
    uv: 6,
    sunrise: "06:35",
    sunset: "06:07",
  },
  {
    day: "Monday",
    date: "Oct 21",
    condition: "rainy",
    high: 65,
    low: 52,
    precipitation: 95,
    wind: 25,
    uv: 1,
    sunrise: "06:32",
    sunset: "06:09",
  },
];

export default function WeatherAccordionList() {
  return (
    <View style={styles.list}>
      {FORECAST.map((item, i) => (
        <WeatherRow key={i} item={item} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
});
