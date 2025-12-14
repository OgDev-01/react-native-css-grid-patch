### Grid layout fix TODO

- [ ] Add Yoga grid algorithm sources (`GridLayout.h/.cpp`, `AutoPlacement.h`, `GridTrack.h`, `GridLine.h`) under `ReactCommon/yoga/yoga/algorithm/grid`
- [ ] Wire `CalculateLayout` to invoke grid algorithm when `display: grid` is set
- [ ] Ensure `LayoutPassReason` includes `kGridLayout` and events fire correctly
- [ ] Patch Yoga `Style`/`Layout` to include grid fields and defaults
- [ ] Regenerate `patch-package` patch capturing all Yoga grid changes
- [ ] Re-run iOS build and verify grid layouts render and no Yoga headers are missing