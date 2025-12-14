import { ScrollView, StyleSheet, Text, View } from "react-native";
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
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Flexbox Layout</Text>
            <Text style={styles.subtitle}>
              Traditional grid-like layouts in React Native
            </Text>
          </View>

          {/* Dashboard Flexbox Example */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Dashboard Example</Text>
          </View>

          <View style={styles.dashboardContainer}>
            {/* Header - full width */}
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Dashboard</Text>
              <Text style={styles.cardSubtitle}>
                Flexbox approach in React Native
              </Text>
            </View>

            {/* Row with two cards */}
            <View style={styles.row}>
              <View style={[styles.statCard, styles.revenueCard]}>
                <Text style={[styles.statLabel, styles.revenueLabel]}>
                  REVENUE
                </Text>
                <Text style={styles.statValue}>$12,875</Text>
                <Text style={[styles.statChange, styles.revenueChange]}>
                  +12.5% from last month
                </Text>
              </View>

              <View style={[styles.statCard, styles.usersCard]}>
                <Text style={[styles.statLabel, styles.usersLabel]}>USERS</Text>
                <Text style={styles.statValue}>8,420</Text>
                <Text style={[styles.statChange, styles.usersChange]}>
                  +3.2% from last week
                </Text>
              </View>
            </View>

            {/* Activity Overview - full width */}
            <View style={styles.card}>
              <Text style={styles.activityTitle}>Activity Overview</Text>
              <View style={styles.chartContainer}>
                {[40, 65, 45, 80, 55, 90, 70].map((height, index) => (
                  <View
                    key={index}
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

          {/* Simple Grid Example with Flexbox */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>3-Column Grid (Flexbox)</Text>
          </View>

          {/* Must manually create rows */}
          <View style={styles.gridContainer}>
            <View style={styles.row}>
              {[1, 2, 3].map((num) => (
                <View key={num} style={styles.gridItem}>
                  <Text style={styles.gridItemText}>{num}</Text>
                </View>
              ))}
            </View>
            <View style={styles.row}>
              {[4, 5, 6].map((num) => (
                <View key={num} style={styles.gridItem}>
                  <Text style={styles.gridItemText}>{num}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Complex Spanning Layout - Very Verbose with Flexbox */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Complex Layout (Verbose!)</Text>
          </View>

          <View style={styles.complexContainer}>
            {/* Row 1: Item spanning 2 columns + 1 item */}
            <View style={styles.rowSmallGap}>
              <View style={[styles.complexItem, styles.spanTwoCols]}>
                <Text style={styles.pinkText}>Spans 2 columns</Text>
              </View>
              <View style={styles.complexItem}>
                <Text style={styles.violetText}>1</Text>
              </View>
            </View>

            {/* Row 2 & 3: Need nested structure for row-spanning */}
            <View style={styles.rowSmallGap}>
              <View style={styles.nestedCol}>
                <View style={styles.rowSmallGap}>
                  <View style={styles.complexItem}>
                    <Text style={styles.violetText}>2</Text>
                  </View>
                  <View style={styles.complexItem}>
                    <Text style={styles.violetText}>3</Text>
                  </View>
                </View>
                <View style={styles.rowSmallGap}>
                  <View style={styles.complexItem}>
                    <Text style={styles.violetText}>4</Text>
                  </View>
                  <View style={styles.complexItem}>
                    <Text style={styles.violetText}>5</Text>
                  </View>
                </View>
              </View>
              <View style={[styles.complexItem, styles.spanTwoRows]}>
                <Text style={styles.orangeText}>Spans 2 rows</Text>
              </View>
            </View>
          </View>

          {/* Fractional Units with Flexbox */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Proportional Sizing (flex)</Text>
          </View>

          <View style={[styles.rowSmallGap, styles.marginBottom]}>
            <View style={[styles.flexItem, styles.flex1]}>
              <Text style={styles.tealText}>flex: 1</Text>
            </View>
            <View style={[styles.flexItem, styles.flex2]}>
              <Text style={styles.tealText}>flex: 2</Text>
            </View>
            <View style={[styles.flexItem, styles.flex1]}>
              <Text style={styles.tealText}>flex: 1</Text>
            </View>
          </View>

          <View style={styles.warningBox}>
            <Text style={styles.warningText}>
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
            <View style={styles.comparisonRowLast}>
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
  dashboardContainer: {
    gap: 16,
    marginBottom: 32,
  },
  card: {
    backgroundColor: "#1e293b", // slate-800
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#334155", // slate-700
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 4,
  },
  cardSubtitle: {
    color: "#94a3b8", // slate-400
  },
  row: {
    flexDirection: "row",
    gap: 16,
  },
  statCard: {
    flex: 1,
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
  },
  revenueCard: {
    backgroundColor: "rgba(6, 78, 59, 0.2)", // emerald-900/20
    borderColor: "rgba(16, 185, 129, 0.2)", // emerald-500/20
  },
  usersCard: {
    backgroundColor: "rgba(30, 58, 138, 0.2)", // blue-900/20
    borderColor: "rgba(59, 130, 246, 0.2)", // blue-500/20
  },
  statLabel: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 8,
  },
  revenueLabel: {
    color: "#34d399", // emerald-400
  },
  usersLabel: {
    color: "#60a5fa", // blue-400
  },
  statValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 4,
  },
  statChange: {
    fontSize: 12,
  },
  revenueChange: {
    color: "rgba(52, 211, 153, 0.8)", // emerald-400/80
  },
  usersChange: {
    color: "rgba(96, 165, 250, 0.8)", // blue-400/80
  },
  activityTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#ffffff",
    marginBottom: 16,
  },
  chartContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    height: 128, // h-32
    gap: 8,
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
  gridContainer: {
    gap: 16,
    marginBottom: 32,
  },
  gridItem: {
    flex: 1,
    aspectRatio: 1,
    backgroundColor: "#1e293b", // slate-800
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#334155", // slate-700
  },
  gridItemText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#94a3b8", // slate-400
  },
  complexContainer: {
    gap: 8,
    marginBottom: 32,
  },
  rowSmallGap: {
    flexDirection: "row",
    gap: 8,
  },
  complexItem: {
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
  },
  spanTwoCols: {
    flex: 2,
    backgroundColor: "rgba(236, 72, 153, 0.2)", // pink-500/20
    borderWidth: 1,
    borderColor: "rgba(236, 72, 153, 0.3)", // pink-500/30
    minHeight: 80,
  },
  nestedCol: {
    flex: 2,
    gap: 8,
  },
  spanTwoRows: {
    flex: 1,
    backgroundColor: "rgba(249, 115, 22, 0.2)", // orange-500/20
    borderWidth: 1,
    borderColor: "rgba(249, 115, 22, 0.3)", // orange-500/30
  },
  pinkText: {
    color: "#fbcfe8", // pink-200
    fontWeight: "600",
    textAlign: "center",
  },
  violetText: {
    color: "#ddd6fe", // violet-200
    fontWeight: "600",
    textAlign: "center",
  },
  orangeText: {
    color: "#fed7aa", // orange-200
    fontWeight: "600",
    textAlign: "center",
  },
  marginBottom: {
    marginBottom: 32,
  },
  flexItem: {
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  flex1: {
    flex: 1,
    backgroundColor: "rgba(20, 184, 166, 0.2)", // teal-500/20
    borderWidth: 1,
    borderColor: "rgba(20, 184, 166, 0.3)", // teal-500/30
  },
  flex2: {
    flex: 2,
    backgroundColor: "rgba(13, 148, 136, 0.2)", // teal-600/20
    borderWidth: 1,
    borderColor: "rgba(13, 148, 136, 0.3)", // teal-600/30
  },
  tealText: {
    color: "#99f6e4", // teal-200
    fontWeight: "bold",
  },
  warningBox: {
    backgroundColor: "rgba(30, 41, 59, 0.5)", // slate-800/50
    borderLeftWidth: 4,
    borderLeftColor: "#f97316", // orange-500
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    padding: 16,
    marginBottom: 32,
  },
  warningText: {
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
    color: "#e2e8f0", // slate-200
    fontWeight: "500",
  },
});
