import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

/**
 * CSS Grid Example Screen
 *
 * This screen demonstrates the new CSS Grid layout capabilities added to React Native
 * via the css-grid-patch from intergalacticspacehighway.
 *
 * Key Grid Properties:
 * - display: 'grid' - Enables grid layout on a container
 * - gridTemplateColumns: Array of track sizes (numbers, 'auto', '1fr', percentages)
 * - gridTemplateRows: Array of track sizes for rows
 * - gridColumnStart/End: Position items on specific grid columns
 * - gridRowStart/End: Position items on specific grid rows
 * - gap: Works with grid just like flexbox
 *
 * Note: This requires the CSS Grid patch to be applied to react-native.
 * Without the patch, grid styles will be ignored and fallback to default layout.
 */

export default function GridExampleScreen() {
  return (
    <SafeAreaView style={styles.container} edges={["bottom"]}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>CSS Grid Layout</Text>
            <Text style={styles.subtitle}>
              Native grid support in React Native
            </Text>
          </View>

          {/* Dashboard Grid Example */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Dashboard Example</Text>
          </View>

          {/*
            Using inline styles for grid properties to ensure they are applied correctly
            with the patch, while using StyleSheet for visual styling.

            gridTemplateColumns: '1fr 1fr' -> Two equal columns
            gap: 16 -> 16px gap between items
          */}
          <View
            style={[
              styles.gridContainer,
              {
                display: "grid",
                gridTemplateColumns: ["1fr", "1fr"],
                gap: 16,
              },
            ]}
          >
            {/* Header - spans 2 columns */}
            <View
              style={[
                styles.card,
                styles.headerCard,
                { gridColumnStart: 1, gridColumnEnd: 3 },
              ]}
            >
              <Text style={styles.cardTitle}>Dashboard</Text>
              <Text style={styles.cardSubtitle}>CSS Grid in React Native</Text>
            </View>

            {/* Revenue Card */}
            <View style={[styles.card, styles.revenueCard]}>
              <Text style={styles.revenueLabel}>REVENUE</Text>
              <Text style={styles.revenueValue}>$12,875</Text>
              <Text style={styles.revenueChange}>+12.5% from last month</Text>
            </View>

            {/* Users Card */}
            <View style={[styles.card, styles.usersCard]}>
              <Text style={styles.usersLabel}>USERS</Text>
              <Text style={styles.usersValue}>8,420</Text>
              <Text style={styles.usersChange}>+3.2% from last week</Text>
            </View>

            {/* Activity Overview - spans 2 columns */}
            <View
              style={[
                styles.card,
                styles.activityCard,
                { gridColumnStart: 1, gridColumnEnd: 3 },
              ]}
            >
              <Text style={styles.activityTitle}>Activity Overview</Text>
              <View style={styles.chartContainer}>
                {[40, 65, 45, 80, 55, 90, 70].map((height, index) => (
                  <View
                    key={Math.random().toString()}
                    style={[
                      styles.chartBar,
                      index === 5
                        ? styles.chartBarActive
                        : styles.chartBarInactive,
                      { height: `${height}%` },
                    ]}
                  />
                ))}
              </View>
            </View>
          </View>

          {/* Simple Grid Example */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>3-Column Grid</Text>
          </View>

          <View
            style={[
              styles.gridContainer,
              {
                display: "grid",
                gridTemplateColumns: ["1fr", "1fr", "1fr"],
                gap: 16,
              },
            ]}
          >
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <View key={num} style={styles.simpleGridItem}>
                <Text style={styles.simpleGridText}>{num}</Text>
              </View>
            ))}
          </View>

          {/* Grid with Spanning Items */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Grid with Spanning</Text>
          </View>

          <View
            style={[
              styles.gridContainer,
              {
                display: "grid",
                gridTemplateColumns: ["1fr", "1fr", "1fr"],
                gap: 8,
              },
            ]}
          >
            <View
              style={[
                styles.spanItem,
                styles.pinkItem,
                { gridColumnStart: 1, gridColumnEnd: 3 },
              ]}
            >
              <Text style={styles.itemText}>Spans 2 columns</Text>
            </View>
            <View style={[styles.spanItem, styles.violetItem]}>
              <Text style={styles.itemText}>1</Text>
            </View>

            <View style={[styles.spanItem, styles.violetItem]}>
              <Text style={styles.itemText}>2</Text>
            </View>
            <View style={[styles.spanItem, styles.violetItem]}>
              <Text style={styles.itemText}>3</Text>
            </View>
            <View
              style={[
                styles.spanItem,
                styles.orangeItem,
                { gridRowStart: 2, gridRowEnd: 4, gridColumnStart: 3 },
              ]}
            >
              <Text style={styles.itemText}>Spans 2 rows</Text>
            </View>

            <View style={[styles.spanItem, styles.violetItem]}>
              <Text style={styles.itemText}>4</Text>
            </View>
            <View style={[styles.spanItem, styles.violetItem]}>
              <Text style={styles.itemText}>5</Text>
            </View>
          </View>

          {/* Fractional Units */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Fractional Units (fr)</Text>
          </View>

          <View
            style={[
              styles.gridContainer,
              {
                display: "grid",
                gridTemplateColumns: ["1fr", "2fr", "1fr"],
                gap: 8,
              },
            ]}
          >
            <View style={[styles.frItem, styles.tealItem]}>
              <Text style={styles.frText}>1fr</Text>
            </View>
            <View style={[styles.frItem, styles.tealDarkItem]}>
              <Text style={styles.frText}>2fr</Text>
            </View>
            <View style={[styles.frItem, styles.tealItem]}>
              <Text style={styles.frText}>1fr</Text>
            </View>
          </View>

          <View style={styles.infoBox}>
            <Text style={styles.infoText}>
              ✨ Notice how clean the structure is! No nested Views required for
              rows or complex spanning.
            </Text>
          </View>

          <View style={styles.comparisonBox}>
            <Text style={styles.comparisonTitle}>Grid Advantages</Text>
            <View style={styles.comparisonRow}>
              <Text style={styles.comparisonLabel}>Row spanning:</Text>
              <Text style={styles.comparisonValue}>Easy (gridRow)</Text>
            </View>
            <View style={styles.comparisonRow}>
              <Text style={styles.comparisonLabel}>Column spanning:</Text>
              <Text style={styles.comparisonValue}>Easy (gridColumn)</Text>
            </View>
            <View style={styles.comparisonRow}>
              <Text style={styles.comparisonLabel}>Auto-placement:</Text>
              <Text style={styles.comparisonValue}>Automatic</Text>
            </View>
            <View style={styles.comparisonRowLast}>
              <Text style={styles.comparisonLabel}>Code verbosity:</Text>
              <Text style={styles.comparisonValue}>Low (flat structure)</Text>
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
    fontSize: 30,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: "#94a3b8", // slate-400
    lineHeight: 24,
  },
  sectionHeader: {
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#1e293b", // slate-800
    paddingBottom: 8,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#64748b", // slate-500
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  gridContainer: {
    marginBottom: 32,
  },
  card: {
    padding: 20,
    borderRadius: 16,
  },
  headerCard: {
    backgroundColor: "#4f46e5", // indigo-600
    justifyContent: "center",
    height: 100,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 4,
  },
  cardSubtitle: {
    color: "#c7d2fe", // indigo-200
    fontSize: 14,
  },
  revenueCard: {
    backgroundColor: "#f43f5e", // rose-500
    justifyContent: "space-between",
    height: 120,
  },
  revenueLabel: {
    color: "#ffe4e6", // rose-100
    fontSize: 12,
    fontWeight: "bold",
  },
  revenueValue: {
    color: "#ffffff",
    fontSize: 30,
    fontWeight: "bold",
  },
  revenueChange: {
    color: "#fecdd3", // rose-200
    fontSize: 12,
  },
  usersCard: {
    backgroundColor: "#10b981", // emerald-500
    justifyContent: "space-between",
    height: 120,
  },
  usersLabel: {
    color: "#d1fae5", // emerald-100
    fontSize: 12,
    fontWeight: "bold",
  },
  usersValue: {
    color: "#ffffff",
    fontSize: 30,
    fontWeight: "bold",
  },
  usersChange: {
    color: "#a7f3d0", // emerald-200
    fontSize: 12,
  },
  activityCard: {
    backgroundColor: "#1e293b", // slate-800
    height: 160,
  },
  activityTitle: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 12,
  },
  chartContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 8,
    flex: 1,
  },
  chartBar: {
    flex: 1,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  chartBarActive: {
    backgroundColor: "#6366f1", // indigo-500
  },
  chartBarInactive: {
    backgroundColor: "#334155", // slate-700
  },
  simpleGridItem: {
    aspectRatio: 1,
    backgroundColor: "#3b82f6", // blue-500
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  simpleGridText: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
  },
  spanItem: {
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
  },
  pinkItem: {
    backgroundColor: "#ec4899", // pink-500
    minHeight: 80,
  },
  violetItem: {
    backgroundColor: "#8b5cf6", // violet-500
    minHeight: 80,
  },
  orangeItem: {
    backgroundColor: "#f97316", // orange-500
  },
  itemText: {
    color: "#ffffff",
    fontWeight: "600",
    textAlign: "center",
  },
  frItem: {
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  tealItem: {
    backgroundColor: "#14b8a6", // teal-500
  },
  tealDarkItem: {
    backgroundColor: "#0d9488", // teal-600
  },
  frText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
  infoBox: {
    backgroundColor: "rgba(30, 41, 59, 0.5)", // slate-800/50
    borderLeftWidth: 4,
    borderLeftColor: "#6366f1", // indigo-500
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    padding: 16,
    marginBottom: 32,
  },
  infoText: {
    color: "#94a3b8", // slate-400
    lineHeight: 20,
  },
  comparisonBox: {
    backgroundColor: "#1e293b", // slate-800
    borderRadius: 12,
    padding: 16,
    marginBottom: 32,
  },
  comparisonTitle: {
    color: "#ffffff",
    fontWeight: "600",
    marginBottom: 12,
  },
  comparisonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#334155", // slate-700
  },
  comparisonRowLast: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
  },
  comparisonLabel: {
    color: "#94a3b8", // slate-400
  },
  comparisonValue: {
    color: "#34d399", // emerald-400
    fontWeight: "500",
  },
});
