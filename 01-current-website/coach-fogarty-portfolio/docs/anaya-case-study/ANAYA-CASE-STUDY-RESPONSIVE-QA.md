# Anaya Case Study Responsive QA

Active QA date: 2026-05-14

QA target: `http://127.0.0.1:4173/anaya-case-study.html` served from the local website folder. Browser screenshots were captured for the full page and for the shared gallery overlay at each requested viewport.

## Screenshot Index

| Viewport | Full-page screenshot | Overlay screenshot |
| --- | --- | --- |
| 2560x1440 | [page](screenshots/anaya-case-study-2560x1440.png) | [overlay](screenshots/anaya-case-study-overlay-2560x1440.png) |
| 1920x1080 | [page](screenshots/anaya-case-study-1920x1080.png) | [overlay](screenshots/anaya-case-study-overlay-1920x1080.png) |
| 1600x900 | [page](screenshots/anaya-case-study-1600x900.png) | [overlay](screenshots/anaya-case-study-overlay-1600x900.png) |
| 1440x900 | [page](screenshots/anaya-case-study-1440x900.png) | [overlay](screenshots/anaya-case-study-overlay-1440x900.png) |
| 1280x800 | [page](screenshots/anaya-case-study-1280x800.png) | [overlay](screenshots/anaya-case-study-overlay-1280x800.png) |
| 1025x768 | [page](screenshots/anaya-case-study-1025x768.png) | [overlay](screenshots/anaya-case-study-overlay-1025x768.png) |
| 1024x768 | [page](screenshots/anaya-case-study-1024x768.png) | [overlay](screenshots/anaya-case-study-overlay-1024x768.png) |
| 820x1180 | [page](screenshots/anaya-case-study-820x1180.png) | [overlay](screenshots/anaya-case-study-overlay-820x1180.png) |
| 768x1024 | [page](screenshots/anaya-case-study-768x1024.png) | [overlay](screenshots/anaya-case-study-overlay-768x1024.png) |
| 430x932 | [page](screenshots/anaya-case-study-430x932.png) | [overlay](screenshots/anaya-case-study-overlay-430x932.png) |
| 390x844 | [page](screenshots/anaya-case-study-390x844.png) | [overlay](screenshots/anaya-case-study-overlay-390x844.png) |
| 375x812 | [page](screenshots/anaya-case-study-375x812.png) | [overlay](screenshots/anaya-case-study-overlay-375x812.png) |


## Results By Breakpoint

| Viewport | Client width | Shell width | Header h | Hero rendered | Hero columns | Chip columns | Story columns | Gallery columns | Broken images | Overlay | Overflow check |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2560x1440 | 2545px | 2240px | 44px | 2240x568px | 1405.2px 716.797px | 460.391px 460.406px 460.391px | 1207.5px 892.5px | 694px 694px 694px | 0 | Pass | Shared 100vw chrome flag |
| 1920x1080 | 1905px | 1680px | 44px | 1680x449px | 1067.42px 480px | 347.797px 347.812px 347.797px | 899.203px 664.641px | 515.281px 515.281px 515.281px | 0 | Pass | Shared 100vw chrome flag |
| 1600x900 | 1585px | 1512px | 44px | 1512x430px | 1000.56px 400px | 318.656px 318.672px 318.656px | 811.438px 599.781px | 464.406px 464.406px 464.406px | 0 | Pass | Shared 100vw chrome flag |
| 1440x900 | 1425px | 1352px | 44px | 1352x444px | 850.562px 390px | 275.516px 275.516px 275.531px | 722.188px 533.812px | 412.656px 412.672px 412.656px | 0 | Pass | Shared 100vw chrome flag |
| 1280x800 | 1265px | 1192px | 44px | 1192x434px | 694.734px 390px | 223.578px 223.578px 223.578px | 630.188px 465.812px | 359.328px 359.328px 359.344px | 0 | Pass | Shared 100vw chrome flag |
| 1025x768 | 1010px | 937px | 44px | 937x434px | 439.734px 390px | 138.578px 138.578px 138.578px | 483.562px 357.438px | 274.328px 274.328px 274.344px | 0 | Pass | Shared 100vw chrome flag |
| 1024x768 | 1009px | 953px | 59px | 953x762px | 911px | 294.328px 294.328px 294.344px | 895px | 895px | 0 | Pass | Shared 100vw chrome flag |
| 820x1180 | 805px | 756px | 59px | 756x735px | 713.797px | 229.188px 229.188px 229.188px | 704.609px | 704.609px | 0 | Pass | Shared 100vw chrome flag |
| 768x1024 | 753px | 707px | 59px | 707x722px | 664.906px | 213.438px 213.453px 213.453px | 658.844px | 658.844px | 0 | Pass | Shared 100vw chrome flag |
| 430x932 | 415px | 406px | 57px | 406x737px | 372px | 119.406px 119.422px 119.406px | 372px | 372px | 0 | Pass | Pass |
| 390x844 | 375px | 366px | 57px | 366x734px | 332px | 106.5px 106.516px 106.5px | 332px | 332px | 0 | Pass | Pass |
| 375x812 | 360px | 351px | 57px | 351x721px | 317px | 101.656px 101.672px 101.656px | 317px | 317px | 0 | Pass | Pass |


## Pass/Watch Notes

- Header, hero, accolade chips, story sections, production cards, generated galleries, next-level CTA, and footer rendered at every requested breakpoint.
- No broken images were detected in the DOM at any breakpoint.
- The gallery/lightbox opened at every requested breakpoint; overlay screenshots were captured for all 12 viewport sizes.
- Buttons and chip text did not visibly wrap awkwardly in captured screenshots. Mobile chip text is compact but remains contained.
- Tablet/mobile layouts stack story cards and galleries to one column as currently coded.
- Desktop/tablet audit flags horizontal overflow because shared header/footer chrome use `100vw` while the browser client width excludes the vertical scrollbar. This appears to be a shared chrome measurement issue rather than an Anaya-only content overflow.

## Remaining Issue

Shared chrome uses full-bleed `100vw`, producing a scrollWidth/clientWidth mismatch on desktop/tablet QA. Because this rule is shared by header/footer across pages and body overflow hides the horizontal axis, it was documented but not changed in this Anaya-only pass.
