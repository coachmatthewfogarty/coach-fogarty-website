# About Page Desktop Breakpoint Chart

Locked About page responsive ranges for sharing in chat.

| Width range | Layout | Gallery | Visible images | Body font size | Line-height | Paragraph gap | Height sync |
|---|---|---:|---:|---:|---:|---:|---|
| `1025px-1279px` | Stacked compact desktop | `3 x 4` below signature | 12 | `0.88rem` | `1.56` | `11px` | Off |
| `1280px-1439px` | Stacked compact desktop | `3 x 4` below signature | 12 | `0.88rem` | `1.56` | `11px` | Off |
| `1440px-1599px` | Two-column desktop | `3 x 4` right side | 12 | `clamp(0.92rem, calc(0.74rem + 0.2vw), 1.05rem)` | `1.4 / 1.32 currently split` | `12px` | On |
| `1600px-1919px` | Two-column desktop | `3 x 4` right side | 12 | `clamp(0.92rem, calc(0.74rem + 0.2vw), 1.05rem)` | `1.32` | `12px` | On |
| `1920px-2199px` | Two-column desktop | `3 x 4` right side | 12 | `clamp(1rem, 0.54vw, 1.12rem)` | `1.6` | `12px` | On |
| `2200px+` | Two-column desktop | `3 x 4` right side | 12 | `clamp(1.06rem, 0.5vw, 1.18rem)` | `1.6` | `12px` | On |

Note: `1440px-1599px` is one layout range, but the current typography still has an internal line-height split: `1440px-1499px` uses `1.4`, and `1500px-1599px` uses `1.32`.
