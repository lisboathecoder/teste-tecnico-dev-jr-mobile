import { StyleSheet, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function StacksScreen() {
  return (
    <View style={styles.container}>
      <Ionicons name="library" size={100} color="black" />
      <Text style={styles.title}>Habilidades</Text>
      <View style={styles.row}>
        <Ionicons name="logo-javascript" size={24} color="black" />
        <Text style={styles.item}> JavaScript</Text>
      </View>
      <View style={styles.row}>
        <Ionicons name="logo-react" size={24} color="black" />
        <Text style={styles.item}> React</Text>
      </View>
      <View style={styles.row}>
        <Ionicons name="logo-react" size={24} color="black" />
        <Text style={styles.item}> React Native</Text>
      </View>
      <View style={styles.row}>
        <Ionicons name="logo-python" size={24} color="black" />
        <Text style={styles.item}> Python</Text>
      </View>
      <View style={styles.row}>
        <MaterialCommunityIcons name="arch" size={24} color="black" />
        <Text style={styles.item}> Linux (Arch, Ubuntu)</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 30,
    color: "#333",
    letterSpacing: 0.5,
  },
  item: {
    fontSize: 16,
    marginLeft: 8,
    color: "#555",
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
});
