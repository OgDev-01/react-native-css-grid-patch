import { View, Text, Pressable, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container} edges={["bottom"]}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>CSS Grid Test 🎨</Text>
          <Text style={styles.subtitle}>
            Comparing CSS Grid vs Flexbox layouts in React Native
          </Text>
        </View>

        <View style={styles.cardsContainer}>
          <Link href="/grid-example" asChild>
            <Pressable style={styles.card}>
              <View style={styles.cardIconContainer}>
                <Text style={styles.cardIcon}>📐</Text>
              </View>
              <Text style={styles.cardTitle}>CSS Grid Example</Text>
              <Text style={styles.cardDescription}>
                Native CSS Grid layout with gridTemplateColumns, gridTemplateRows,
                and grid item placement
              </Text>
              <View style={styles.cardBadge}>
                <Text style={styles.cardBadgeText}>NEW</Text>
              </View>
            </Pressable>
          </Link>

          <Link href="/flexbox-example" asChild>
            <Pressable style={styles.cardAlt}>
              <View style={styles.cardIconContainerAlt}>
                <Text style={styles.cardIcon}>📦</Text>
              </View>
              <Text style={styles.cardTitle}>Flexbox Example</Text>
              <Text style={styles.cardDescription}>
                Traditional flexbox approach with nested Views and manual row
                management
              </Text>
              <View style={styles.cardBadgeAlt}>
                <Text style={styles.cardBadgeTextAlt}>TRADITIONAL</Text>
              </View>
            </Pressable>
          </Link>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>About this demo</Text>
          <Text style={styles.infoText}>
            This project demonstrates the CSS Grid patch for React Native from
            @intergalacticspacehighway. Compare the two examples to see how Grid
            simplifies complex layouts.
          </Text>
        </View>

        <View style={styles.techStack}>
          <Text style={styles.techTitle}>Tech Stack</Text>
          <View style={styles.techRow}>
            <View style={styles.techItem}>
              <Text style={styles.techLabel}>Expo SDK</Text>
              <Text style={styles.techValue}>55 Canary</Text>
            </View>
            <View style={styles.techItem}>
              <Text style={styles.techLabel}>React Native</Text>
              <Text style={styles.techValue}>0.83.0-rc.5</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
  },
  content: {
    flex: 1,
    padding: 16,
  },
  header: {
    marginTop: 20,
    marginBottom: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#94a3b8",
    lineHeight: 24,
  },
  cardsContainer: {
    gap: 16,
  },
  card: {
    backgroundColor: "#6366f1",
    borderRadius: 20,
    padding: 20,
    position: "relative",
    overflow: "hidden",
  },
  cardAlt: {
    backgroundColor: "#1e293b",
    borderRadius: 20,
    padding: 20,
    position: "relative",
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#334155",
  },
  cardIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: "rgba(255,255,255,0.2)",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  cardIconContainerAlt: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: "#334155",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  cardIcon: {
    fontSize: 24,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: "rgba(255,255,255,0.8)",
    lineHeight: 20,
  },
  cardBadge: {
    position: "absolute",
    top: 16,
    right: 16,
    backgroundColor: "#22c55e",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  cardBadgeText: {
    color: "#ffffff",
    fontSize: 11,
    fontWeight: "bold",
  },
  cardBadgeAlt: {
    position: "absolute",
    top: 16,
    right: 16,
    backgroundColor: "#475569",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  cardBadgeTextAlt: {
    color: "#94a3b8",
    fontSize: 11,
    fontWeight: "bold",
  },
  infoBox: {
    marginTop: 32,
    backgroundColor: "#1e293b",
    borderRadius: 16,
    padding: 16,
    borderLeftWidth: 4,
    borderLeftColor: "#6366f1",
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#ffffff",
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    color: "#94a3b8",
    lineHeight: 22,
  },
  techStack: {
    marginTop: 24,
  },
  techTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#64748b",
    marginBottom: 12,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  techRow: {
    flexDirection: "row",
    gap: 16,
  },
  techItem: {
    flex: 1,
    backgroundColor: "#1e293b",
    borderRadius: 12,
    padding: 12,
  },
  techLabel: {
    fontSize: 12,
    color: "#64748b",
    marginBottom: 4,
  },
  techValue: {
    fontSize: 16,
    fontWeight: "600",
    color: "#e2e8f0",
  },
});
