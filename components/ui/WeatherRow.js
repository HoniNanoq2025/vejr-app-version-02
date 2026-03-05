import { useState, useEffect } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

// ─── Weather icon helper ───────────────────────────
function WeatherIcon({ condition, size = 24, color = "#fff" }) {
  const icons = {
    sunny: "sunny",
    "partly-cloudy": "partly-sunny",
    cloudy: "cloudy",
    rainy: "rainy",
    stormy: "thunderstorm",
    snowy: "snow",
    foggy: "cloudy-night",
  };
  return (
    <Ionicons
      name={icons[condition] ?? "partly-sunny"}
      size={32}
      color={color}
    />
  );
}

// ─── Detail cells ───────────────────────
function DetailCell({ icon, label, value, color }) {
  return (
    <View style={styles.detailCell}>
      <Text style={styles.detailLabel}>{label}</Text>
      <View style={styles.detailData}>
        <MaterialCommunityIcons
          name={icon}
          size={14}
          color={color}
          style={{ marginBottom: 2 }}
        />
        <Text style={styles.detailValue}>{value}</Text>
      </View>
    </View>
  );
}

function SunCell({ icon, label, value, color }) {
  return (
    <View style={styles.sunCell}>
      <Text style={styles.detailLabel}>{label}</Text>
      <View style={styles.detailSunData}>
        <MaterialCommunityIcons name={icon} size={16} color={color} />
        <Text style={styles.detailValue}>{value}</Text>
      </View>
    </View>
  );
}

function getUVScale(uv) {
  if (uv <= 2) return "Low";
  if (uv <= 5) return "Moderate";
  if (uv <= 7) return "High";
  if (uv <= 10) return "Very High";
  return "Extreme";
}

// ─── WeatherRow ───────────────────────────────────────────────────────────────
// Props:
//   item: {
//     day: string          — e.g. "Tuesday"
//     date: string         — e.g. "Oct 15"
//     condition: string    — "sunny" | "partly-cloudy" | "cloudy" | "rainy" | "stormy" | "snowy" | "foggy"
//     high: number         — high temp in °F
//     low: number          — low temp in °F
//     precipitation: number — %
//     wind: number          — MPH
//     uv: number
//     sunrise: string      — e.g. "06:48"
//     sunset: string       — e.g. "05:54"
//   }
//   isActive?: boolean     — highlights the row and starts expanded (default: false)

export default function WeatherRow({ item, isActive = false }) {
  const [open, setOpen] = useState(isActive);
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = isActive ? 1 : 0;
  }, []);

  const toggle = () => {
    const next = !open;

    setOpen(next);

    progress.value = withSpring(next ? 1 : 0, {
      damping: 20,
      stiffness: 120,
      overshootClamping: true,
    });
  };

  const expandStyle = useAnimatedStyle(() => ({
    height: progress.value * 190,
    overflow: "hidden",
  }));

  return (
    <View
      style={[
        styles.rowWrapper,
        open ? styles.activeWrapper : styles.inactiveWrapper,
      ]}
    >
      {/* ── Collapsed bar ── */}
      <Pressable
        onPress={toggle}
        style={({ pressed }) => [styles.bar, pressed && styles.barPressed]}
      >
        {/* Left: day + date */}
        <View style={styles.barLeft}>
          <Text style={[styles.dayLabel, open && styles.dayLabelActive]}>
            {item.day}
          </Text>
          <Text style={styles.dateLabel}>{item.date}</Text>
        </View>

        {/* Right: icon + temps + chevron */}
        <View style={styles.barRight}>
          <WeatherIcon
            condition={item.condition}
            color={open ? "#C8FF00" : "#FFFFFF"}
          />
          <Text style={styles.tempHigh}>{item.high}°</Text>
          <Text style={styles.tempLow}>{item.low}°</Text>
        </View>
      </Pressable>

      {/* ── Expanded details ── */}
      <Animated.View style={[styles.details, expandStyle]}>
        <View style={styles.detailsInner}>
          <View style={styles.divider} />
          <View style={styles.detailGrid}>
            <DetailCell
              icon="water"
              label="Precip"
              value={`${item.precipitation} %`}
              color="#C8FF00"
            />
            <DetailCell
              icon="weather-windy"
              label="Wind"
              value={`${item.wind} MPH`}
              color="#C8FF00"
            />
            <DetailCell
              icon="white-balance-sunny"
              label="UV"
              value={`${item.uv} ${getUVScale(item.uv)}`}
              color="#C8FF00"
            />
            <View style={styles.sunRow}>
              <SunCell
                icon="weather-sunset-up"
                label="Sunrise"
                value={`${item.sunrise} AM`}
                color="#C8FF00"
              />
              <SunCell
                icon="weather-sunset-down"
                label="Sunset"
                value={`${item.sunset} PM`}
                color="#C8FF00"
              />
            </View>
          </View>
        </View>
      </Animated.View>
    </View>
  );
}

// ─── Styles ───────────────────────────────────────────────────────────────────
const styles = StyleSheet.create({
  rowWrapper: {
    width: "90%",
    backgroundColor: "#1E293B",
    borderRadius: 14,
    overflow: "hidden",
    borderWidth: 2,
  },

  activeWrapper: {
    borderColor: "#C8FF004D",
    backgroundColor: "#1A1C1E",
  },

  inactiveWrapper: {
    borderColor: "#FFFFFF1A",
    backgroundColor: "#1A1C1E",
  },

  bar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 14,
    paddingHorizontal: 16,
  },

  barPressed: {
    opacity: 0.75,
    backgroundColor: "#243447",
  },

  barLeft: { flex: 1, flexDirection: "column" },

  dayLabel: {
    fontFamily: "Inter",
    fontSize: 20,
    fontWeight: "600",
    color: "#CBD5E1",
    lineHeight: 28,
    letterSpacing: -0.5,
    textTransform: "uppercase",
  },

  dayLabelActive: { color: "#888888" },

  dateLabel: {
    fontFamily: "Inter",
    fontSize: 10,
    lineHeight: 15,
    letterSpacing: 1,
    textTransform: "uppercase",
    color: "#888888",
    marginTop: 1,
  },

  barRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  tempHigh: {
    fontFamily: "Inter",
    fontSize: 24,
    fontWeight: "700",
    color: "#F1F5F9",
    marginLeft: 8,
  },

  tempSep: {
    fontSize: 13,
    color: "#475569",
  },

  tempLow: {
    fontSize: 16,
    fontWeight: "400",
    color: "#64748B",
  },

  details: {},

  detailsInner: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },

  divider: {
    height: 1,
    backgroundColor: "#334155",
    marginBottom: 14,
  },

  detailGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    gap: 5,
  },

  detailCell: {
    minWidth: "24%",
    backgroundColor: "transparent",
    borderRadius: 10,
    padding: 10,
    alignItems: "flex-start",
  },

  detailData: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginTop: 8,
  },

  detailValue: {
    fontFamily: "Inter",
    fontSize: 14,
    fontWeight: "700",
    color: "#E2E8F0",
    lineHeight: 24,
    letterSpacing: 0,
    textTransform: "uppercase",
    marginTop: 2,
  },

  detailLabel: {
    fontFamily: "Inter",
    fontSize: 9,
    fontWeight: "700",
    color: "#888888",
    marginTop: 2,
    textTransform: "uppercase",
    lineHeight: 13.5,
    letterSpacing: 1.35,
  },

  sunRow: {
    flex: 1,
    minWidth: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 10,
  },

  sunCell: {
    /* flex: 1, */
    minWidth: "30%",
    flexDirection: "column",
    alignItems: "flex-start",
    backgroundColor: "#1A1C1E",
    borderRadius: 10,
    padding: 10,
  },

  detailSunData: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginTop: 8,
  },
});
