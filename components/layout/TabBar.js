import { View, Pressable, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const TAB_HEIGHT = 46;

export default function CustomTabBar({ state, navigation }) {
  const insets = useSafeAreaInsets();
  const activeColor = "#C8FF00";
  const inactiveColor = "#888888";

  const getTabStyle = (isActive) => [
    styles.tabButton,
    isActive && {
      backgroundColor: "#C8FF001A",
      borderColor: "#C8FF0033",
      borderWidth: 1,
      borderRadius: TAB_HEIGHT / 2,
    },
  ];

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom + 5 }]}>
      <Pressable
        style={getTabStyle(state.index === 0)}
        onPress={() => navigation.navigate("index")}
      >
        <Ionicons
          name={state.index === 0 ? "home" : "home-outline"}
          size={28}
          color={state.index === 0 ? activeColor : inactiveColor}
        />
        <Text
          style={[
            styles.tabText,
            { color: state.index === 0 ? activeColor : inactiveColor },
          ]}
        >
          HOME
        </Text>
      </Pressable>
      <Pressable
        style={getTabStyle(state.index === 1)}
        onPress={() => navigation.navigate("forecast")}
      >
        <Ionicons
          name={state.index === 1 ? "calendar" : "calendar-outline"}
          size={28}
          color={state.index === 1 ? activeColor : inactiveColor}
        />
        <Text
          style={[
            styles.tabText,
            { color: state.index === 1 ? activeColor : inactiveColor },
          ]}
        >
          7-DAY
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#1A1C1E",
    width: "70%",
    height: 60,
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    paddingTop: 5,
    paddingHorizontal: 5,
    borderWidth: 1,
    borderColor: "#FFFFFF1A",
    borderRadius: 30,
    shadowColor: "#00000040",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 5,
  },
  tabButton: {
    flex: 1,
    flexDirection: "row",
    height: TAB_HEIGHT,
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
  },
  tabText: {
    fontFamily: "Inter",
    fontSize: 12,
    fontWeight: "600",
  },
});
