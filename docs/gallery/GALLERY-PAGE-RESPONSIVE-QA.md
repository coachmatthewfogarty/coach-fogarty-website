# Gallery Page Responsive QA

Status: computed QA captured 2026-05-14 using headless Chrome against `media.html`. Raw output and screenshots live in `outputs/gallery-page-spec-capture-2026-05-14/`.

## Breakpoint Results

| Viewport | No horizontal overflow | Header/nav fits | Hero wraps cleanly | Colors match | Cards align | Overlay opens | Footer aligns | Notes |
|---|---|---|---|---|---|---|---|---|
| 2560px | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Desktop split hero and 3-card previews. |
| 2200px | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Desktop split hero and 3-card previews. |
| 1920px | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Desktop split hero and 3-card previews. |
| 1600px | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Desktop split hero and 3-card previews. |
| 1440px | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Desktop split hero and 3-card previews. |
| 1280px | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Desktop split hero and 3-card previews. |
| 1025px | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Desktop split hero and 3-card previews. |
| 1024px | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Tablet stacked hero and 3-card previews. |
| 820px | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Tablet stacked hero and 3-card previews. |
| 768px | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Tablet stacked hero and 3-card previews. |
| 430px | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Mobile single-card previews; hero pills stack to one column at 430px and below. |
| 390px | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Mobile single-card previews; hero pills stack to one column at 430px and below. |
| 375px | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Mobile single-card previews; hero pills stack to one column at 430px and below. |

## Measured Layout Table

| Viewport | Shell | Header | Hero | Hero image | Hero pills | First section | Footer |
|---|---|---|---|---|---|---|---|
| 2560x1440 | 2240px | 2560x44 | 2240x568 | 716.8x500 | 1405.2x176 | 2240x837.47 | 2560x265.5 |
| 2200x1240 | 1880px | 2200x44 | 1880x580 | 660x512 | 1102x176 | 1880x747.47 | 2200x265.5 |
| 1920x1080 | 1680px | 1920x44 | 1680x448.59 | 480x380.59 | 1067.42x164 | 1680x695.53 | 1920x265.5 |
| 1600x900 | 1512px | 1600x44 | 1512x429.58 | 400x370 | 980x140 | 1512x647.11 | 1600x265.5 |
| 1440x900 | 1352px | 1440x44 | 1352x444.17 | 390x384.59 | 850.56x128 | 1352x606.06 | 1440x265.5 |
| 1280x800 | 1192px | 1280x44 | 1192x433.69 | 390x380.5 | 694.73x134.06 | 1192x564.98 | 1280x265.5 |
| 1025x768 | 937px | 1025x44 | 937x433.69 | 390x380.5 | 439.73x108 | 937x527.52 | 1025x265.5 |
| 1024x768 | 968px | 1024x59 | 936x804 | 870x320 | 870x76 | 968x2428.72 | 1024x242.34 |
| 820x1180 | 770.8px | 820x59 | 732x804 | 666x320 | 666x76 | 770.8x1990.34 | 820x277.44 |
| 768x1024 | 721.91px | 768x59 | 680x804 | 614x320 | 614x76 | 721.91x1883.52 | 768x277.44 |
| 430x932 | 406px | 430x57 | 342x686.14 | 308x192.5 | 308x160 | 406x583.77 | 430x268.44 |
| 390x844 | 366px | 390x57 | 302x682.63 | 268x167.5 | 268x160 | 366x551.39 | 390x268.44 |
| 375x812 | 351px | 375x57 | 287x694.73 | 253x158.13 | 253x160 | 351x539.03 | 375x268.44 |

## Screenshot List

- `outputs/gallery-page-spec-capture-2026-05-14/gallery-page-2560.png`
- `outputs/gallery-page-spec-capture-2026-05-14/gallery-page-1920.png`
- `outputs/gallery-page-spec-capture-2026-05-14/gallery-page-1024.png`
- `outputs/gallery-page-spec-capture-2026-05-14/gallery-page-820.png`
- `outputs/gallery-page-spec-capture-2026-05-14/gallery-page-430.png`
- `outputs/gallery-page-spec-capture-2026-05-14/gallery-page-390.png`
- `outputs/gallery-page-spec-capture-2026-05-14/gallery-page-375.png`

## Confirmations

- 2560px: no overflow; shell 2240px; hero/image/pills fit; overlay opens.
- 2200px+: no overflow; shell 1880px at 2200 due 160px wide gutters; overlay opens.
- 1920px: no overflow; shell 1680px; desktop split stable.
- 1600px: no overflow; shell 1512px; desktop split stable.
- 1440px: no overflow; shell 1352px; desktop split stable.
- 1280px: no overflow; shell 1192px; desktop split stable.
- 1025px: no overflow; desktop starts; header stays 44px; split hero still active.
- 1024px: no overflow; tablet stack starts; header 59px; hero becomes one-column.
- 820px: no overflow; tablet stack stable; footer accordions follow the <=1024 tablet/mobile behavior.
- 768px: no overflow; tablet stack stable.
- 430px / 390px / 375px: no overflow; mobile drawer header; single-card previews; action rows fit; overlay opens and thumb strip remains inside viewport.
