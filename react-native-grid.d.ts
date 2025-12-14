// Ambient module augmentation to expose CSS Grid props on React Native styles.
// This matches the patched React Native grid support so TypeScript accepts array
// track definitions and grid line placement values used in the app.

import 'react-native';

declare module 'react-native' {
  type GridTrackSizeValue =
    | number
    | string
    | {
        min: number | string;
        max: number | string;
      };

  interface FlexStyle {
    // Enable display: 'grid'
    display?: 'none' | 'flex' | 'contents' | 'grid';

    // Grid container properties
    gridTemplateColumns?: readonly GridTrackSizeValue[];
    gridTemplateRows?: readonly GridTrackSizeValue[];
    gridAutoColumns?: readonly GridTrackSizeValue[];
    gridAutoRows?: readonly GridTrackSizeValue[];

    // Grid item placement
    gridColumnStart?: number | 'auto' | `span ${number}`;
    gridColumnEnd?: number | 'auto' | `span ${number}`;
    gridRowStart?: number | 'auto' | `span ${number}`;
    gridRowEnd?: number | 'auto' | `span ${number}`;
  }

  // ViewStyle already extends FlexStyle; this augmentation ensures the
  // grid props surface on View styles in JSX type-checking contexts.
  interface ViewStyle extends FlexStyle {}
}
