import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ExploreScreen() {
  return (
    <SafeAreaView className="flex-1 bg-slate-900" edges={["bottom"]}>
      <ScrollView className="flex-1 px-4">
        <View className="py-6">
          <Text className="text-2xl font-bold text-white mb-2">Explore</Text>
          <Text className="text-slate-400 mb-6">
            Discover features and learn more about Expo.
          </Text>

          <View className="gap-4">
            <View className="bg-slate-800 rounded-xl p-4">
              <Text className="text-lg font-semibold text-white mb-2">
                📁 File-based Routing
              </Text>
              <Text className="text-slate-400">
                This app uses Expo Router for file-based navigation. Each file
                in the app directory becomes a route.
              </Text>
            </View>

            <View className="bg-slate-800 rounded-xl p-4">
              <Text className="text-lg font-semibold text-white mb-2">
                🎨 Tailwind CSS
              </Text>
              <Text className="text-slate-400">
                Styled with Uniwind and Tailwind CSS v4 for rapid UI
                development with utility classes.
              </Text>
            </View>

            <View className="bg-slate-800 rounded-xl p-4">
              <Text className="text-lg font-semibold text-white mb-2">
                📱 Cross-Platform
              </Text>
              <Text className="text-slate-400">
                Build for iOS, Android, and web from a single codebase using
                React Native and Expo.
              </Text>
            </View>

            <View className="bg-slate-800 rounded-xl p-4">
              <Text className="text-lg font-semibold text-white mb-2">
                ⚡ SDK 55 Canary
              </Text>
              <Text className="text-slate-400">
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
