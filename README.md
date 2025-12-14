# React Native CSS Grid Demo 🎨

A demonstration project showcasing **native CSS Grid layout support** in React Native, powered by a patch from [@intergalacticspacehighway](https://github.com/intergalacticspacehighway).

This project applies experimental patches to React Native and Yoga (the layout engine) to enable CSS Grid properties that work natively on iOS and Android — no web views required.

## ✨ Features

- **Native CSS Grid**: Use `display: 'grid'` just like on the web
- **Grid Template Columns/Rows**: Define track sizes with `gridTemplateColumns` and `gridTemplateRows`
- **Fractional Units**: Support for `fr` units (e.g., `'1fr'`, `'2fr'`)
- **Grid Item Placement**: Position items with `gridColumnStart`, `gridColumnEnd`, `gridRowStart`, `gridRowEnd`
- **Auto-placement**: Items automatically flow into the grid
- **Gap Support**: Works seamlessly with the existing `gap` property

## 📱 Demo Screens

| Screen | Description |
|--------|-------------|
| **Home** | Overview and navigation to examples |
| **CSS Grid Example** | Demonstrates native grid layouts with spanning, fractional units, and dashboard UI |
| **Flexbox Example** | Traditional approach for comparison — shows how verbose flexbox can be for grid-like layouts |

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (specified in `packageManager`)
- Xcode (for iOS)
- Android Studio (for Android)

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd expo-css-grid-test

# Install dependencies (patches are applied automatically via postinstall)
pnpm install

# Generate native projects
pnpm run prebuild

# Run on iOS
pnpm run ios

# Run on Android
pnpm run android
```

## 🔧 How It Works

This project uses two patches applied during `postinstall`:

### 1. `react-native+0.83.0-rc.5.patch`

The main patch that adds CSS Grid support to React Native by modifying:

- **Yoga (layout engine)**: Adds grid layout algorithm, track sizing, and auto-placement
- **React Native StyleSheet**: Adds TypeScript types for grid properties
- **Native renderers**: Updates iOS and Android to recognize grid styles

### 2. `expo+55.0.0-canary-20251212-acb11f2.patch`

A supplementary patch that comments out conflicting web-only grid type definitions in Expo's React Native Web types.

## 📝 Grid Properties Supported

### Container Properties

```tsx
<View style={{
  display: 'grid',
  gridTemplateColumns: ['1fr', '1fr', '1fr'],  // Three equal columns
  gridTemplateRows: ['auto', '100', '1fr'],    // Mixed row sizes
  gap: 16,
}} />
```

### Item Properties

```tsx
<View style={{
  gridColumnStart: 1,
  gridColumnEnd: 3,    // Span 2 columns
  gridRowStart: 1,
  gridRowEnd: 2,
}} />
```

### Track Size Values

| Value | Description |
|-------|-------------|
| `number` | Fixed size in pixels (e.g., `100`) |
| `'auto'` | Size based on content |
| `'Xfr'` | Fractional unit (e.g., `'1fr'`, `'2fr'`) |
| `'X%'` | Percentage of container |

## 🆚 Grid vs Flexbox Comparison

### CSS Grid Approach

```tsx
// Clean, flat structure
<View style={{ display: 'grid', gridTemplateColumns: ['1fr', '1fr', '1fr'], gap: 8 }}>
  <View style={{ gridColumnStart: 1, gridColumnEnd: 3 }}>Spans 2 cols</View>
  <View>Item 1</View>
  <View>Item 2</View>
  <View>Item 3</View>
  <View style={{ gridRowStart: 2, gridRowEnd: 4 }}>Spans 2 rows</View>
</View>
```

### Traditional Flexbox Approach

```tsx
// Requires nested Views and manual row management
<View style={{ gap: 8 }}>
  <View style={{ flexDirection: 'row', gap: 8 }}>
    <View style={{ flex: 2 }}>Spans 2 cols</View>
    <View style={{ flex: 1 }}>Item 1</View>
  </View>
  <View style={{ flexDirection: 'row', gap: 8 }}>
    <View style={{ flex: 2, gap: 8 }}>
      <View style={{ flexDirection: 'row', gap: 8 }}>
        <View style={{ flex: 1 }}>Item 2</View>
        <View style={{ flex: 1 }}>Item 3</View>
      </View>
      {/* More nesting... */}
    </View>
    <View style={{ flex: 1 }}>Spans 2 rows</View>
  </View>
</View>
```

## ⚠️ Important Notes

### Build from Source Required

The patches modify native code, so React Native must be built from source:

```json
// app.json
{
  "expo": {
    "plugins": [
      ["expo-build-properties", {
        "ios": { "buildReactNativeFromSource": true },
        "android": { "buildReactNativeFromSource": true }
      }]
    ]
  }
}
```

### Experimental Status

This is an **experimental patch** and not officially supported by React Native. Use at your own risk in production.

### Patch Compatibility

The patches are version-specific:
- React Native: `0.83.0-rc.5`
- Expo SDK: `55.0.0-canary-20251212-acb11f2`

Updating these packages will require regenerating the patches.

## 🛠️ Tech Stack

| Package | Version |
|---------|---------|
| Expo SDK | 55 (Canary) |
| React Native | 0.83.0-rc.5 |
| React | 19.2.0 |
| Expo Router | 7.0.0 (Canary) |

## 📚 Resources

- [CSS Grid Patch by @intergalacticspacehighway](https://github.com/intergalacticspacehighway)
- [Yoga Layout Engine](https://yogalayout.dev/)
- [CSS Grid Layout (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout)
- [Expo Documentation](https://docs.expo.dev/)

## 📄 License

MIT