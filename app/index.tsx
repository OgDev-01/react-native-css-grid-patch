import { Link } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container} edges={["bottom"]}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>CSS Grid Test 🎨</Text>
            <Text style={styles.subtitle}>
              Comparing CSS Grid vs Flexbox layouts in React Native
            </Text>
          </View>

          <View style={styles.cardsContainer}>
            <Link href="/grid-example" asChild>
              <Pressable
                style={({ pressed }) => [
                  styles.card,
                  styles.gridCard,
                  pressed && styles.pressed,
                ]}
              >
                <View style={styles.cardHeader}>
                  <View
                    style={[styles.iconContainer, styles.gridIconContainer]}
                  >
                    <Text style={styles.icon}>📐</Text>
                  </View>
                  <View style={[styles.badge, styles.gridBadge]}>
                    <Text style={styles.badgeText}>NEW</Text>
                  </View>
                </View>
                <Text style={styles.cardTitle}>CSS Grid Example</Text>
                <Text style={styles.cardDescriptionGrid}>
                  Native CSS Grid layout with gridTemplateColumns,
                  gridTemplateRows, and grid item placement
                </Text>
              </Pressable>
            </Link>

            <Link href="/flexbox-example" asChild>
              <Pressable
                style={({ pressed }) => [
                  styles.card,
                  styles.flexCard,
                  pressed && styles.pressed,
                ]}
              >
                <View style={styles.cardHeader}>
                  <View
                    style={[styles.iconContainer, styles.flexIconContainer]}
                  >
                    <Text style={styles.icon}>📦</Text>
                  </View>
                  <View style={[styles.badge, styles.flexBadge]}>
                    <Text style={styles.flexBadgeText}>TRADITIONAL</Text>
                  </View>
                </View>
                <Text style={styles.cardTitle}>Flexbox Example</Text>
                <Text style={styles.cardDescriptionFlex}>
                  Traditional flexbox approach with nested Views and manual row
                  management
                </Text>
              </Pressable>
            </Link>
          </View>

          <View style={styles.aboutBox}>
            <Text style={styles.aboutTitle}>About this demo</Text>
            <Text style={styles.aboutText}>
              This project demonstrates the CSS Grid patch for React Native from
              @intergalacticspacehighway. Compare the two examples to see how
              Grid simplifies complex layouts.
            </Text>
          </View>

          <View>
            <Text style={styles.techStackTitle}>Tech Stack</Text>
            <View style={styles.techStackRow}>
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
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a", // slate-900
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
  },
  header: {
    paddingVertical: 32,
  },
  titleContainer: {
    marginBottom: 32,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: "#94a3b8", // slate-400
    lineHeight: 24,
  },
  cardsContainer: {
    gap: 24,
    marginBottom: 32,
  },
  card: {
    borderRadius: 16,
    padding: 24,
    borderWidth: 1,
  },
  pressed: {
    opacity: 0.8,
  },
  gridCard: {
    backgroundColor: "rgba(79, 70, 229, 0.2)", // indigo-600/20
    borderColor: "rgba(99, 102, 241, 0.3)", // indigo-500/30
  },
  flexCard: {
    backgroundColor: "#1e293b", // slate-800
    borderColor: "#334155", // slate-700
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  gridIconContainer: {
    backgroundColor: "rgba(99, 102, 241, 0.2)", // indigo-500/20
  },
  flexIconContainer: {
    backgroundColor: "#334155", // slate-700
  },
  icon: {
    fontSize: 24,
  },
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 9999,
  },
  gridBadge: {
    backgroundColor: "#6366f1", // indigo-500
  },
  flexBadge: {
    backgroundColor: "#334155", // slate-700
  },
  badgeText: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "bold",
  },
  flexBadgeText: {
    color: "#cbd5e1", // slate-300
    fontSize: 12,
    fontWeight: "bold",
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 8,
  },
  cardDescriptionGrid: {
    color: "#c7d2fe", // indigo-200
    lineHeight: 20,
  },
  cardDescriptionFlex: {
    color: "#94a3b8", // slate-400
    lineHeight: 20,
  },
  aboutBox: {
    backgroundColor: "rgba(30, 41, 59, 0.5)", // slate-800/50
    borderRadius: 12,
    padding: 20,
    marginBottom: 32,
    borderWidth: 1,
    borderColor: "#1e293b", // slate-800
  },
  aboutTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#ffffff",
    marginBottom: 8,
  },
  aboutText: {
    color: "#94a3b8", // slate-400
    lineHeight: 20,
  },
  techStackTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#64748b", // slate-500
    textTransform: "uppercase",
    letterSpacing: 1, // tracking-wider
    marginBottom: 16,
  },
  techStackRow: {
    flexDirection: "row",
    gap: 12,
  },
  techItem: {
    backgroundColor: "#1e293b", // slate-800
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#334155", // slate-700
  },
  techLabel: {
    color: "#94a3b8", // slate-400
    fontSize: 12,
    marginBottom: 4,
  },
  techValue: {
    color: "#ffffff",
    fontWeight: "600",
  },
});
