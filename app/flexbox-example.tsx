import { View, Text, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

/**
 * Flexbox Example Screen
 *
 * This screen demonstrates the traditional approach to creating grid-like layouts
 * in React Native using Flexbox. This is the "before" version compared to the
 * CSS Grid example.
 *
 * Traditional Flexbox Approach:
 * - Uses nested Views with flexDirection: 'row'
 * - Requires manual row management and wrapping
 * - Uses flex: 1, flex: 2 for proportional sizing
 * - More verbose for complex grid layouts
 *
 * Compare this to grid-example.tsx to see the difference!
 */

export default function FlexboxExampleScreen() {
  return (
    <SafeAreaView style={styles.container} edges={["bottom"]}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <Text style={styles.title}>Flexbox Layout</Text>
          <Text style={styles.subtitle}>
            Traditional grid-like layouts in React Native
          </Text>

          {/* Dashboard Flexbox Example */}
          <View style={styles.sectionTitle}>
            <Text style={styles.sectionTitleText}>Dashboard Example</Text>
          </View>

          <View style={styles.dashboardContainer}>
            {/* Header - full width */}
            <View style={styles.headerCard}>
              <Text style={styles.cardTitle}>Dashboard</Text>
              <Text style={styles.cardSubtitle}>
                Flexbox approach in React Native
              </Text>
            </View>

            {/* Row with two cards */}
            <View style={styles.cardRow}>
              <View style={[styles.card, styles.revenueCard]}>
                <Text style={styles.cardLabel}>REVENUE</Text>
                <Text style={styles.cardValue}>$12,875</Text>
                <Text style={styles.cardChange}>+12.5% from last month</Text>
              </View>

              <View style={[styles.card, styles.usersCard]}>
                <Text style={styles.cardLabel}>USERS</Text>
                <Text style={styles.cardValue}>8,420</Text>
                <Text style={styles.cardChange}>+3.2% from last week</Text>
              </View>
            </View>

            {/* Activity Overview - full width */}
            <View style={styles.activityCard}>
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

          {/* Simple Grid Example with Flexbox */}
          <View style={styles.sectionTitle}>
            <Text style={styles.sectionTitleText}>3-Column Grid (Flexbox)</Text>
          </View>

          {/* Must manually create rows */}
          <View style={styles.flexGridContainer}>
            <View style={styles.flexRow}>
              {[1, 2, 3].map((num) => (
                <View key={num} style={styles.flexGridItem}>
                  <Text style={styles.flexGridText}>{num}</Text>
                </View>
              ))}
            </View>
            <View style={styles.flexRow}>
              {[4, 5, 6].map((num) => (
                <View key={num} style={styles.flexGridItem}>
                  <Text style={styles.flexGridText}>{num}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Complex Spanning Layout - Very Verbose with Flexbox */}
          <View style={styles.sectionTitle}>
            <Text style={styles.sectionTitleText}>
              Complex Layout (Verbose!)
            </Text>
          </View>

          <View style={styles.complexContainer}>
            {/* Row 1: Item spanning 2 columns + 1 item */}
            <View style={styles.flexRow}>
              <View style={[styles.complexItem, styles.spanTwoFlex]}>
                <Text style={styles.complexItemText}>Spans 2 columns</Text>
              </View>
              <View style={styles.complexItem}>
                <Text style={styles.complexItemText}>1</Text>
              </View>
            </View>

            {/* Row 2 & 3: Need nested structure for row-spanning */}
            <View style={styles.flexRow}>
              <View style={styles.twoThirdsContainer}>
                <View style={styles.flexRow}>
                  <View style={styles.complexItem}>
                    <Text style={styles.complexItemText}>2</Text>
                  </View>
                  <View style={styles.complexItem}>
                    <Text style={styles.complexItemText}>3</Text>
                  </View>
                </View>
                <View style={styles.flexRow}>
                  <View style={styles.complexItem}>
                    <Text style={styles.complexItemText}>4</Text>
                  </View>
                  <View style={styles.complexItem}>
                    <Text style={styles.complexItemText}>5</Text>
                  </View>
                </View>
              </View>
              <View style={[styles.complexItem, styles.spanTwoRowsFlex]}>
                <Text style={styles.complexItemText}>Spans 2 rows</Text>
              </View>
            </View>
          </View>

          {/* Fractional Units with Flexbox */}
          <View style={styles.sectionTitle}>
            <Text style={styles.sectionTitleText}>
              Proportional Sizing (flex)
            </Text>
          </View>

          <View style={styles.flexRow}>
            <View style={[styles.frItem, { flex: 1 }]}>
              <Text style={styles.frText}>flex: 1</Text>
            </View>
            <View style={[styles.frItem, styles.fr2Flex]}>
              <Text style={styles.frText}>flex: 2</Text>
            </View>
            <View style={[styles.frItem, { flex: 1 }]}>
              <Text style={styles.frText}>flex: 1</Text>
            </View>
          </View>

          <View style={styles.codeHint}>
            <Text style={styles.codeHintText}>
              ⚠️ Notice how this requires more nested Views and manual row
              management compared to CSS Grid!
            </Text>
          </View>

          <View style={styles.comparisonBox}>
            <Text style={styles.comparisonTitle}>Flexbox vs Grid</Text>
            <View style={styles.comparisonRow}>
              <Text style={styles.comparisonLabel}>Row spanning:</Text>
              <Text style={styles.comparisonValue}>
                Complex nested structures
              </Text>
            </View>
            <View style={styles.comparisonRow}>
              <Text style={styles.comparisonLabel}>Column spanning:</Text>
              <Text style={styles.comparisonValue}>Use flex ratios</Text>
            </View>
            <View style={styles.comparisonRow}>
              <Text style={styles.comparisonLabel}>Auto-placement:</Text>
              <Text style={styles.comparisonValue}>Manual row management</Text>
            </View>
            <View style={styles.comparisonRow}>
              <Text style={styles.comparisonLabel}>Code verbosity:</Text>
              <Text style={styles.comparisonValue}>High (more nesting)</Text>
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

  // Dashboard with Flexbox
  dashboardContainer: {
    gap: 12,
  },
  headerCard: {
    backgroundColor: "#6366f1",
    borderRadius: 16,
    padding: 16,
    height: 100,
    justifyContent: "center",
  },
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
  cardRow: {
    flexDirection: "row",
    gap: 12,
  },
  card: {
    flex: 1,
    borderRadius: 16,
    padding: 16,
    height: 120,
    justifyContent: "space-between",
  },
  revenueCard: {
    backgroundColor: "#f43f5e",
  },
  usersCard: {
    backgroundColor: "#10b981",
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
    borderRadius: 16,
    padding: 16,
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
    borderRadius: 4,
  },

  // Flexbox Grid - requires manual rows
  flexGridContainer: {
    gap: 8,
  },
  flexRow: {
    flexDirection: "row",
    gap: 8,
  },
  flexGridItem: {
    flex: 1,
    backgroundColor: "#3b82f6",
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  flexGridText: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
  },

  // Complex spanning - very verbose with flexbox
  complexContainer: {
    gap: 8,
  },
  complexItem: {
    flex: 1,
    backgroundColor: "#8b5cf6",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    minHeight: 80,
  },
  spanTwoFlex: {
    flex: 2,
    backgroundColor: "#ec4899",
  },
  twoThirdsContainer: {
    flex: 2,
    gap: 8,
  },
  spanTwoRowsFlex: {
    backgroundColor: "#f97316",
  },
  complexItemText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
  },

  // Fractional sizing with flex
  frItem: {
    backgroundColor: "#14b8a6",
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  fr2Flex: {
    flex: 2,
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
    borderLeftColor: "#f97316",
  },
  codeHintText: {
    color: "#94a3b8",
    fontSize: 14,
    lineHeight: 20,
  },

  comparisonBox: {
    marginTop: 16,
    backgroundColor: "#1e293b",
    borderRadius: 12,
    padding: 16,
  },
  comparisonTitle: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 12,
  },
  comparisonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#334155",
  },
  comparisonLabel: {
    color: "#94a3b8",
    fontSize: 14,
  },
  comparisonValue: {
    color: "#e2e8f0",
    fontSize: 14,
    fontWeight: "500",
  },
});
