import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ExploreScreen() {
  return (
    <SafeAreaView style={styles.container} edges={["bottom"]}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Explore</Text>
            <Text style={styles.subtitle}>
              Discover features and learn more about Expo.
            </Text>
          </View>

          <View style={styles.cardsContainer}>
            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <View style={[styles.iconContainer, styles.blueIcon]}>
                  <Text style={styles.icon}>📁</Text>
                </View>
                <Text style={styles.cardTitle}>File-based Routing</Text>
              </View>
              <Text style={styles.cardDescription}>
                This app uses Expo Router for file-based navigation. Each file
                in the app directory becomes a route.
              </Text>
            </View>

            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <View style={[styles.iconContainer, styles.tealIcon]}>
                  <Text style={styles.icon}>🎨</Text>
                </View>
                <Text style={styles.cardTitle}>Tailwind CSS</Text>
              </View>
              <Text style={styles.cardDescription}>
                Styled with standard React Native StyleSheet for rapid UI
                development with utility classes.
              </Text>
            </View>

            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <View style={[styles.iconContainer, styles.purpleIcon]}>
                  <Text style={styles.icon}>📱</Text>
                </View>
                <Text style={styles.cardTitle}>Cross-Platform</Text>
              </View>
              <Text style={styles.cardDescription}>
                Build for iOS, Android, and web from a single codebase using
                React Native and Expo.
              </Text>
            </View>

            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <View style={[styles.iconContainer, styles.yellowIcon]}>
                  <Text style={styles.icon}>⚡</Text>
                </View>
                <Text style={styles.cardTitle}>SDK 55 Canary</Text>
              </View>
              <Text style={styles.cardDescription}>
                Running on the latest Expo SDK with React Native 0.83 and the
                New Architecture.
              </Text>
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
    gap: 16,
  },
  card: {
    backgroundColor: "#1e293b", // slate-800
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: "#334155", // slate-700
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  blueIcon: {
    backgroundColor: "rgba(59, 130, 246, 0.2)", // blue-500/20
  },
  tealIcon: {
    backgroundColor: "rgba(20, 184, 166, 0.2)", // teal-500/20
  },
  purpleIcon: {
    backgroundColor: "rgba(168, 85, 247, 0.2)", // purple-500/20
  },
  yellowIcon: {
    backgroundColor: "rgba(234, 179, 8, 0.2)", // yellow-500/20
  },
  icon: {
    fontSize: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
  },
  cardDescription: {
    color: "#94a3b8", // slate-400
    lineHeight: 20,
    paddingLeft: 52, // 40 (icon) + 12 (margin)
  },
});
