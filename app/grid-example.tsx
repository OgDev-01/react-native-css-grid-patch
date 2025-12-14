import { View, Text, ScrollView, StyleSheet, ViewStyle } from "react-native";
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
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <Text style={styles.title}>CSS Grid Layout</Text>
          <Text style={styles.subtitle}>
            Native grid support in React Native
          </Text>

          {/* Dashboard Grid Example */}
          <View style={styles.sectionTitle}>
            <Text style={styles.sectionTitleText}>Dashboard Example</Text>
          </View>

          <View style={styles.dashboardGrid}>
            {/* Header - spans 2 columns */}
            <View style={[styles.gridItem, styles.headerCard]}>
              <Text style={styles.cardTitle}>Dashboard</Text>
              <Text style={styles.cardSubtitle}>CSS Grid in React Native</Text>
            </View>

            {/* Revenue Card */}
            <View style={[styles.gridItem, styles.revenueCard]}>
              <Text style={styles.cardLabel}>REVENUE</Text>
              <Text style={styles.cardValue}>$12,875</Text>
              <Text style={styles.cardChange}>+12.5% from last month</Text>
            </View>

            {/* Users Card */}
            <View style={[styles.gridItem, styles.usersCard]}>
              <Text style={styles.cardLabel}>USERS</Text>
              <Text style={styles.cardValue}>8,420</Text>
              <Text style={styles.cardChange}>+3.2% from last week</Text>
            </View>

            {/* Activity Overview - spans 2 columns */}
            <View style={[styles.gridItem, styles.activityCard]}>
              <Text style={styles.activityTitle}>Activity Overview</Text>
              <View style={styles.chartContainer}>
                {[40, 65, 45, 80, 55, 90, 70].map((height, index) => (
                  <View
                    key={index}
                    style={[
                      styles.chartBar,
                      {
                        height: height,
                        backgroundColor: index === 5 ? "#6366f1" : "#334155",
                      },
                    ]}
                  />
                ))}
              </View>
            </View>
          </View>

          {/* Simple Grid Example */}
          <View style={styles.sectionTitle}>
            <Text style={styles.sectionTitleText}>3-Column Grid</Text>
          </View>

          <View style={styles.simpleGrid}>
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <View key={num} style={styles.simpleGridItem}>
                <Text style={styles.simpleGridText}>{num}</Text>
              </View>
            ))}
          </View>

          {/* Grid with Spanning Items */}
          <View style={styles.sectionTitle}>
            <Text style={styles.sectionTitleText}>Grid with Spanning</Text>
          </View>

          <View style={styles.spanningGrid}>
            <View style={[styles.spanItem, styles.spanTwoColumns]}>
              <Text style={styles.spanItemText}>Spans 2 columns</Text>
            </View>
            <View style={styles.spanItem}>
              <Text style={styles.spanItemText}>1</Text>
            </View>
            <View style={styles.spanItem}>
              <Text style={styles.spanItemText}>2</Text>
            </View>
            <View style={[styles.spanItem, styles.spanTwoRows]}>
              <Text style={styles.spanItemText}>Spans 2 rows</Text>
            </View>
            <View style={styles.spanItem}>
              <Text style={styles.spanItemText}>3</Text>
            </View>
          </View>

          {/* fr Units Example */}
          <View style={styles.sectionTitle}>
            <Text style={styles.sectionTitleText}>Fractional Units (fr)</Text>
          </View>

          <View style={styles.frGrid}>
            <View style={[styles.frItem, styles.fr1]}>
              <Text style={styles.frText}>1fr</Text>
            </View>
            <View style={[styles.frItem, styles.fr2]}>
              <Text style={styles.frText}>2fr</Text>
            </View>
            <View style={[styles.frItem, styles.fr1]}>
              <Text style={styles.frText}>1fr</Text>
            </View>
          </View>

          <View style={styles.codeHint}>
            <Text style={styles.codeHintText}>
              💡 Using display: 'grid' with gridTemplateColumns and
              gridTemplateRows
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

type GridTrackSize = number | string | {min: number | string; max: number | string};

type GridViewStyle = ViewStyle & {
  display?: "none" | "flex" | "contents" | "grid";
  gridTemplateColumns?: readonly GridTrackSize[];
  gridTemplateRows?: readonly GridTrackSize[];
  gridAutoColumns?: readonly GridTrackSize[];
  gridAutoRows?: readonly GridTrackSize[];
  gridColumnStart?: number | "auto" | `span ${number}`;
  gridColumnEnd?: number | "auto" | `span ${number}`;
  gridRowStart?: number | "auto" | `span ${number}`;
  gridRowEnd?: number | "auto" | `span ${number}`;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 16,
    paddingBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: "#94a3b8",
    marginBottom: 24,
  },
  sectionTitle: {
    marginTop: 24,
    marginBottom: 12,
  },
  sectionTitleText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#e2e8f0",
  },

  // Dashboard Grid - demonstrates complex grid layout
  dashboardGrid: {
    display: "grid",
    gridTemplateColumns: ["1fr", "1fr"] as const,
    gridTemplateRows: [100, 120, 160] as const,
    gap: 10,
  } satisfies GridViewStyle,
  gridItem: {
    borderRadius: 16,
    padding: 16,
  },
  headerCard: {
    backgroundColor: "#6366f1",
    gridColumnStart: 1,
    gridColumnEnd: 3,
    justifyContent: "center",
  } satisfies GridViewStyle,
  cardTitle: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "bold",
  },
  cardSubtitle: {
    color: "rgba(255,255,255,0.8)",
    fontSize: 14,
    marginTop: 4,
  },
  revenueCard: {
    backgroundColor: "#f43f5e",
    justifyContent: "space-between",
  },
  usersCard: {
    backgroundColor: "#10b981",
    justifyContent: "space-between",
  },
  cardLabel: {
    color: "rgba(255,255,255,0.8)",
    fontSize: 12,
    fontWeight: "600",
  },
  cardValue: {
    color: "#ffffff",
    fontSize: 28,
    fontWeight: "bold",
  },
  cardChange: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 12,
  },
  activityCard: {
    backgroundColor: "#1e293b",
    gridColumnStart: 1,
    gridColumnEnd: 3,
  } satisfies GridViewStyle,
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
    borderRadius: 4,
  },

  // Simple 3-column grid
  simpleGrid: {
    display: "grid",
    gridTemplateColumns: ["1fr", "1fr", "1fr"] as const,
    gap: 8,
  } satisfies GridViewStyle,
  simpleGridItem: {
    backgroundColor: "#3b82f6",
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  simpleGridText: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
  },

  // Grid with spanning items
  spanningGrid: {
    display: "grid",
    gridTemplateColumns: ["1fr", "1fr", "1fr"] as const,
    gridAutoRows: [80] as const,
    gap: 8,
  } satisfies GridViewStyle,
  spanItem: {
    backgroundColor: "#8b5cf6",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
  },
  spanTwoColumns: {
    gridColumnStart: 1,
    gridColumnEnd: 3,
    backgroundColor: "#ec4899",
  } satisfies GridViewStyle,
  spanTwoRows: {
    gridRowStart: 2,
    gridRowEnd: 4,
    backgroundColor: "#f97316",
  } satisfies GridViewStyle,
  spanItemText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
  },

  // Fractional units example
  frGrid: {
    display: "grid",
    gridTemplateColumns: ["1fr", "2fr", "1fr"] as const,
    gap: 8,
  } satisfies GridViewStyle,
  frItem: {
    backgroundColor: "#14b8a6",
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  fr1: {
    backgroundColor: "#14b8a6",
  },
  fr2: {
    backgroundColor: "#0d9488",
  },
  frText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },

  codeHint: {
    marginTop: 32,
    backgroundColor: "#1e293b",
    borderRadius: 12,
    padding: 16,
    borderLeftWidth: 4,
    borderLeftColor: "#6366f1",
  },
  codeHintText: {
    color: "#94a3b8",
    fontSize: 14,
    lineHeight: 20,
  },
});
